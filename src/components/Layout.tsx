import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail, Facebook, Instagram, Linkedin, Youtube, Twitter, Menu, X, ChevronRight, FileText, Send, MessageSquare, TrendingUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { GoogleGenAI } from "@google/genai";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const Header = ({ onChatToggle, onBookToggle }: { onChatToggle: () => void; onBookToggle: () => void }) => {
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

  const navLinks: { name: string; path: string; external?: boolean; onClick?: () => void }[] = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'Success Stories', path: '/success-stories' },
    { name: 'Podcast', path: '/podcast' },
    { name: 'Contact', path: '/contact' },
  ];

  const toolLinks = [
    { name: 'All Calculators', path: '/tools' },
    { name: 'Mortgage Reduction', path: '/mortgage-reduction-calculator' },
    { name: 'Rent vs Buy', path: '/tools/rent-vs-buy' },
    { name: 'Car Lease vs Buy', path: '/tools/car-lease-vs-buy' },
    { name: 'Net Worth', path: '/tools/net-worth' },
    { name: 'Debt Recycling', path: '/tools/debt-recycling' },
    { name: 'Withdrawal Impact', path: '/tools/withdrawal-impact' },
    { name: 'Wishlist Impact', path: '/tools/wishlist-impact' },
  ];

  const clientLogins = [
    { name: 'Origin', path: 'https://online.originmms.com.au/ib/crown' },
    { name: 'Advantedge', path: 'https://mortgage.advantedge.com.au/StarNet/UserAccount/Login' },
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
        "w-full z-50 transition-all duration-300 fixed top-0 md:top-auto",
        isScrolled ? "bg-white shadow-md py-3" : "bg-white py-5"
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
            <Link to="/" className={cn("text-sm font-medium hover:text-primary transition-colors", location.pathname === "/" ? "text-primary" : "text-gray-600")}>Home</Link>
            <Link to="/about" className={cn("text-sm font-medium hover:text-primary transition-colors", location.pathname === "/about" ? "text-primary" : "text-gray-600")}>About Us</Link>
            <Link to="/how-it-works" className={cn("text-sm font-medium hover:text-primary transition-colors", location.pathname === "/how-it-works" ? "text-primary" : "text-gray-600")}>How It Works</Link>
            
            {/* Tools Dropdown */}
            <div className="relative group">
              <button className={cn(
                "text-sm font-medium hover:text-primary transition-colors flex items-center",
                location.pathname.startsWith('/tools') || location.pathname === '/mortgage-reduction-calculator' ? "text-primary" : "text-gray-600"
              )}>
                Tools
                <ChevronRight size={14} className="ml-1 rotate-90" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-xl rounded-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 border border-gray-100">
                {toolLinks.map((tool) => (
                  <Link
                    key={tool.name}
                    to={tool.path}
                    className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-primary transition-colors"
                  >
                    {tool.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link to="/success-stories" className={cn("text-sm font-medium hover:text-primary transition-colors", location.pathname === "/success-stories" ? "text-primary" : "text-gray-600")}>Success Stories</Link>
            <a 
              href="https://open.spotify.com/show/56u7gA4oHUb9h47iyd8uLs" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-sm font-medium text-gray-600 hover:text-primary transition-colors"
            >
              Podcast
            </a>
            <Link to="/contact" className={cn("text-sm font-medium hover:text-primary transition-colors", location.pathname === "/contact" ? "text-primary" : "text-gray-600")}>Contact</Link>
            
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

            <button
              onClick={onBookToggle}
              className="bg-gold text-primary px-6 py-2.5 rounded-full text-sm font-bold hover:bg-opacity-90 transition-all shadow-md whitespace-nowrap"
            >
              Book Free Session
            </button>
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
                <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium py-2 text-gray-600">Home</Link>
                <Link to="/about" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium py-2 text-gray-600">About Us</Link>
                <Link to="/how-it-works" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium py-2 text-gray-600">How It Works</Link>
                
                <div className="py-2">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Calculators & Tools</p>
                  <div className="grid grid-cols-1 gap-2">
                    {toolLinks.map((tool) => (
                      <Link
                        key={tool.name}
                        to={tool.path}
                        onClick={() => setIsMenuOpen(false)}
                        className="text-sm text-gray-600 py-1"
                      >
                        {tool.name}
                      </Link>
                    ))}
                  </div>
                </div>

                <Link to="/success-stories" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium py-2 text-gray-600">Success Stories</Link>
                <a 
                  href="https://open.spotify.com/show/56u7gA4oHUb9h47iyd8uLs" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg font-medium py-2 text-gray-600"
                >
                  Podcast
                </a>
                <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium py-2 text-gray-600">Contact</Link>
                
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

                <button
                  onClick={() => {
                    onBookToggle();
                    setIsMenuOpen(false);
                  }}
                  className="bg-gold text-primary px-6 py-4 rounded-xl text-center font-bold shadow-lg"
                >
                  Book Your Free Strategy Session
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

const Footer = ({ onBookToggle, onRatesToggle }: { onBookToggle: () => void; onRatesToggle: () => void }) => {
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
            Crown Money Management is Australia’s leading specialist in debt reduction and money management. Helping homeowners pay off mortgages faster and build wealth.
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
          <button
            onClick={onBookToggle}
            className="bg-gold text-primary px-6 py-2 rounded-full text-xs font-bold hover:bg-opacity-90 transition-all shadow-lg"
          >
            Book Your Free Strategy Session
          </button>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6 border-b border-white/10 pb-2">Quick Links</h4>
          <ul className="space-y-3 text-sm text-gray-300">
            <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link to="/how-it-works" className="hover:text-white transition-colors">How It Works</Link></li>
            <li><Link to="/tools" className="hover:text-white transition-colors">Calculators & Tools</Link></li>
            <li><Link to="/success-stories" className="hover:text-white transition-colors">Success Stories</Link></li>
            <li>
              <a 
                href="https://open.spotify.com/show/56u7gA4oHUb9h47iyd8uLs" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-white transition-colors"
              >
                Podcast
              </a>
            </li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6 border-b border-white/10 pb-2">Legal</h4>
          <ul className="space-y-3 text-sm text-gray-300">
            <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            <li>
              <button onClick={onRatesToggle} className="hover:text-white transition-colors text-left">
                Maximum Rates and Fees
              </button>
            </li>
            <li><Link to="/target-market-determinations" className="hover:text-white transition-colors">Target Market Determinations</Link></li>
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
          <p className="text-xs text-gray-400 mb-4">
            Crown Lending Pty Ltd ACL Number – 388 279 | Crown Lending ABN – 23 389 248 852 | FBAA Member
          </p>
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} Crown Money Management. All rights reserved.
          </p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-white/10">
        <p className="text-[10px] text-gray-400 leading-relaxed uppercase">
          THIS INFORMATION IS GENERAL IN NATURE AND DOES NOT TAKE INTO ACCOUNT YOUR PERSONAL FINANCIAL SITUATION. IT IS FOR EDUCATIONAL PURPOSES ONLY, AND DOES NOT CONSTITUTE FORMAL FINANCIAL OR PERSONAL ADVICE. YOU SHOULD CONSIDER THE APPROPRIATENESS OF THE ADVICE TO YOUR OWN SITUATION AND NEEDS BEFORE TAKING ANY ACTION. IT SHOULD NOT BE RELIED UPON FOR THE PURPOSES OF ENTERING INTO ANY LEGAL OR FINANCIAL COMMITMENTS.
        </p>
      </div>
    </footer>
  );
};

const FloatingCTA = ({ onBookToggle }: { onBookToggle: () => void }) => {
  return (
    <>
      {/* Desktop Floating CTA */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed bottom-8 right-8 z-50 hidden md:block"
      >
        <button 
          onClick={onBookToggle}
          className="bg-gold text-primary px-8 py-4 rounded-full font-bold shadow-2xl hover:scale-105 transition-transform flex items-center space-x-2"
        >
          <Phone size={20} />
          <span>Book Your Free Strategy Session</span>
        </button>
      </motion.div>

      {/* Mobile Sticky Bottom CTA Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-[60] md:hidden bg-white border-t border-gray-100 p-3 shadow-[0_-4px_10px_rgba(0,0,0,0.05)]">
        <button 
          onClick={onBookToggle}
          className="w-full bg-gold text-primary py-4 rounded-xl font-bold shadow-lg flex items-center justify-center space-x-2"
        >
          <TrendingUp size={20} />
          <span>Book Your Free Strategy Session</span>
        </button>
      </div>
    </>
  );
};

const Chatbot = ({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: (val: boolean) => void }) => {
  const [messages, setMessages] = useState<{ text: string, isBot: boolean }[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Load history on mount
  useEffect(() => {
    const saved = localStorage.getItem('crown_chat_history');
    if (saved && saved !== "undefined") {
      try {
        setMessages(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse chat history:", e);
        setMessages([{ text: "Hi! I'm the Crown Money AI assistant. How can I help you today?", isBot: true }]);
      }
    } else {
      setMessages([{ text: "Hi! I'm the Crown Money AI assistant. How can I help you today?", isBot: true }]);
    }
  }, []);

  // Save history on change
  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem('crown_chat_history', JSON.stringify(messages));
    }
  }, [messages]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    const newMessages = [...messages, { text: userMsg, isBot: false }];
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);

    try {
      const genAI = new GoogleGenAI({ 
        apiKey: process.env.GEMINI_API_KEY || "",
      });
      const model = "gemini-3-flash-preview";
      
      const systemPrompt = `You are a professional, helpful, and trustworthy AI assistant for Crown Money, an Australian financial strategy company. 
          Crown Money specializes in debt reduction and wealth building. 
          
          Key Services & Concepts:
          - Mortgage reduction strategies that help homeowners pay off their 30-year mortgage in 10-15 years.
          - Financial coaching and tracking through a proprietary dashboard.
          - Optimizing mortgage structures to work for the homeowner, not the bank.
          - Wealth building and investment property strategy.
          - The Passive Income Plan (PIP): Uses debt recycling to turn home equity into passive income, converting bad debt into tax-deductible good debt. Contact fsfl@crown.money for more.
          
          General Information & FAQ:
          - Reviews: 
            - Google: g.page/CrownMoney (Click Reviews > Leave a Review)
            - Facebook: https://www.facebook.com/CrownMoneyManagement/reviews/
            - Trustpilot: https://www.trustpilot.com/review/crownmoneymanagement.com.au/location/melbourne
          - Depositing Cash: Deposit into everyday account, then transfer to home loan BSB/Account OR email clientcare@crown.money to arrange direct debit.
          - Phone Banking (Origin): App available for iOS (App Store) and Android (Play Store). Search for "Origin Mortgages Mobile Access". Note: Redraws cannot be done via app; email redraws@crown.money.
          - Lost Superannuation: Log in to myGov, link to ATO, access "Super" section to search.
          
          Support & Operations:
          - 90 Day Review: Speak to your Financial Strategist or email coaches@crown.money.
          - Loan Discharge: Email discharge@crown.money. Process takes 3-4 weeks. Important: Redirect income and stop direct debits before discharge.
          - Change Redraw Account: Email clientcare@crown.money for a DDR form.
          - Employer Payments: Provide BSB and Account details from your settlement email.
          - Redraw Requests: Use the new digital [Redraw Request Form](https://share-ap1.hsforms.com/1mytJWX7yTRm1UX14zx7qzw35dvz?utm_source=hs_email&utm_medium=email&_hsenc=p2ANqtz-9uYGRQK4ihl_3eu3gN8sBoob4VWgvvrqaVyssvXHDV1lvYsSO4Yd4TPAXXfq3X8LFycy0Z&__hstc=163423779.5aafa6ba179ddc334514772a1ed6dd7e.1775083658539.1775083658539.1775083658539.1&__hssc=163423779.1.1775083658540&__hsfp=d16f20985dd1fa1d4eb1884d25292ed8). Redraws are no longer via email. Watch this [step-by-step video](https://hello.crownmoneymanagement.com.au/share/hubspotvideo/312935213533?utm_source=hs_email&utm_medium=email&_hsenc=p2ANqtz-9uYGRQK4ihl_3eu3gN8sBoob4VWgvvrqaVyssvXHDV1lvYsSO4Yd4TPAXXfq3X8LFycy0Z&hsLang=en&__hstc=163423779.5aafa6ba179ddc334514772a1ed6dd7e.1775083658539.1775083658539.1775083658539.1&__hssc=163423779.1.1775083658540&__hsfp=d16f20985dd1fa1d4eb1884d25292ed8&_gl=1*1a00a9b*_gcl_au*MTExMjI1MDczNi4xNzc1MDgzNjU4) to see how it works.
          - Adding Redraw Form to Home Screen:
            - iPhone: Open form > Share icon > Add to Home Screen.
            - Android: Open form > Three dots > Add to Home Screen / Install App.
          - Redraw Timing: Processed same day if before cutoff (Advantedge: 10:45am, Origin/Well Nigh: 12:45pm AEST). Funds usually available after 6pm.
          - Account Login: 
            - Origin: Call 1300 767 023 for access. Login: https://online.originmms.com.au/ib/crown
            - Well Nigh: Issued at settlement. Login: https://crownmoney.emms.net.au/security/login
          - Third-Party Transfers: Not allowed for Advantedge/Well Nigh. Origin allows via Redraw Request Form + phone confirmation.
          - BSB Numbers:
            - Advantedge: 083-545 (NAB)
            - Well Nigh: 037-842 (Westpac)
            - Origin: 636-380 (Indue/Columbus Capital)
          
          Your goal is to help homeowners understand these concepts and actively prompt them to book a free strategy call at https://go.oncehub.com/crown-money-welcome.
          
          Guidelines:
          - Be concise, professional, and friendly.
          - Use standard Markdown for links to make them clickable.
          - Avoid using markdown symbols like * or # for headers or lists unless necessary for clarity.
          - If asked about specific rates or products, explain that a personalized strategy session is needed to provide accurate information for their situation.
          - Always mention the free strategy call as the next logical step.`;

      const chat = genAI.chats.create({
        model: model,
        config: {
          systemInstruction: systemPrompt,
        },
      });

      // Include history context (last 10 messages)
      const history = messages.slice(-10).map(m => ({
        role: m.isBot ? "model" : "user",
        parts: [{ text: m.text }]
      }));

      const result = await genAI.models.generateContent({
        model: model,
        contents: [...history, { role: "user", parts: [{ text: userMsg }] }],
        config: {
          systemInstruction: systemPrompt
        }
      });

      const responseText = result.text || "I'm sorry, I couldn't generate a response. Please try again or book a call with our team!";
      
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
              <div className="bg-amber-50 border border-amber-100 p-3 rounded-xl text-[10px] text-amber-800 leading-tight mb-2">
                DISCLAIMER: This AI assistant provides general information only and is not a substitute for professional financial advice. For personalized guidance, please book a call with our experts.
              </div>
              {messages.map((msg, idx) => (
                <div key={idx} className={cn("flex", msg.isBot ? "justify-start" : "justify-end")}>
                  <div className={cn(
                    "max-w-[85%] p-3 rounded-2xl text-sm break-words [overflow-wrap:anywhere]",
                    msg.isBot ? "bg-white text-gray-700 shadow-sm" : "bg-primary text-white"
                  )}>
                    {msg.isBot ? (
                      <div className="markdown-body">
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>
                          {msg.text}
                        </ReactMarkdown>
                      </div>
                    ) : (
                      msg.text
                    )}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white text-gray-700 shadow-sm p-3 rounded-2xl text-sm flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary/30 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-primary/30 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                    <div className="w-2 h-2 bg-primary/30 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                    <span className="text-[10px] text-gray-400 ml-2">Thinking...</span>
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
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !firstName) return;
    
    try {
      await fetch('https://hooks.zapier.com/hooks/catch/24598887/up2fobt/', {
        method: 'POST',
        body: JSON.stringify({ firstName, email, source: 'exit_popup' }),
      });
      
      setIsSubmitted(true);
      setTimeout(() => {
        window.open('https://storage.googleapis.com/crown_money/Website/Resources/20%20Minutes%20Financial%20Health%20Check.pdf', '_blank');
        setIsVisible(false);
      }, 2000);
    } catch (error) {
      console.error('Error:', error);
    }
  };

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
                Get access to our <span className="font-bold text-primary">20 Minutes Financial Health Check</span> and see how you can save $100k+ in interest.
              </p>
              {isSubmitted ? (
                <div className="text-green-600 font-bold py-4">
                  Success! Opening your health check...
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input 
                    type="text" 
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="First Name" 
                    className="w-full px-6 py-4 rounded-xl border border-gray-200 outline-none focus:border-primary"
                    required
                  />
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email" 
                    className="w-full px-6 py-4 rounded-xl border border-gray-200 outline-none focus:border-primary"
                    required
                  />
                  <button className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-opacity-90 transition-all">
                    Get My Health Check
                  </button>
                </form>
              )}
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

const BookMeetingModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-primary/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="bg-white rounded-3xl p-8 max-w-md w-full relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-primary transition-colors"
            >
              <X size={24} />
            </button>
            <div className="text-center space-y-6">
              <h2 className="text-2xl font-display font-bold text-primary">Book Your Free Strategy Session</h2>
              <p className="text-gray-600">Choose the option that best fits your needs.</p>
              <div className="grid grid-cols-1 gap-4">
                <a
                  href="https://go.oncehub.com/crown-money-welcome"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gold text-primary py-4 rounded-xl font-bold hover:bg-opacity-90 transition-all flex items-center justify-center space-x-2 shadow-lg"
                >
                  <TrendingUp size={20} />
                  <span>Book Strategy Session</span>
                </a>
                <a
                  href="https://go.oncehub.com/crown-money-welcome"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-primary border-2 border-primary/10 py-4 rounded-xl font-bold hover:bg-gray-50 transition-all flex items-center justify-center space-x-2"
                >
                  <Phone size={20} />
                  <span>Book Consultation</span>
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const RatesAndFeesModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-primary/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="bg-white rounded-3xl p-8 max-w-md w-full relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-primary transition-colors"
            >
              <X size={24} />
            </button>
            <div className="space-y-6">
              <div className="text-center">
                <h2 className="text-2xl font-display font-bold text-primary mb-2">Maximum Rates and Fees</h2>
                <p className="text-sm text-gray-500">Standard schedule of fees</p>
              </div>
              
              <div className="space-y-4">
                <div className="border-b border-gray-100 pb-4">
                  <h3 className="font-bold text-primary mb-3">Upfront Fees</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Application Fee</span>
                      <span className="font-bold text-primary">$660</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Legal Fee</span>
                      <span className="font-bold text-primary">$500</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Valuation Fee</span>
                      <span className="font-bold text-primary">$302.50</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Settlement Fee</span>
                      <span className="font-bold text-primary">$150</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-bold text-primary mb-3">Ongoing Fees</h3>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Annual Fee</span>
                    <span className="font-bold text-primary">$395/yr</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-xl text-[10px] text-gray-400 leading-tight">
                Fees are subject to change and may vary based on specific product selection and individual circumstances.
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

import { Helmet } from 'react-helmet-async';

export const Layout = ({ children }: LayoutProps) => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);
  const [isRatesModalOpen, setIsRatesModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <link rel="icon" type="image/png" href="https://storage.googleapis.com/crown_money/Logo%20%26%20Icon/favicon.png" />
      </Helmet>
      <Header 
        onChatToggle={() => setIsChatOpen(!isChatOpen)} 
        onBookToggle={() => setIsBookModalOpen(true)}
      />
      <main className="flex-grow pt-16 md:pt-20">
        {children}
      </main>
      <Footer 
        onBookToggle={() => setIsBookModalOpen(true)} 
        onRatesToggle={() => setIsRatesModalOpen(true)}
      />
      <FloatingCTA onBookToggle={() => setIsBookModalOpen(true)} />
      <Chatbot isOpen={isChatOpen} setIsOpen={setIsChatOpen} />
      <ExitPopup />
      <BookMeetingModal isOpen={isBookModalOpen} onClose={() => setIsBookModalOpen(false)} />
      <RatesAndFeesModal isOpen={isRatesModalOpen} onClose={() => setIsRatesModalOpen(false)} />
    </div>
  );
};
