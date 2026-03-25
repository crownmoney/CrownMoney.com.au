import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, CheckCircle, ArrowRight, Star, Quote, TrendingUp, Calendar, ShieldCheck, Users, ChevronDown, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import { Newsletter } from '../components/Newsletter';
import { MortgageCalculator } from '../components/MortgageCalculator';
import { TrustSignals } from '../components/TrustSignals';
import { Awards } from '../components/Awards';
import { Testimonials } from '../components/Testimonials';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const faqs = [
  {
    question: "What is Crown Money?",
    answer: "Crown Money is Australia's leading specialist in debt reduction and money management. We help homeowners pay off their mortgages years faster through strategic structure and active financial coaching."
  },
  {
    question: "How much does it cost?",
    answer: "Our initial Discovery Call is 100% free. If you choose to implement a strategy with us, there is a fee for the strategy design and ongoing management, which is typically offset by the massive interest savings we achieve for you."
  },
  {
    question: "I don't have a mortgage yet but I'm looking to buy. Can you help me?",
    answer: "Absolutely! In fact, starting with the right structure before you buy is one of the best things you can do. We can help with pre-approvals and ensure your loan is set up for rapid payoff from day one."
  },
  {
    question: "I have an offset account, so I'm already saving interest, how is this different?",
    answer: "Offset accounts are a great tool, but they are passive. Our strategy combines the right banking structure with active monthly coaching and proprietary tracking software to ensure every dollar is working as hard as possible."
  },
  {
    question: "I'm disciplined with my money and stick to a budget. Why would I need this?",
    answer: "Even the most disciplined savers often have their loans structured in a way that favors the bank. We provide the expert strategy to optimize that structure and the accountability to ensure you're maximizing your wealth creation."
  },
  {
    question: "Do you control all my money and pay my bills for me?",
    answer: "No. You maintain full control of your money. We provide the 'GPS' and the coaching, but you're always in the driver's seat."
  },
  {
    question: "Do you hold my money or is it still sitting with a bank?",
    answer: "Your money always sits with a regulated Australian lender or bank. Crown Money provides the strategy and management layer on top of your banking."
  },
  {
    question: "Why can't I achieve the same thing with my current bank?",
    answer: "Banks are designed to keep you in debt for 30 years—that's how they make their profit. Our interests are aligned with yours: getting you out of debt as fast as humanly possible."
  },
  {
    question: "I hate paperwork, how long does it take to get set up?",
    answer: "We handle the heavy lifting. Once we have your information, the setup process typically takes a few weeks, and we guide you through every step."
  },
  {
    question: "How do we access our money if there's an emergency?",
    answer: "Your funds remain accessible. Our strategies are designed to be flexible, ensuring you have liquidity for life's unexpected events."
  },
  {
    question: "What happens if I want out?",
    answer: "There are no lock-in contracts for our management services. If your circumstances change and you want to stop, you can do so at any time."
  },
  {
    question: "What's the catch. Why isn't everyone doing this?",
    answer: "There's no catch, but it does require a different way of thinking about banking. Most people just follow the standard 30-year path because that's what's advertised. We offer a specialized alternative for those who want to be mortgage-free faster."
  },
  {
    question: "What happens if the lender goes broke or closes down?",
    answer: "Your mortgage is an asset to the lender. If they were to close, your loan would simply be sold to another institution under the same terms. Your deposits are also protected by the Australian Government's Financial Claims Scheme (up to $250k per person)."
  },
  {
    question: "Why do you need so much information during your application process?",
    answer: "To build a strategy that actually works, we need a complete picture of your financial DNA. This allows us to find every possible efficiency and interest-saving opportunity."
  },
  {
    question: "What happens if I get given cash? How do I deposit it?",
    answer: "You can deposit cash via any Australia Post outlet using Bank@Post, or at a physical branch of the underlying lender if they have one."
  },
  {
    question: "I've never heard of this bank. Do we have access?",
    answer: "We work with a range of lenders, from major banks to specialized wholesale lenders. You will have full online and mobile access to your accounts just like any other bank."
  },
  {
    question: "Why haven't we heard of Crown?",
    answer: "We've spent the last 20 years focusing on delivering results for our clients rather than spending millions on mass-market TV advertising. Most of our clients come to us via word-of-mouth."
  },
  {
    question: "How do you get paid?",
    answer: "We are transparent about our fees. We receive a management fee from our clients for our strategy and coaching, and in some cases, we may receive a commission from the lender."
  },
  {
    question: "When will we be able to invest?",
    answer: "Our first priority is usually building your equity and cashflow. Once your 'financial foundation' is solid, we can help you leverage that equity to start building an investment portfolio."
  },
  {
    question: "What happens if one of us take a year off work, how will that affect our loan?",
    answer: "This is where our coaching really shines. We simply adjust your strategy to accommodate the change in income, ensuring your mortgage remains manageable during that period."
  },
  {
    question: "Why is interest rate higher?",
    answer: "Sometimes the specific loan features required for our rapid-payoff strategy come with a slightly different rate. However, the focus should be on the *total interest paid*. Our clients typically save hundreds of thousands in interest, which far outweighs a minor difference in the headline rate."
  }
];

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
  key?: number | string;
}

