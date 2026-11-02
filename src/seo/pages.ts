// Single source of truth for every page's SEO metadata.
// Used by the <SEO> component (rendered once in Layout), the build-time
// pre-renderer and the sitemap generator. Keep titles <= 60 characters and
// descriptions <= 155 characters (enforced by scripts/prerender.mjs).

export const SITE_URL = 'https://crownmoney.com.au';
export const SITE_NAME = 'Crown Money';
export const DEFAULT_OG_IMAGE =
  'https://storage.googleapis.com/crown_money/Website/Images/happy%20couple.png';

export interface PageMeta {
  title: string;
  description: string;
  /** Excluded from the sitemap and marked noindex when true. */
  noindex?: boolean;
  /** Sitemap hints (indexable pages only). */
  priority?: number;
  changefreq?: 'daily' | 'weekly' | 'monthly' | 'yearly';
  /** Source file used for the sitemap <lastmod> date. */
  source?: string;
}

export const PAGES: Record<string, PageMeta> = {
  '/': {
    title: 'Pay Off Your Mortgage Faster in Australia | Crown Money',
    description:
      "Australian homeowners use Crown Money's money management system to pay off their home loan years sooner. Free mortgage savings check in 2 minutes.",
    priority: 1.0,
    changefreq: 'weekly',
    source: 'src/pages/Home.tsx',
  },
  '/how-it-works': {
    title: 'How Mortgage Reduction Works | 4-Step Process | Crown Money',
    description:
      "See Crown Money's 4-step mortgage reduction process: a discovery call, custom strategy, loan setup and ongoing coaching to pay off your home loan sooner.",
    priority: 0.9,
    changefreq: 'monthly',
    source: 'src/pages/HowItWorks.tsx',
  },
  '/mortgage-reduction-calculator': {
    title: 'Mortgage Reduction Calculator Australia | Crown Money',
    description:
      'Estimate how many years and how much interest you could save on your home loan with our free mortgage reduction calculator. Instant results.',
    priority: 0.9,
    changefreq: 'monthly',
    source: 'src/pages/CalculatorLanding.tsx',
  },
  '/reviews': {
    title: 'Crown Money Reviews | Client Ratings & Testimonials',
    description:
      'Read Google reviews and video testimonials from Australian families who used Crown Money to pay off their home loans sooner.',
    priority: 0.9,
    changefreq: 'weekly',
    source: 'src/pages/Reviews.tsx',
  },
  '/success-stories': {
    title: 'Mortgage Reduction Success Stories | Crown Money',
    description:
      'Real Australian homeowners share how Crown Money helped them cut years off their mortgage and save on interest. Read their stories and results.',
    priority: 0.9,
    changefreq: 'weekly',
    source: 'src/pages/SuccessStories.tsx',
  },
  '/about': {
    title: 'About Crown Money | Mortgage Reduction Specialists',
    description:
      "Meet the Crown Money team. Since 2004 we've helped Australian families pay off their home loans sooner through coaching and smarter money management.",
    priority: 0.8,
    changefreq: 'monthly',
    source: 'src/pages/About.tsx',
  },
  '/contact': {
    title: 'Contact Crown Money | Book a Free Mortgage Strategy Call',
    description:
      'Book a free mortgage strategy call with Crown Money or send an enquiry. Call 1300 882 981 to find out how much sooner you could own your home.',
    priority: 0.8,
    changefreq: 'monthly',
    source: 'src/pages/Contact.tsx',
  },
  '/tools': {
    title: 'Mortgage & Money Calculators Australia | Crown Money',
    description:
      'Free Australian calculators: mortgage reduction, debt recycling, rent vs buy, net worth, budgeting and the true cost of home loan redraws.',
    priority: 0.8,
    changefreq: 'monthly',
    source: 'src/pages/Tools.tsx',
  },
  '/tools/rent-vs-buy': {
    title: 'Rent vs Buy Calculator Australia | Crown Money',
    description:
      'Compare renting vs buying a home in Australia. Factor in stamp duty, maintenance and investment returns to see which builds more wealth over time.',
    priority: 0.7,
    changefreq: 'monthly',
    source: 'src/pages/tools/RentVsBuy.tsx',
  },
  '/tools/net-worth': {
    title: 'Net Worth Calculator Australia | Crown Money',
    description:
      'Add up your assets and debts to calculate your net worth, see how your wealth is allocated and track your progress toward being mortgage-free.',
    priority: 0.7,
    changefreq: 'monthly',
    source: 'src/pages/tools/NetWorth.tsx',
  },
  '/tools/debt-recycling': {
    title: 'Debt Recycling Calculator Australia | Crown Money',
    description:
      'Model how debt recycling could turn non-deductible home loan debt into tax-deductible investment debt over time. General information only.',
    priority: 0.7,
    changefreq: 'monthly',
    source: 'src/pages/tools/DebtRecycling.tsx',
  },
  '/tools/budget': {
    title: 'Budget Planner & Savings Calculator Australia | Crown Money',
    description:
      'Plan your monthly budget, track income and expenses, and find surplus cash flow you could put toward paying off your mortgage sooner.',
    priority: 0.7,
    changefreq: 'monthly',
    source: 'src/pages/tools/Budget.tsx',
  },
  '/tools/withdrawal-impact': {
    title: 'Redraw & Offset Withdrawal Calculator | Crown Money',
    description:
      'See what taking money out of your redraw or offset account really costs: the extra interest, the longer loan term and your new mortgage-free age.',
    priority: 0.7,
    changefreq: 'monthly',
    source: 'src/pages/tools/WithdrawalImpact.tsx',
  },
  '/tools/wishlist-impact': {
    title: 'Wishlist Calculator: Cost of Big Purchases | Crown Money',
    description:
      'Thinking of a car, boat or holiday? See how funding your wishlist from home loan equity changes your interest bill and when you will be mortgage-free.',
    priority: 0.7,
    changefreq: 'monthly',
    source: 'src/pages/tools/WishlistImpact.tsx',
  },
  '/author/scott-parry': {
    title: 'Scott Parry, Founder & CEO | Crown Money',
    description:
      'Scott Parry founded Crown Money in 2004 and created the Home Ownership Programme, helping thousands of Australians pay off their mortgages sooner.',
    priority: 0.5,
    changefreq: 'yearly',
    source: 'src/pages/AuthorProfile.tsx',
  },
  '/author/craig-parry': {
    title: 'Craig Parry, Co-Founder & Director | Crown Money',
    description:
      "Craig Parry is a co-founder and director of Crown Money, with 15+ years in financial services helping homeowners build wealth and get mortgage-free.",
    priority: 0.5,
    changefreq: 'yearly',
    source: 'src/pages/AuthorProfile.tsx',
  },
  '/privacy': {
    title: 'Privacy Policy | Crown Money',
    description:
      'How Crown Money collects, uses and protects your personal and credit information under the Australian Privacy Principles.',
    priority: 0.3,
    changefreq: 'yearly',
    source: 'src/pages/Privacy.tsx',
  },
  '/target-market-determinations': {
    title: 'Target Market Determinations (TMD) | Crown Money',
    description:
      "Read Crown Money's Target Market Determinations to see which of our home loan and SMSF products are designed for which customers.",
    priority: 0.3,
    changefreq: 'yearly',
    source: 'src/pages/TargetMarketDeterminations.tsx',
  },

  // Not for search: paid-ads landing page and post-action utility pages.
  '/pay-off-mortgage': {
    title: 'Pay Off Your Mortgage in Half the Time | Crown Money',
    description:
      'Find out if you could pay off your mortgage in half the time with a free strategy session from Crown Money.',
    noindex: true,
    source: 'src/pages/PayOffMortgage.tsx',
  },
  '/completed': {
    title: 'Statement Shared Successfully | Crown Money',
    description: 'Your bank statement has been shared with Crown Money.',
    noindex: true,
    source: 'src/pages/Completed.tsx',
  },
  '/error': {
    title: 'Bank Statement Connection Issue | Crown Money',
    description: 'We could not connect your bank statement. Please try again.',
    noindex: true,
    source: 'src/pages/ErrorPage.tsx',
  },
};

export const NOT_FOUND_META: PageMeta = {
  title: 'Page Not Found | Crown Money',
  description: "The page you're looking for doesn't exist or has moved.",
  noindex: true,
};

export function normalisePath(pathname: string): string {
  if (pathname.length > 1 && pathname.endsWith('/')) return pathname.slice(0, -1);
  return pathname;
}

export function getPageMeta(pathname: string): { meta: PageMeta; found: boolean } {
  const meta = PAGES[normalisePath(pathname)];
  return meta ? { meta, found: true } : { meta: NOT_FOUND_META, found: false };
}
