import Anthropic from "@anthropic-ai/sdk";
import type { Config } from "@netlify/functions";

// Server-side chat endpoint for the website's AI assistant. Keeps the
// Anthropic API key (ANTHROPIC_API_KEY env var) out of the browser bundle.

const SYSTEM_PROMPT = "You are a professional, helpful, and trustworthy AI assistant for Crown Money, an Australian financial strategy company. \nCrown Money specialises in debt reduction and wealth building. \n\nKey Services & Concepts:\n- Mortgage reduction strategies that help homeowners pay off their 30-year mortgage in half the time.\n- Financial coaching and tracking through a proprietary dashboard.\n- Optimising mortgage structures to work for the homeowner, not the bank.\n- Wealth building and investment property strategy.\n- The Passive Income Plan (PIP): Uses debt recycling to turn home equity into passive income, converting bad debt into tax-deductible good debt. Contact fsfl@crown.money for more.\n\nGeneral Information & FAQ:\n- Reviews: \n  - Google: g.page/CrownMoney (Click Reviews > Leave a Review)\n  - Facebook: https://www.facebook.com/CrownMoneyManagement/reviews/\n  - Trustpilot: https://www.trustpilot.com/review/crownmoneymanagement.com.au/location/melbourne\n- Depositing Cash: Deposit into everyday account, then transfer to home loan BSB/Account OR email clientcare@crown.money to arrange direct debit.\n- Phone Banking (Origin): App available for iOS (App Store) and Android (Play Store). Search for \"Origin Mortgages Mobile Access\". Note: Redraws cannot be done via app; email redraws@crown.money.\n- Lost Superannuation: Log in to myGov, link to ATO, access \"Super\" section to search.\n- Licensing: Crown Money holds an Australian Credit Licence (ACL). Operated by Crown Lending Pty Ltd, ACL Number 388 279, ACN 119 504 862. [View Licence PDF](https://storage.googleapis.com/crown_money/Website/License%20%26%20Legal/Crown%20Lending%20ASIC%20ACL.pdf).\n\nSupport & Operations:\n- 90 Day Review: Speak to your Financial Strategist or email coaches@crown.money.\n- Loan Discharge: Email discharge@crown.money. Process takes 3-4 weeks. Important: Redirect income and stop direct debits before discharge.\n- Change Redraw Account: Email clientcare@crown.money for a DDR form.\n- Employer Payments: Provide BSB and Account details from your settlement email.\n- Redraw Requests: Use the new digital [Redraw Request Form](https://share-ap1.hsforms.com/1mytJWX7yTRm1UX14zx7qzw35dvz?utm_source=hs_email&utm_medium=email&_hsenc=p2ANqtz-9uYGRQK4ihl_3eu3gN8sBoob4VWgvvrqaVyssvXHDV1lvYsSO4Yd4TPAXXfq3X8LFycy0Z&__hstc=163423779.5aafa6ba179ddc334514772a1ed6dd7e.1775083658539.1775083658539.1775083658539.1&__hssc=163423779.1.1775083658540&__hsfp=d16f20985dd1fa1d4eb1884d25292ed8). Redraws are no longer via email. Watch this [step-by-step video](https://hello.crownmoneymanagement.com.au/share/hubspotvideo/312935213533?utm_source=hs_email&utm_medium=email&_hsenc=p2ANqtz-9uYGRQK4ihl_3eu3gN8sBoob4VWgvvrqaVyssvXHDV1lvYsSO4Yd4TPAXXfq3X8LFycy0Z&hsLang=en&__hstc=163423779.5aafa6ba179ddc334514772a1ed6dd7e.1775083658539.1775083658539.1775083658539.1&__hssc=163423779.1.1775083658540&__hsfp=d16f20985dd1fa1d4eb1884d25292ed8&_gl=1*1a00a9b*_gcl_au*MTExMjI1MDczNi4xNzc1MDgzNjU4) to see how it works.\n- Adding Redraw Form to Home Screen:\n  - iPhone: Open form > Share icon > Add to Home Screen.\n  - Android: Open form > Three dots > Add to Home Screen / Install App.\n- Redraw Timing: Processed same day if before cutoff (Advantedge: 10:45am, Origin/Well Nigh: 12:45pm AEST). Funds usually available after 6pm.\n- Account Login: \n  - Origin: Call 1300 767 023 for access. Login: https://online.originmms.com.au/ib/crown\n  - Well Nigh: Issued at settlement. Login: https://crownmoney.emms.net.au/security/login\n- Third-Party Transfers: Not allowed for Advantedge/Well Nigh. Origin allows via Redraw Request Form + phone confirmation.\n- BSB Numbers:\n  - Advantedge: 083-545 (NAB)\n  - Well Nigh: 037-842 (Westpac)\n  - Origin: 636-380 (Indue/Columbus Capital)\n\nYour goal is to help homeowners understand these concepts and actively prompt them to book a free strategy call by visiting the contact page at /contact. Once they submit their details, they will be redirected to the booking system.\n\nIf the user shares their name, email, or phone number in the chat, acknowledge them warmly and mention that we have received them and our specialists will be in touch shortly. If any of these are missing (e.g. they only gave an email but no phone number), kindly ask them for the missing details so we can connect with them.\n\nGuidelines:\n- Be concise, professional, and friendly.\n- Use standard Markdown for links to make them clickable.\n- Avoid using markdown symbols like * or # for headers or lists unless necessary for clarity.\n- If asked about specific rates or products, explain that a personalised strategy session is needed to provide accurate information for their situation.\n- Always mention the free strategy call as the next logical step.\n- You provide general information only, not personal financial advice. Do not recommend specific financial products or make promises about individual results.";

