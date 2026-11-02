import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { HowItWorks } from './pages/HowItWorks';
import { SuccessStories } from './pages/SuccessStories';
import { Contact } from './pages/Contact';
import { Tools } from './pages/Tools';
import { Privacy } from './pages/Privacy';
import TargetMarketDeterminations from './pages/TargetMarketDeterminations';
import { CalculatorLanding } from './pages/CalculatorLanding';
import { AuthorProfile } from './pages/AuthorProfile';
import { RentVsBuy } from './pages/tools/RentVsBuy';
import { NetWorth } from './pages/tools/NetWorth';
import { DebtRecycling } from './pages/tools/DebtRecycling';
import { Budget } from './pages/tools/Budget';
import { WishlistImpact } from './pages/tools/WishlistImpact';
import { WithdrawalImpact } from './pages/tools/WithdrawalImpact';
import { PayOffMortgage } from './pages/PayOffMortgage';
import { Completed } from './pages/Completed';
import { ErrorPage } from './pages/ErrorPage';
import { Reviews } from './pages/Reviews';
import { NotFound } from './pages/NotFound';
import { initUrlTracker } from './utils/urlTracker';

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
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/success-stories" element={<SuccessStories />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pay-off-mortgage" element={<PayOffMortgage />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/tools/rent-vs-buy" element={<RentVsBuy />} />
          <Route path="/tools/net-worth" element={<NetWorth />} />
          <Route path="/tools/debt-recycling" element={<DebtRecycling />} />
          <Route path="/tools/budget" element={<Budget />} />
          <Route path="/tools/wishlist-impact" element={<WishlistImpact />} />
          <Route path="/tools/withdrawal-impact" element={<WithdrawalImpact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/target-market-determinations" element={<TargetMarketDeterminations />} />
          <Route path="/mortgage-reduction-calculator" element={<CalculatorLanding />} />
          <Route path="/author/:slug" element={<AuthorProfile />} />
          <Route path="/completed" element={<Completed />} />
          <Route path="/error" element={<ErrorPage />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </>
  );
}
