import React, { useEffect } from 'react';
import { Routes, Route, useLocation, matchPath } from 'react-router-dom';
import { Layout } from './components/Layout';
import { NotFound } from './pages/NotFound';
import { initUrlTracker } from './utils/urlTracker';
import { lazyPage } from './utils/lazyPage';

// Each page is its own JS chunk; see utils/lazyPage.tsx and main.tsx.
const Home = lazyPage(() => import('./pages/Home').then((m) => ({ default: m.Home })));
const About = lazyPage(() => import('./pages/About').then((m) => ({ default: m.About })));
const HowItWorks = lazyPage(() => import('./pages/HowItWorks').then((m) => ({ default: m.HowItWorks })));
const SuccessStories = lazyPage(() => import('./pages/SuccessStories').then((m) => ({ default: m.SuccessStories })));
const Contact = lazyPage(() => import('./pages/Contact').then((m) => ({ default: m.Contact })));
const Tools = lazyPage(() => import('./pages/Tools').then((m) => ({ default: m.Tools })));
const Privacy = lazyPage(() => import('./pages/Privacy').then((m) => ({ default: m.Privacy })));
const TargetMarketDeterminations = lazyPage(() => import('./pages/TargetMarketDeterminations').then((m) => ({ default: m.default })));
const CalculatorLanding = lazyPage(() => import('./pages/CalculatorLanding').then((m) => ({ default: m.CalculatorLanding })));
const AuthorProfile = lazyPage(() => import('./pages/AuthorProfile').then((m) => ({ default: m.AuthorProfile })));
const RentVsBuy = lazyPage(() => import('./pages/tools/RentVsBuy').then((m) => ({ default: m.RentVsBuy })));
const NetWorth = lazyPage(() => import('./pages/tools/NetWorth').then((m) => ({ default: m.NetWorth })));
const DebtRecycling = lazyPage(() => import('./pages/tools/DebtRecycling').then((m) => ({ default: m.DebtRecycling })));
const Budget = lazyPage(() => import('./pages/tools/Budget').then((m) => ({ default: m.Budget })));
const WishlistImpact = lazyPage(() => import('./pages/tools/WishlistImpact').then((m) => ({ default: m.WishlistImpact })));
const WithdrawalImpact = lazyPage(() => import('./pages/tools/WithdrawalImpact').then((m) => ({ default: m.WithdrawalImpact })));
const PayOffMortgage = lazyPage(() => import('./pages/PayOffMortgage').then((m) => ({ default: m.PayOffMortgage })));
const Completed = lazyPage(() => import('./pages/Completed').then((m) => ({ default: m.Completed })));
const ErrorPage = lazyPage(() => import('./pages/ErrorPage').then((m) => ({ default: m.ErrorPage })));
const Reviews = lazyPage(() => import('./pages/Reviews').then((m) => ({ default: m.Reviews })));

const ROUTES = [
  { path: '/', Page: Home },
  { path: '/about', Page: About },
  { path: '/how-it-works', Page: HowItWorks },
  { path: '/success-stories', Page: SuccessStories },
  { path: '/contact', Page: Contact },
  { path: '/pay-off-mortgage', Page: PayOffMortgage },
  { path: '/tools', Page: Tools },
  { path: '/tools/rent-vs-buy', Page: RentVsBuy },
  { path: '/tools/net-worth', Page: NetWorth },
  { path: '/tools/debt-recycling', Page: DebtRecycling },
  { path: '/tools/budget', Page: Budget },
  { path: '/tools/wishlist-impact', Page: WishlistImpact },
  { path: '/tools/withdrawal-impact', Page: WithdrawalImpact },
  { path: '/privacy', Page: Privacy },
  { path: '/target-market-determinations', Page: TargetMarketDeterminations },
  { path: '/mortgage-reduction-calculator', Page: CalculatorLanding },
  { path: '/author/:slug', Page: AuthorProfile },
  { path: '/completed', Page: Completed },
  { path: '/error', Page: ErrorPage },
  { path: '/reviews', Page: Reviews },
];

/** Load the JS chunk for the page at `pathname` (no-op for unknown routes). */
export function preloadRoute(pathname: string) {
  const route = ROUTES.find((r) => matchPath(r.path, pathname));
  return route ? route.Page.preload() : Promise.resolve();
}

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  useEffect(() => {
    initUrlTracker();
  }, []);

  return (
    <>
      <ScrollToTop />
      <Layout>
        <Routes>
          {ROUTES.map(({ path, Page }) => (
            <Route key={path} path={path} element={<Page />} />
          ))}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </>
  );
}
