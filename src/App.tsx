import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { HowItWorks } from './pages/HowItWorks';
import { SuccessStories } from './pages/SuccessStories';
import { Testimonials } from './pages/Testimonials';
import { Resources } from './pages/Resources';
import { Podcast } from './pages/Podcast';
import { Blog } from './pages/Blog';
import { Contact } from './pages/Contact';

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
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/podcast" element={<Podcast />} />
          <Route path="/news" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}
