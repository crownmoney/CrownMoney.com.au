// Guides: one page each at /guides/:slug, plus the /guides hub.
//
// REVIEW BEFORE PUBLISHING. Guides are money content, which Google and AI
// answer engines hold to a high standard (YMYL). Each guide starts as a draft:
// noindex, left out of the sitemap, llms.txt and the hub. To publish one:
//   1. A licensed Crown Money team member reviews it and fills in `reviewedBy`.
//   2. Set `draft: false` and update `updated`.
//
// Worked examples were calculated with a simple monthly amortisation model:
// $600,000 loan, 6.00% p.a. variable, 30-year term, principal and interest,
// no fees, rate unchanged for the life of the loan.

export type GuideBlock =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'table'; head: string[]; rows: string[][]; caption?: string }
  | { type: 'callout'; text: string }
  | { type: 'links'; title: string; items: { label: string; href: string }[] };

export interface GuideFaq {
  q: string;
  a: string;
}

export interface Guide {
  slug: string;
  draft: boolean;
  headline: string;
  /** <title>, max 60 characters including " | Crown Money". */
  seoTitle: string;
  /** Meta description, max 155 characters. */
  description: string;
  /** Short answer shown at the top (also what AI answer engines quote). */
  summary: string;
  author: string;
  /** Name and role of the licensed reviewer. Required before publishing. */
  reviewedBy?: string;
  updated: string;
  blocks: GuideBlock[];
  faqs: GuideFaq[];
}

const EXAMPLE_NOTE =
  'Examples assume a $600,000 loan at 6.00% p.a. over 30 years, principal and interest, with the rate unchanged and no fees. They are illustrations only. Your results will depend on your loan, rate changes and fees.';

