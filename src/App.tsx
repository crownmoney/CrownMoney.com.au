import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { HowItWorks } from './pages/HowItWorks';
import { SuccessStories } from './pages/SuccessStories';
import { Contact } from './pages/Contact';
import { Tools } from './pages/Tools';
import { FAQ } from './pages/FAQ';
import { Privacy } from './pages/Privacy';
import TargetMarketDeterminations from './pages/TargetMarketDeterminations';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/success-stories" element={<SuccessStories />} />
          <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/tools" element={<Tools />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/target-market-determinations" element={<TargetMarketDeterminations />} />
        </Routes>
      </Layout>
    </Router>
  );
}
