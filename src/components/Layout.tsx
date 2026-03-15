import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail, Facebook, Instagram, Linkedin, Youtube, Menu, X, ChevronRight, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'Success Stories', path: '/success-stories' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Resources', path: '/resources' },
    { name: 'Podcast', path: '/podcast' },
    { name: 'News', path: '/news' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-primary text-white py-2 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <a href="tel:1300882981" className="flex items-center hover:text-accent transition-colors">
              <Phone size={14} className="mr-2" />
              1300 882 981
            </a>
            <a href="mailto:admin@crown.money" className="flex items-center hover:text-accent transition-colors">
              <Mail size={14} className="mr-2" />
              admin@crown.money
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="hover:text-accent transition-colors"><Facebook size={16} /></a>
            <a href="#" className="hover:text-accent transition-colors"><Instagram size={16} /></a>
            <a href="#" className="hover:text-accent transition-colors"><Linkedin size={16} /></a>
            <a href="#" className="hover:text-accent transition-colors"><Youtube size={16} /></a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className={cn(
        "w-full z-50 transition-all duration-300",
        isScrolled ? "fixed top-0 bg-white shadow-md py-3" : "relative bg-white py-5"
      )}>
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-display font-bold text-primary">CROWN MONEY</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "text-sm font-medium hover:text-primary transition-colors",
                  location.pathname === link.path ? "text-primary border-b-2 border-primary" : "text-gray-600"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-primary text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-opacity-90 transition-all shadow-md"
            >
              Online Enquiry
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="lg:hidden text-primary" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
            >
              <div className="flex flex-col p-4 space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={cn(
                      "text-lg font-medium py-2",
                      location.pathname === link.path ? "text-primary" : "text-gray-600"
                    )}
                  >
                    {link.name}
                  </Link>
                ))}
                <Link
                  to="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="bg-primary text-white px-6 py-3 rounded-xl text-center font-bold"
                >
                  Online Enquiry
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="space-y-6">
          <Link to="/" className="text-2xl font-display font-bold">CROWN MONEY</Link>
          <p className="text-gray-300 text-sm leading-relaxed">
            Australia’s leading specialists in debt reduction and money management. Helping homeowners pay off mortgages faster and build wealth.
          </p>
          <div className="space-y-3">
            <a href="tel:1300882981" className="flex items-center text-sm hover:text-accent transition-colors">
              <Phone size={16} className="mr-3 text-gold" />
              1300 882 981
            </a>
            <a href="mailto:admin@crown.money" className="flex items-center text-sm hover:text-accent transition-colors">
              <Mail size={16} className="mr-3 text-gold" />
              admin@crown.money
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6 border-b border-white/10 pb-2">Quick Links</h4>
          <ul className="space-y-3 text-sm text-gray-300">
            <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link to="/how-it-works" className="hover:text-white transition-colors">How It Works</Link></li>
            <li><Link to="/success-stories" className="hover:text-white transition-colors">Success Stories</Link></li>
            <li><Link to="/resources" className="hover:text-white transition-colors">Resources</Link></li>
            <li><Link to="/podcast" className="hover:text-white transition-colors">Podcast</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6 border-b border-white/10 pb-2">Legal</h4>
          <ul className="space-y-3 text-sm text-gray-300">
            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Disclaimers</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Maximum Rates</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Target Market Determinations</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Scam Alert</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6 border-b border-white/10 pb-2">Follow Us</h4>
          <div className="flex space-x-4 mb-8">
            <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-gold transition-all"><Facebook size={20} /></a>
            <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-gold transition-all"><Instagram size={20} /></a>
            <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-gold transition-all"><Linkedin size={20} /></a>
            <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-gold transition-all"><Youtube size={20} /></a>
          </div>
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} Crown Money. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

const FloatingCTA = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-8 right-8 z-50 hidden md:block"
    >
      <Link 
        to="/contact"
        className="bg-gold text-white px-8 py-4 rounded-full font-bold shadow-2xl hover:scale-105 transition-transform flex items-center space-x-2"
      >
        <Phone size={20} />
        <span>Schedule Call</span>
      </Link>
    </motion.div>
  );
};

interface LayoutProps {
  children: React.ReactNode;
}

const ExitPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasShown]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-primary/80 backdrop-blur-sm"
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-3xl p-8 md:p-12 max-w-xl w-full relative shadow-2xl"
          >
            <button 
              onClick={() => setIsVisible(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-primary transition-colors"
            >
              <X size={24} />
            </button>
            <div className="text-center">
              <div className="bg-accent w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <FileText size={40} className="text-primary" />
              </div>
              <h2 className="text-3xl font-display font-bold text-primary mb-4">Wait! Don't Miss Out</h2>
              <p className="text-gray-600 mb-8">
                Download our <span className="font-bold text-primary">Free Mortgage Freedom Plan</span> and see how you can save $100k+ in interest.
              </p>
              <form className="space-y-4">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full px-6 py-4 rounded-xl border border-gray-200 outline-none focus:border-primary"
                />
                <button className="w-full bg-gold text-white py-4 rounded-xl font-bold text-lg hover:bg-gold-hover transition-all">
                  Get My Free Plan
                </button>
              </form>
              <p className="mt-6 text-xs text-gray-400">
                We respect your privacy. No spam, ever.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <FloatingCTA />
      <ExitPopup />
    </div>
  );
};