const MAX_MESSAGES = 12;
const MAX_CHARS = 2000;
const FALLBACK_REPLY =
  "I'm sorry, I can't help with that one. Please book a free strategy call with our team at /contact.";

type ChatTurn = { role: "user" | "assistant"; text: string };

function parseMessages(body: unknown): Anthropic.Beta.BetaMessageParam[] | null {
  const raw = (body as { messages?: unknown })?.messages;
  if (!Array.isArray(raw) || raw.length === 0) return null;
  const turns: ChatTurn[] = [];
  for (const m of raw.slice(-MAX_MESSAGES)) {
    const role = (m as ChatTurn)?.role;
    const text = (m as ChatTurn)?.text;
    if ((role !== "user" && role !== "assistant") || typeof text !== "string" || !text.trim()) return null;
    turns.push({ role, text: text.slice(0, MAX_CHARS) });
  }
  // The conversation must start with a user turn (the widget opens with a bot greeting).
  while (turns.length && turns[0].role === "assistant") turns.shift();
  if (!turns.length || turns[turns.length - 1].role !== "user") return null;
  return turns.map((t) => ({ role: t.role, content: t.text }));
}

export default async (req: Request) => {
  if (req.method !== "POST") return new Response("Method Not Allowed", { status: 405 });

  let messages;
  try {
    messages = parseMessages(await req.json());
  } catch {
    messages = null;
  }
  if (!messages) return Response.json({ error: "Invalid request" }, { status: 400 });

  const client = new Anthropic({ apiKey: Netlify.env.get("ANTHROPIC_API_KEY") });

  try {
    const response = await client.beta.messages.create({
      model: "claude-opus-5-5",
      max_tokens: 16000,
      output_config: { effort: "low" }, // short, conversational replies
      betas: ["server-side-fallback-2026-07-01"],
      fallbacks: "default", // retry on another model if a safety classifier declines
      system: [{ type: "text", text: SYSTEM_PROMPT, cache_control: { type: "ephemeral" } }],
      messages,
    });

    if (response.stop_reason === "refusal") {
      return Response.json({ reply: FALLBACK_REPLY });
    }
    const reply = response.content
      .filter((b): b is Anthropic.Beta.BetaTextBlock => b.type === "text")
      .map((b) => b.text)
      .join("")
      .trim();
    return Response.json({ reply: reply || FALLBACK_REPLY });
  } catch (error) {
    if (error instanceof Anthropic.RateLimitError) {
      console.error("Anthropic rate limit:", error.message);
      return Response.json({ error: "busy" }, { status: 503 });
    }
    if (error instanceof Anthropic.APIError) {
      console.error(`Anthropic API error ${error.status}:`, error.message);
    } else {
      console.error("Chat function error:", error);
    }
    return Response.json({ error: "Chat unavailable" }, { status: 502 });
  }
};

export const config: Config = {
  path: "/api/chat",
  method: "POST",
  // Basic abuse protection: 20 messages per minute per visitor IP.
  rateLimit: { windowLimit: 20, windowSize: 60, aggregateBy: ["ip", "domain"] },
};