export const GUIDES: Guide[] = [
  {
    slug: 'how-to-pay-off-your-mortgage-faster',
    draft: true,
    headline: 'How to Pay Off Your Mortgage Faster in Australia',
    seoTitle: 'How to Pay Off Your Mortgage Faster in Australia',
    description:
      'Practical ways Australian homeowners pay off a home loan sooner: extra repayments, offset accounts, repayment frequency, refinancing traps and budgeting.',
    summary:
      'To pay off your mortgage faster, reduce the balance that interest is charged on, as early and as consistently as you can. The main levers are extra repayments, keeping savings in an offset account, paying more often, not resetting your loan term when you refinance, and a budget that sends every spare dollar to the loan automatically.',
    author: 'Crown Money team',
    updated: '2026-11-03',
    blocks: [
      { type: 'h2', text: 'Why small changes make a big difference' },
      {
        type: 'p',
        text: 'Home loan interest is calculated on the balance you owe, usually daily, and charged monthly. Early in a 30-year loan most of each repayment goes to interest: on a $600,000 loan at 6.00%, the first month’s interest is $3,000 of a $3,597 repayment. Every extra dollar you put against the balance stops being charged interest for the rest of the loan, which is why money paid early has the biggest effect.',
      },
      {
        type: 'table',
        caption: 'Extra monthly repayments on a $600,000 loan at 6.00% over 30 years',
        head: ['Extra each month', 'Loan paid off in', 'Time saved', 'Interest saved'],
        rows: [
          ['$0', '30 years', '—', '—'],
          ['$250', '25 years 4 months', '4 years 8 months', 'about $127,900'],
          ['$500', '22 years 1 month', '7 years 11 months', 'about $212,700'],
          ['$1,000', '17 years 8 months', '12 years 4 months', 'about $320,600'],
        ],
      },
      { type: 'callout', text: EXAMPLE_NOTE },

      { type: 'h2', text: '1. Make extra repayments' },
      {
        type: 'p',
        text: 'Paying more than the minimum is the most direct way to shorten a loan. Variable loans usually allow unlimited extra repayments. Fixed-rate loans often cap them each year, and break costs can apply if you go over, so check your loan terms first. Regular amounts work best because they compound: the balance falls, so more of every later repayment goes to principal.',
      },
      {
        type: 'p',
        text: 'Lump sums such as tax refunds, bonuses or an inheritance help too. One Crown Money client put a small inheritance against their loan and went from owing $360,000 to $95,000 in three years.',
      },

      { type: 'h2', text: '2. Keep your savings in an offset account' },
      {
        type: 'p',
        text: 'An offset account is a transaction account linked to your home loan. Its balance is subtracted from the loan balance before interest is calculated, so $50,000 in offset against a $600,000 loan means you pay interest on $550,000. The money stays yours to use. Having your salary paid into the offset and paying expenses by credit card (cleared in full each month) keeps the average balance higher for longer.',
      },
      {
        type: 'p',
        text: 'Keeping an average of $50,000 in offset on the example loan would save about $202,000 in interest and finish the loan around four years and eight months early, without changing your repayments.',
      },

      { type: 'h2', text: '3. Pay fortnightly, not monthly' },
      {
        type: 'p',
        text: 'There are 26 fortnights in a year, so paying half your monthly repayment every fortnight adds up to 13 monthly repayments instead of 12. On the example loan, that alone shortens the term by about five and a half years and saves around $149,000 in interest. Check how your lender sets fortnightly repayments: some divide the annual total by 26, which gives no extra benefit.',
      },

      { type: 'h2', text: '4. Don’t reset the clock when you refinance' },
      {
        type: 'p',
        text: 'Refinancing to a lower rate can save money, but many borrowers take a new 30-year term at the same time. Lower repayments feel good, but the loan then runs longer and can cost more overall. If you refinance, keep your repayments at least as high as before, or choose a term that matches the years you had left.',
      },
      {
        type: 'p',
        text: 'Crown Money clients Peter and Karina refinanced more than once chasing a better rate. Each time the term went back to 30 years and the balance barely moved. In their first year with a structured plan they paid off about $47,000.',
      },

      { type: 'h2', text: '5. Avoid interest-only periods if your goal is to own your home' },
      {
        type: 'p',
        text: 'Interest-only repayments are lower because none of the money reduces the balance. When the interest-only period ends, repayments jump, because the same debt must be repaid over fewer years. If paying off your home is the goal, principal-and-interest repayments are usually the better fit.',
      },

      { type: 'h2', text: '6. Build a budget that runs itself' },
      {
        type: 'p',
        text: 'Most households don’t lack income: the money that could go to the loan leaks away on small, untracked spending. A simple system fixes this. Pay bills automatically, give yourself a set weekly spending amount, and let everything left over sit against the loan. This is the approach Crown Money’s coaching is built around, and it is why clients often pay off many times more each year without big lifestyle changes.',
      },
      {
        type: 'ul',
        items: [
          'Work out your real monthly spending using the last three months of statements.',
          'Automate fixed bills and set a weekly allowance for day-to-day spending.',
          'Send your surplus to the loan or offset as soon as you are paid, not at the end of the month.',
          'Review every 90 days and move the target up when your income rises.',
        ],
      },

      { type: 'h2', text: '7. Check your rate and fees every year' },
      {
        type: 'p',
        text: 'Lenders often offer new customers lower rates than existing ones. Asking your lender to match a competitor’s rate is free and can save thousands. Also check annual package fees and whether you actually use the features you pay for.',
      },

      {
        type: 'links',
        title: 'Run your own numbers',
        items: [
          { label: 'Mortgage reduction calculator', href: '/mortgage-reduction-calculator' },
          { label: 'Budget planner', href: '/tools/budget' },
          { label: 'Redraw and offset withdrawal calculator', href: '/tools/withdrawal-impact' },
          { label: 'Client success stories', href: '/success-stories' },
        ],
      },
    ],
    faqs: [
      {
        q: 'What is the fastest way to pay off a mortgage?',
        a: 'Reduce the balance that interest is charged on as early as possible: make regular extra repayments, keep savings in an offset account and avoid extending your loan term. Combining these with an automated budget usually has the biggest effect.',
      },
      {
        q: 'Is it better to make extra repayments or put money in an offset account?',
        a: 'Both reduce interest by the same amount for each dollar. An offset keeps the money easier to access, while extra repayments go into redraw, which a lender can restrict. If you have an investment property or may convert your home to one, an offset is usually more flexible for tax purposes.',
      },
      {
        q: 'How much difference does paying fortnightly make?',
        a: 'Paying half your monthly repayment every fortnight adds one extra monthly repayment each year. On a $600,000 loan at 6.00% over 30 years, that shortens the loan by about five and a half years and saves around $149,000 in interest.',
      },
    ],
  },

  {
    slug: 'offset-account-vs-redraw',
    draft: true,
    headline: 'Offset Account vs Redraw: Which Is Better?',
    seoTitle: 'Offset Account vs Redraw Facility Explained | Crown Money',
    description:
      'Offset accounts and redraw facilities both cut home loan interest. Here is how each works, how they differ on access and tax, and which suits you.',
    summary:
      'An offset account and a redraw facility save the same amount of interest for every dollar you hold in them. The difference is access and flexibility: offset money sits in a separate everyday account you can use freely, while redraw money has been paid into the loan and is withdrawn on the lender’s terms. Offsets also tend to be cleaner for tax if the property may later become an investment.',
    author: 'Crown Money team',
    updated: '2026-11-03',
    blocks: [
      { type: 'h2', text: 'How an offset account works' },
      {
        type: 'p',
        text: 'An offset is a transaction or savings account linked to your home loan. Its balance is subtracted from what you owe before interest is calculated. With $600,000 owing and $50,000 in offset, you pay interest on $550,000. On a 6.00% loan, that cuts the monthly interest from $3,000 to $2,750. Your repayments stay the same, so the extra $250 goes to principal and the loan shortens.',
      },
      { type: 'h2', text: 'How a redraw facility works' },
      {
        type: 'p',
        text: 'Redraw lets you take back extra repayments you have made into the loan. Because the money is inside the loan, it reduces the balance directly. The interest saving is the same as an offset holding the same amount.',
      },
      {
        type: 'table',
        caption: 'Offset account vs redraw at a glance',
        head: ['', 'Offset account', 'Redraw facility'],
        rows: [
          ['Interest saving per dollar', 'Same', 'Same'],
          ['Where the money sits', 'A separate account in your name', 'Inside the home loan'],
          ['Access', 'Card, transfers and direct debits like any account', 'Withdrawn from the loan, sometimes with minimums or fees'],
          ['Can the lender restrict access?', 'Rarely', 'Yes, lenders can limit or change redraw'],
          ['Usually available on', 'Variable loans, often in a package with a fee', 'Most variable loans; limited on fixed loans'],
          ['Tax if the home later becomes an investment', 'Generally cleaner: the loan balance is untouched', 'Redrawing for private use can reduce the deductible part of the loan'],
        ],
      },
      { type: 'h2', text: 'Why access matters' },
      {
        type: 'p',
        text: 'Redraw money is technically a repayment the lender lets you borrow back. Lenders can set minimum withdrawal amounts, charge fees or limit redraw, for example if your repayments fall behind. Money in an offset stays in your own account. If you might need the money at short notice, an offset gives more certainty.',
      },
      { type: 'h2', text: 'Why tax matters' },
      {
        type: 'p',
        text: 'If you later rent out the property, the interest on the loan may become tax-deductible. Deductibility depends on what the borrowed money is used for. Withdrawing redraw for a private purpose, such as a car or a new home, generally creates new borrowing for that purpose, which is not deductible. Using an offset leaves the original loan untouched. Get advice from a registered tax agent before making this decision.',
      },
      { type: 'h2', text: 'Which should you choose?' },
      {
        type: 'ul',
        items: [
          'Choose an offset if you want everyday access to your savings, you may turn the home into an investment later, or your income goes straight into one account.',
          'Choose redraw if you want to avoid package fees, you rarely need the money, and putting it out of easy reach helps you not spend it.',
          'Compare the package fee with the saving: an offset only pays off if your average balance is large enough.',
        ],
      },
      { type: 'callout', text: EXAMPLE_NOTE },
      {
        type: 'links',
        title: 'Related tools and guides',
        items: [
          { label: 'Redraw and offset withdrawal calculator', href: '/tools/withdrawal-impact' },
          { label: 'How to pay off your mortgage faster', href: '/guides/how-to-pay-off-your-mortgage-faster' },
          { label: 'Mortgage reduction calculator', href: '/mortgage-reduction-calculator' },
        ],
      },
    ],
    faqs: [
      {
        q: 'Does an offset account save more interest than redraw?',
        a: 'No. Each dollar in an offset or in redraw reduces the interest-bearing balance by the same amount. The differences are access, fees and tax treatment.',
      },
      {
        q: 'Is the money in an offset account taxed?',
        a: 'An offset account does not earn interest, so there is no interest income to declare. The benefit comes as lower interest on your home loan.',
      },
      {
        q: 'Can my lender stop me using redraw?',
        a: 'Yes. Redraw is offered on the lender’s terms, and lenders can set minimums, charge fees or restrict access, for example if repayments are behind. Check your loan contract.',
      },
    ],
  },

  {
    slug: 'extra-repayments-how-much-can-you-save',
    draft: true,
    headline: 'Extra Home Loan Repayments: How Much Can You Save?',
    seoTitle: 'Extra Mortgage Repayments: How Much You Save | Crown Money',
    description:
      'See how much time and interest extra home loan repayments save, from $250 to $1,000 a month, plus lump sums, fixed-rate limits and when to make them.',
    summary:
      'On a $600,000 loan at 6.00% over 30 years, an extra $500 a month pays the loan off almost eight years sooner and saves about $212,700 in interest. The earlier and more regularly you make extra repayments, the more they save.',
    author: 'Crown Money team',
    updated: '2026-11-03',
    blocks: [
      { type: 'h2', text: 'How much extra repayments save' },
      {
        type: 'p',
        text: 'The minimum repayment on a $600,000 loan at 6.00% over 30 years is $3,597 a month, and total interest over the life of the loan is about $695,000. Adding a fixed extra amount every month changes that significantly.',
      },
      {
        type: 'table',
        caption: 'Extra monthly repayments on a $600,000 loan at 6.00% over 30 years',
        head: ['Extra each month', 'Total monthly repayment', 'Loan paid off in', 'Interest saved'],
        rows: [
          ['$0', '$3,597', '30 years', '—'],
          ['$250', '$3,847', '25 years 4 months', 'about $127,900'],
          ['$500', '$4,097', '22 years 1 month', 'about $212,700'],
          ['$1,000', '$4,597', '17 years 8 months', 'about $320,600'],
        ],
      },
      { type: 'callout', text: EXAMPLE_NOTE },
      { type: 'h2', text: 'Why earlier is better' },
      {
        type: 'p',
        text: 'Interest is charged on the balance you owe. A dollar paid off in year one avoids interest for the remaining 29 years; a dollar paid off in year 25 avoids it for only five. Starting extra repayments early, even small ones, usually beats waiting to make larger ones later.',
      },
      { type: 'h2', text: 'Lump sums count too' },
      {
        type: 'p',
        text: 'Tax refunds, bonuses, gifts and inheritances can go straight against the loan or into an offset. Each lump sum reduces the balance and every future interest charge with it.',
      },
      { type: 'h2', text: 'Check your loan type first' },
      {
        type: 'ul',
        items: [
          'Variable loans usually allow unlimited extra repayments at no cost.',
          'Fixed-rate loans often cap extra repayments each year, and paying over the cap can trigger break costs.',
          'Split loans let you keep part fixed and make extra repayments on the variable part.',
          'Extra repayments usually sit in redraw. Check whether your lender limits or charges for redraw.',
        ],
      },
      { type: 'h2', text: 'Where the extra money comes from' },
      {
        type: 'p',
        text: 'For most households, the extra repayment comes from spending they don’t track rather than from earning more. Automating bills, setting a weekly spending allowance and sending the surplus to the loan on payday turns small leaks into regular extra repayments. Crown Money client Marcus and Taryn paid $80,000 off in 12 months, compared with just under $10,000 the year before, without changing much about their lifestyle.',
      },
      {
        type: 'links',
        title: 'Run your own numbers',
        items: [
          { label: 'Mortgage reduction calculator', href: '/mortgage-reduction-calculator' },
          { label: 'Budget planner', href: '/tools/budget' },
          { label: 'Offset account vs redraw', href: '/guides/offset-account-vs-redraw' },
        ],
      },
    ],
    faqs: [
      {
        q: 'Do extra repayments reduce my loan term or my repayments?',
        a: 'Usually the term. Most lenders keep your minimum repayment the same, so extra payments shorten the loan. Some lenders will recalculate a lower minimum if you ask.',
      },
      {
        q: 'Is it better to pay extra or invest?',
        a: 'Paying extra off a home loan gives a guaranteed, tax-free return equal to your interest rate. Investing may return more but carries risk. Many people do both; consider getting personal financial advice.',
      },
      {
        q: 'Can I make extra repayments on a fixed-rate loan?',
        a: 'Often only up to an annual limit set by the lender. Going over it can trigger break costs, so check your loan terms.',
      },
    ],
  },

  {
    slug: 'fortnightly-vs-monthly-repayments',
    draft: true,
    headline: 'Fortnightly vs Monthly Mortgage Repayments',
    seoTitle: 'Fortnightly vs Monthly Mortgage Repayments | Crown Money',
    description:
      'Paying half your monthly mortgage repayment every fortnight adds an extra month each year. See how much time and interest it saves, and the catch.',
    summary:
      'Paying half your monthly repayment every fortnight means 26 half-payments a year, the same as 13 monthly repayments instead of 12. On a $600,000 loan at 6.00% over 30 years, that pays the loan off about five and a half years sooner and saves around $149,000 in interest.',
    author: 'Crown Money team',
    updated: '2026-11-03',
    blocks: [
      { type: 'h2', text: 'Where the saving comes from' },
      {
        type: 'p',
        text: 'There are 12 months in a year but 26 fortnights. If you pay half your monthly repayment every fortnight, you make 26 half-payments, which equals 13 full monthly repayments. That extra repayment each year goes entirely to principal.',
      },
      {
        type: 'table',
        caption: '$600,000 loan at 6.00% over 30 years',
        head: ['Repayment', 'Amount', 'Loan paid off in', 'Total interest'],
        rows: [
          ['Monthly', '$3,597 a month', '30 years', 'about $695,000'],
          ['Fortnightly (half the monthly amount)', '$1,799 a fortnight', 'about 24 years 7 months', 'about $546,200'],
        ],
      },
      { type: 'callout', text: EXAMPLE_NOTE },
      { type: 'h2', text: 'The catch: how your lender calculates it' },
      {
        type: 'p',
        text: 'Some lenders set the fortnightly repayment by dividing the yearly total by 26. That gives you the same 12 monthly repayments spread differently, and saves very little. To get the benefit, make sure your fortnightly amount is half your monthly repayment, or set up the extra yourself.',
      },
      { type: 'h2', text: 'Match repayments to your pay cycle' },
      {
        type: 'p',
        text: 'If you are paid fortnightly, paying your loan on payday keeps money from sitting in your account and getting spent. Combined with an offset account and a set spending allowance, this is one of the simplest ways to make extra repayments without noticing them.',
      },
      {
        type: 'links',
        title: 'Related tools and guides',
        items: [
          { label: 'Mortgage reduction calculator', href: '/mortgage-reduction-calculator' },
          { label: 'Extra repayments: how much can you save?', href: '/guides/extra-repayments-how-much-can-you-save' },
          { label: 'How to pay off your mortgage faster', href: '/guides/how-to-pay-off-your-mortgage-faster' },
        ],
      },
    ],
    faqs: [
      {
        q: 'Do fortnightly repayments really save money?',
        a: 'Yes, if each fortnightly payment is half your monthly repayment. You make the equivalent of one extra monthly repayment a year, which reduces the balance and the interest charged on it.',
      },
      {
        q: 'Can I switch to fortnightly repayments?',
        a: 'Most lenders let you change repayment frequency online or by request. Check how they calculate the fortnightly amount.',
      },
    ],
  },
];

export const getGuide = (slug: string) => GUIDES.find((g) => g.slug === slug);
export const publishedGuides = () => GUIDES.filter((g) => !g.draft);