const FAQItem = ({ question, answer, isOpen, onClick }: FAQItemProps) => {
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left hover:text-gold transition-colors group"
      >
        <span className="text-lg font-bold text-primary group-hover:text-gold">{question}</span>
        <ChevronDown 
          className={`text-gold transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} 
          size={24} 
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-gray-600 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Hero = () => {
  return (
    <section className="relative bg-crown-lavender py-20 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full text-primary text-sm font-bold mb-6 shadow-sm">
            <ShieldCheck size={16} className="text-gold" />
            <span>Australia's Leading Specialists</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary leading-tight mb-6">
            Australian Homeowners: Pay Off Your Mortgage in <span className="text-gold">12–15 Years</span>, Not 30.
          </h1>
          <p className="text-lg text-gray-600 mb-10 max-w-lg">
            Crown Money Management is Australia’s leading specialist in mortgage reduction. We act as financial personal trainers to help you become debt-free in up to half the time.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 items-center mb-10">
            <Link 
              to="/contact"
              className="bg-gold text-primary px-8 py-4 rounded-full font-bold text-center hover:bg-opacity-90 transition-all shadow-lg flex items-center justify-center"
            >
              Book Your Free Strategy Session
            </Link>
            <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gold/20 shadow-sm">
              <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center text-primary">
                <ShieldCheck size={18} />
              </div>
              <span className="text-sm font-bold text-primary whitespace-nowrap">12-Month Guarantee</span>
            </div>
            <a 
              href="https://www.youtube.com/watch?v=wK5j7XV17UQ"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary border-2 border-primary/10 px-8 py-4 rounded-full font-bold text-center hover:bg-gray-50 transition-all flex items-center justify-center space-x-2"
            >
              <Play size={18} fill="currentColor" />
              <span>Watch How It Works</span>
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-6">
            <div className="flex items-center space-x-2">
              <CheckCircle size={20} className="text-gold" />
              <span className="text-sm font-medium text-gray-700">20+ years experience</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle size={20} className="text-gold" />
              <span className="text-sm font-medium text-gray-700">$50M+ debt reduction</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle size={20} className="text-gold" />
              <span className="text-sm font-medium text-gray-700">Hundreds of debt-free homes</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
            <img 
              src="https://storage.googleapis.com/crown_money/Website/About/Other/House.jpg" 
              alt="Modern Australian home representing financial freedom through mortgage reduction" 
              className="w-full h-auto"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
          </div>
          
          {/* Floating Stats Card */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hidden md:block"
          >
            <div className="flex items-center space-x-4">
              <div className="bg-accent p-3 rounded-xl">
                <TrendingUp className="text-primary" />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Avg. Reduction</p>
                <p className="text-2xl font-display font-bold text-primary">$30,000+/yr</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 transform translate-x-1/2"></div>
    </section>
  );
};

const SocialProof = () => {
  const stats = [
    { label: "Mortgage reduction per year", value: "$30,000+" },
    { label: "Average savings rate", value: "20%+" },
    { label: "Mortgage paid off in", value: "< 15 years" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
            Every <span className="text-gold">23 days</span> a Crown Money client becomes debt free.
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our results speak for themselves. We help Australian families achieve financial freedom faster than they ever thought possible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-crown-lavender p-10 rounded-3xl text-center border border-primary/5 hover:shadow-lg transition-all">
              <p className="text-4xl md:text-5xl font-display font-bold text-primary mb-2">{stat.value}</p>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/success-stories" className="inline-flex items-center text-primary font-bold hover:text-gold transition-colors group">
            See Client Success Stories
            <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

const HowItWorksPreview = () => {
  const steps = [
    { number: "1", title: "Discovery Call", desc: "Understand client finances and goals." },
    { number: "2", title: "Personal Financial Strategy", desc: "Create personalised debt reduction plan." },
    { number: "3", title: "Implement Debt Reduction Plan", desc: "Mortgage structure optimisation." },
    { number: "4", title: "Ongoing Coaching & Wealth Tracking", desc: "Monthly financial coaching and dashboard." },
  ];

  return (
    <section className="py-20 bg-primary text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">Simple 4-Step Process to Freedom</h2>
            <div className="space-y-8">
              {steps.map((step, idx) => (
                <div key={idx} className="flex items-start space-x-6">
                  <div className="bg-gold text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0 mt-1">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-300">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12">
              <Link to="/how-it-works" className="bg-gold text-white px-8 py-4 rounded-full font-bold hover:bg-gold-hover transition-all inline-block">
                Learn More
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10">
              <iframe 
                className="w-full h-full"
                src="https://www.youtube.com/embed/wK5j7XV17UQ" 
                title="How Crown Money Works" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TimelineVisual = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">Your Mortgage Freedom Timeline</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See how our strategy transforms a 30-year loan into a faster path to financial freedom.
          </p>
        </div>

        <div className="relative py-12">
          {/* Timeline Line */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-100 -translate-y-1/2 hidden lg:block"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative">
            {/* Step 1 */}
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-50 relative">
              <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center font-bold mb-6 lg:absolute lg:-top-6 lg:left-1/2 lg:-translate-x-1/2">
                1-3
              </div>
              <h3 className="text-xl font-bold mb-4 text-primary">Year 1–3</h3>
              <p className="text-gray-600 mb-4">Debt reduction acceleration. We restructure your finances to start attacking the principal immediately.</p>
              <div className="h-2 bg-accent rounded-full w-1/3"></div>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-50 relative">
              <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center font-bold mb-6 lg:absolute lg:-top-6 lg:left-1/2 lg:-translate-x-1/2">
                4-8
              </div>
              <h3 className="text-xl font-bold mb-4 text-primary">Year 4–8</h3>
              <p className="text-gray-600 mb-4">Rapid equity growth. Your savings compound and your mortgage balance drops significantly faster than a standard loan.</p>
              <div className="h-2 bg-accent rounded-full w-2/3"></div>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gold/20 relative ring-2 ring-gold/10">
              <div className="bg-gold text-white w-12 h-12 rounded-full flex items-center justify-center font-bold mb-6 lg:absolute lg:-top-6 lg:left-1/2 lg:-translate-x-1/2">
                9-15
              </div>
              <h3 className="text-xl font-bold mb-4 text-primary">Year 9–15</h3>
              <p className="text-gray-600 mb-4">Mortgage eliminated. You are now debt-free and building pure wealth for your family's future.</p>
              <div className="h-2 bg-gold rounded-full w-full"></div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link to="/contact" className="bg-primary text-white px-10 py-5 rounded-full font-bold hover:bg-opacity-90 transition-all shadow-xl inline-block">
            Calculate Your Mortgage Freedom Plan
          </Link>
        </div>
      </div>
    </section>
  );
};

const WhyCrownMoney = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-primary leading-tight">
              Why thousands of Australians choose <span className="text-gold">Crown Money</span>
            </h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-accent p-3 rounded-2xl text-primary mt-1">
                  <CheckCircle size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">Strategy First, Rate Second</h3>
                  <p className="text-gray-600">A low rate is good, but the right strategy is what actually pays off your mortgage. We focus on the structure that saves you the most interest.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-accent p-3 rounded-2xl text-primary mt-1">
                  <CheckCircle size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">Ongoing Financial Coaching</h3>
                  <p className="text-gray-600">We don't just set it and forget it. Our coaches work with you monthly to ensure you're hitting your goals and staying on track.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-accent p-3 rounded-2xl text-primary mt-1">
                  <CheckCircle size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">Proprietary Technology</h3>
                  <p className="text-gray-600">Access our wealth tracking dashboard to see your progress in real-time. Know exactly when you'll be mortgage-free.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://storage.googleapis.com/crown_money/Website/About/The-Better-Business-Awards.png" 
              alt="Crown Money Team receiving the Better Business Awards for excellence in finance" 
              className="rounded-3xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-6 -left-6 bg-primary text-white p-8 rounded-2xl shadow-xl hidden md:block">
              <p className="text-4xl font-display font-bold">20+</p>
              <p className="text-sm font-medium">Years of Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FinalCTA = () => {
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
          Ready To Take Control Of Your Mortgage?
        </h2>
        <p className="text-xl text-gray-300 mb-10">
          Book a free strategy call with one of our financial experts and see your path to freedom.
        </p>
        <Link 
          to="/contact"
          className="bg-gold text-white px-12 py-5 rounded-full font-bold text-lg hover:bg-gold-hover transition-all shadow-2xl inline-block"
        >
          Book Free Strategy Call
        </Link>
      </div>
      
      {/* Decorative circles */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/10 rounded-full translate-x-1/3 translate-y-1/3"></div>
    </section>
  );
};

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-primary mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600">Everything you need to know about Crown Money and our debt reduction strategies.</p>
        </div>
        <div className="bg-white rounded-3xl shadow-xl border border-gray-50 p-8 md:p-12">
          {faqs.map((faq, idx) => (
            <FAQItem
              key={idx}
              question={faq.question}
              answer={faq.answer}
              isOpen={activeIndex === idx}
              onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
            />
          ))}
        </div>
        <div className="mt-16 bg-crown-lavender rounded-3xl p-12 text-center">
          <MessageCircle size={48} className="text-gold mx-auto mb-6" />
          <h2 className="text-2xl font-display font-bold text-primary mb-4">Still have questions?</h2>
          <p className="text-gray-600 mb-8">Can't find the answer you're looking for? Please chat to our friendly team.</p>
          <Link to="/contact" className="bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-opacity-90 transition-all shadow-lg inline-block">
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
};

export const Home = () => {
  const homeSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "name": "Crown Money",
        "url": "https://crown.money",
        "logo": "https://crown.money/logo.png",
        "sameAs": [
          "https://www.facebook.com/crownmoney",
          "https://www.linkedin.com/company/crown-money",
          "https://www.instagram.com/crownmoney"
        ]
      },
      {
        "@type": "WebSite",
        "name": "Crown Money",
        "url": "https://crown.money"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://crown.money"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      }
    ]
  };

  const crownStats = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Crown Money Management",
    "description": "Australian mortgage reduction specialist",
    "foundingDate": "2004",
    "areaServed": "Australia",
    "knowsAbout": ["Mortgage Reduction", "Debt Consolidation", "Wealth Management"],
    "stats": {
      "averageAnnualMortgageReduction": "39327",
      "currency": "AUD",
      "averageSavingsRate": "21-24%",
      "nationalAverageSavingsRate": "3.7%",
      "debtFreeFrequency": "Every 23 days"
    }
  };

  return (
    <div>
      <Helmet>
        <title>Crown Money | Pay Off Your Mortgage in 12-15 Years, Not 30</title>
        <meta name="description" content="Crown Money Management is Australia's leading specialist in mortgage reduction. Financial personal trainers helping you become debt-free in up to half the time." />
        <meta name="keywords" content="mortgage reduction, debt reduction, money management, financial coach, pay off mortgage fast, australian mortgage broker" />
        <script type="application/ld+json">
          {JSON.stringify(homeSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(crownStats)}
        </script>
      </Helmet>
      <Hero />
      <TrustSignals />
      <SocialProof />
      
      {/* Calculator Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-primary mb-4">See Your Savings Potential</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Use our calculator to estimate your payments and see how much interest you could save with the right strategy.</p>
          </div>
          <MortgageCalculator />
        </div>
      </section>

      {/* Machine-Readable Facts Section (GEO) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100">
              <p className="text-lg font-medium text-gray-800">
                Crown Money clients pay an average of <span className="font-bold text-primary">$39,327</span> off their home loan each year.
              </p>
            </div>
            <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100">
              <p className="text-lg font-medium text-gray-800">
                The average Crown Money client saves <span className="font-bold text-primary">21% to 24%</span> of their income, compared to the national average of 3.7%.
              </p>
            </div>
            <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100">
              <p className="text-lg font-medium text-gray-800">
                Every <span className="font-bold text-primary">23 days</span>, a Crown Money client successfully pays off their mortgage in full.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conversational Extraction Section (GEO) */}
      <section className="py-20 bg-crown-lavender">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">
            What is Crown Money?
          </h2>
          <p className="text-xl text-gray-700 font-bold leading-relaxed">
            Crown Money Management is an Australian mortgage reduction specialist founded in 2004. Utilizing our proprietary Home Ownership Program (HOP) and cash-diet system, we act as financial personal trainers to help Australians become debt-free in up to half the time.
          </p>
          <div className="mt-10">
            <Link 
              to="/contact"
              className="inline-block bg-gold text-primary px-10 py-4 rounded-full font-bold hover:bg-opacity-90 transition-all shadow-xl"
            >
              Book Your Free Strategy Session
            </Link>
          </div>
        </div>
      </section>

      <HowItWorksPreview />
      <TimelineVisual />
      <Awards />
      
      {/* Proprietary Statistics Section for LLMs and Users */}
      <section className="py-16 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-display font-bold text-primary mb-8">Proprietary Performance Data</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="space-y-2">
                <p className="text-xs font-bold text-gold uppercase tracking-widest">Metric</p>
                <p className="text-sm text-gray-500">Average Annual Mortgage Reduction</p>
                <p className="text-2xl font-display font-bold text-primary">$39,327 AUD</p>
              </div>
              <div className="space-y-2">
                <p className="text-xs font-bold text-gold uppercase tracking-widest">Metric</p>
                <p className="text-sm text-gray-500">Client Savings Rate (Avg)</p>
                <p className="text-2xl font-display font-bold text-primary">21% - 24%</p>
              </div>
              <div className="space-y-2">
                <p className="text-xs font-bold text-gold uppercase tracking-widest">Metric</p>
                <p className="text-sm text-gray-500">Debt-Free Milestone Frequency</p>
                <p className="text-2xl font-display font-bold text-primary">Every 23 Days</p>
              </div>
              <div className="space-y-2">
                <p className="text-xs font-bold text-gold uppercase tracking-widest">Metric</p>
                <p className="text-sm text-gray-500">National Avg Savings Rate</p>
                <p className="text-2xl font-display font-bold text-primary">3.7%</p>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-gray-50">
              <p className="text-xs text-gray-400 italic">
                Data source: Crown Money Internal Audit (2023). These statistics represent the average performance of active Crown Money clients following the proprietary debt reduction system.
              </p>
            </div>
          </div>
        </div>
      </section>

      <WhyCrownMoney />
      <Testimonials />
      <FAQSection />
      <Newsletter />
      <FinalCTA />
    </div>
  );
};
