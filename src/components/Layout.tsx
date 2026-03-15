import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail, Facebook, Instagram, Linkedin, Youtube, Twitter, Menu, X, ChevronRight, FileText, Send, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { GoogleGenAI } from "@google/genai";

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
    { name: 'Podcast', path: 'https://open.spotify.com/show/56u7gA4oHUb9h47iyd8uLs', external: true },
    { name: 'Contact', path: '/contact' },
  ];

  const clientLogins = [
    { name: 'Origin', path: 'https://online.originmms.com.au/ib/crown' },
    { name: 'Advantage', path: 'https://mortgage.advantedge.com.au/StarNet/UserAccount/Login' },
    { name: 'Well Nigh', path: 'https://crownmoney.emms.net.au/security/login' },
    { name: 'Wealth Portal', path: 'https://myprosperity.com.au/accounts/signin?cobrand=crownmoney' },
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
            <a href="https://www.facebook.com/CrownMoneyManagement" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors"><Facebook size={16} /></a>
            <a href="https://www.instagram.com/crownmoneyofficial/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors"><Instagram size={16} /></a>
            <a href="https://twitter.com/Crown_Money" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors"><Twitter size={16} /></a>
            <a href="https://www.linkedin.com/company/crown-money" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors"><Linkedin size={16} /></a>
            <a href="https://www.youtube.com/@crownmoneyAU" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors"><Youtube size={16} /></a>
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
            <img 
              src="https://storage.googleapis.com/crown_money/Logo%20%26%20Icon/header-logo.svg" 
              alt="Crown Money" 
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              link.external ? (
                <a
                  key={link.name}
                  href={link.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-gray-600 hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ) : (
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
              )
            ))}
            
            {/* Client Logins Dropdown */}
            <div className="relative group">
              <button className="text-sm font-medium text-gray-600 hover:text-primary transition-colors flex items-center">
                Client Logins
                <ChevronRight size={14} className="ml-1 rotate-90" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-xl rounded-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 border border-gray-100">
                {clientLogins.map((login) => (
                  <a
                    key={login.name}
                    href={login.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-primary transition-colors"
                  >
                    {login.name}
                  </a>
                ))}
              </div>
            </div>

            <a
              href="https://go.oncehub.com/crown-money-welcome"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-opacity-90 transition-all shadow-md"
            >
              Book Meeting
            </a>
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
                  link.external ? (
                    <a
                      key={link.name}
                      href={link.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-medium py-2 text-gray-600"
                    >
                      {link.name}
                    </a>
                  ) : (
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
                  )
                ))}
                
                <div className="py-2 border-t border-gray-50">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Client Logins</p>
                  <div className="grid grid-cols-2 gap-2">
                    {clientLogins.map((login) => (
                      <a
                        key={login.name}
                        href={login.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-600 py-1"
                      >
                        {login.name}
                      </a>
                    ))}
                  </div>
                </div>

                <a
                  href="https://go.oncehub.com/crown-money-welcome"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-white px-6 py-3 rounded-xl text-center font-bold"
                >
                  Book Meeting
                </a>
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
          <Link to="/">
            <img 
              src="https://storage.googleapis.com/crown_money/Logo%20%26%20Icon/Crown%20Money%20Cropped%20Logo.png" 
              alt="Crown Money" 
              className="h-16 w-auto"
            />
          </Link>
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
            <li><a href="https://open.spotify.com/show/56u7gA4oHUb9h47iyd8uLs" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Podcast</a></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6 border-b border-white/10 pb-2">Legal</h4>
          <ul className="space-y-3 text-sm text-gray-300">
            <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6 border-b border-white/10 pb-2">Follow Us</h4>
          <div className="flex space-x-4 mb-8">
            <a href="https://www.facebook.com/CrownMoneyManagement" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-3 rounded-full hover:bg-gold transition-all"><Facebook size={20} /></a>
            <a href="https://www.instagram.com/crownmoneyofficial/" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-3 rounded-full hover:bg-gold transition-all"><Instagram size={20} /></a>
            <a href="https://twitter.com/Crown_Money" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-3 rounded-full hover:bg-gold transition-all"><Twitter size={20} /></a>
            <a href="https://www.linkedin.com/company/crown-money" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-3 rounded-full hover:bg-gold transition-all"><Linkedin size={20} /></a>
            <a href="https://www.youtube.com/@crownmoneyAU" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-3 rounded-full hover:bg-gold transition-all"><Youtube size={20} /></a>
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
      <a 
        href="https://go.oncehub.com/crown-money-welcome"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gold text-white px-8 py-4 rounded-full font-bold shadow-2xl hover:scale-105 transition-transform flex items-center space-x-2"
      >
        <Phone size={20} />
        <span>Schedule Call</span>
      </a>
    </motion.div>
  );
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi! I'm the Crown Money AI assistant. How can I help you today?", isBot: true }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setMessages(prev => [...prev, { text: userMsg, isBot: false }]);
    setInput("");
    setIsLoading(true);

    try {
      const genAI = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });
      const model = "gemini-3-flash-preview";
      
      const chat = genAI.chats.create({
        model: model,
        config: {
          systemInstruction: "You are a professional, helpful, and trustworthy AI assistant for Crown Money, an Australian financial strategy company. Your goal is to help homeowners understand how to pay off their mortgage faster and build wealth. You should encourage users to book a free strategy call. Be concise, professional, and friendly. If asked about specific rates or products, explain that a personalized strategy session is needed to provide accurate information for their situation.",
        },
      });

      const result = await chat.sendMessage({ message: userMsg });
      const responseText = result.text;
      
      setMessages(prev => [...prev, { text: responseText, isBot: true }]);
    } catch (error) {
      console.error("Chatbot error:", error);
      setMessages(prev => [...prev, { text: "I'm sorry, I'm having a bit of trouble connecting right now. Please try again or book a call with our team!", isBot: true }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 left-8 z-[60]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="bg-white rounded-3xl shadow-2xl w-80 md:w-96 overflow-hidden border border-gray-100 mb-4"
          >
            <div className="bg-primary p-4 text-white flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center font-bold text-primary">C</div>
                <span className="font-bold">Crown AI Assistant</span>
              </div>
              <button onClick={() => setIsOpen(false)}><X size={20} /></button>
            </div>
            <div className="h-96 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {messages.map((msg, idx) => (
                <div key={idx} className={cn("flex", msg.isBot ? "justify-start" : "justify-end")}>
                  <div className={cn(
                    "max-w-[80%] p-3 rounded-2xl text-sm",
                    msg.isBot ? "bg-white text-gray-700 shadow-sm" : "bg-primary text-white"
                  )}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white text-gray-700 shadow-sm p-3 rounded-2xl text-sm flex items-center space-x-2">
                    <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                    <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                  </div>
                </div>
              )}
            </div>
            <form onSubmit={handleSend} className="p-4 bg-white border-t border-gray-100 flex space-x-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..." 
                className="flex-grow px-4 py-2 rounded-xl border border-gray-200 outline-none focus:border-primary text-sm"
                disabled={isLoading}
              />
              <button type="submit" className="bg-primary text-white p-2 rounded-xl hover:bg-opacity-90 transition-all disabled:opacity-50" disabled={isLoading}>
                <Send size={20} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-primary text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>
    </div>
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
                <button className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-opacity-90 transition-all">
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
      <Chatbot />
      <ExitPopup />
    </div>
  );
};
