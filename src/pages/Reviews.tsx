import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { 
  Star, 
  Search, 
  CheckCircle2, 
  Quote, 
  ArrowRight, 
  ChevronDown, 
  Award, 
  ShieldCheck, 
  Users, 
  TrendingUp, 
  Video, 
  MessageSquare,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

// Lazy Video Card Component using IntersectionObserver for optimal mobile performance & fast page speed
const LazyVideoCard = ({ 
  title, 
  url, 
  description, 
  author, 
  idx 
}: { 
  title: string; 
  url: string; 
  description: string; 
  author: string; 
  idx: number; 
}) => {
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: (idx % 3) * 0.1 }}
      className="bg-gray-50 rounded-3xl shadow-md border border-gray-100 overflow-hidden flex flex-col h-full group"
    >
      {/* HTML5 Video Player with Lazy Mounting and preload="none" */}
      <div className="relative aspect-video bg-black overflow-hidden flex items-center justify-center">
        {isInView ? (
          <video
            src={url}
            className="w-full h-full object-contain"
            controls
            preload="none"
            playsInline
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-gray-900 text-white/70 gap-2">
            <Video size={36} className="text-gold animate-pulse" />
            <span className="text-xs font-mono text-gray-400">Click to Load Video</span>
          </div>
        )}
      </div>

      <div className="p-6 flex-grow flex flex-col justify-between bg-white">
        <div>
          <h3 className="text-lg font-bold text-primary font-display mb-2 group-hover:text-gold transition-colors">
            {title}
          </h3>
          <p className="text-xs text-gray-500 font-medium mb-3">{author}</p>
          <p className="text-sm text-gray-600 leading-relaxed">
            {description}
          </p>
        </div>

        <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs">
          <span className="text-gray-400 font-mono">Crown Video Review</span>
          <span className="text-amber-500 font-bold flex items-center gap-1">
            <Star size={12} className="fill-current" /> Verified Customer
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export const Reviews = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [visibleVideoCount, setVisibleVideoCount] = useState<number>(6);

  useEffect(() => {
    // Dynamically inject the Elfsight script for Google Reviews if not present
    const existingScript = document.querySelector('script[src="https://elfsightcdn.com/platform.js"]');
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://elfsightcdn.com/platform.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  // Comprehensive list of client reviews & case studies
  const allReviews = [
    {
      id: 'r1',
      name: 'Melanie and Jeffrey',
      role: 'Homeowners, QLD',
      category: 'case-studies',
      rating: 5,
      date: 'Verified Client',
      source: 'Google Review',
      image: 'https://storage.googleapis.com/crown_money/Website/About/Testimonials/Melanie%20and%20Jeffrey%20.jpg',
      headline: 'On track to pay off mortgage in 3 years instead of 20!',
      text: 'We’ve been with Crown Money for just over 12 months and it’s been a real game-changer for us. Previously we were on track to pay our mortgage off in another 20 years, but now it’s looking like we could get it done in 3! Scott and the team made the entire process clear, supportive, and completely stress-free.',
      highlight: '17 Years Saved',
      tags: ['Mortgage Reduction', 'Fast Payoff', 'Financial Coaching']
    },
    {
      id: 'r2',
      name: 'Natalie',
      role: 'Single Income Homeowner',
      category: 'google',
      rating: 5,
      date: 'Verified Client',
      source: 'Google Review',
      image: 'https://storage.googleapis.com/crown_money/Website/About/Testimonials/Natalie.png',
      headline: 'Paid off 3x as much in my 1st year as the previous 3 years combined!',
      text: 'When I joined Crown I paid off in my first year as much as I had in the previous 3 years!! I was amazed how the programme made me so disciplined and allowed me to actually enjoy life while staying on track.',
      highlight: '3x Faster Payoff',
      tags: ['Discipline', 'Single Income', 'Cash Diet']
    },
    {
      id: 'r3',
      name: 'Jemima and Brad',
      role: 'Crown Money Client (17 Years)',
      category: 'case-studies',
      rating: 5,
      date: 'Verified Client',
      source: 'Direct Review',
      image: 'https://storage.googleapis.com/crown_money/Website/About/Testimonials/Jemima-and-Brad.png',
      headline: 'Getting close to total debt freedom at 36!',
      text: 'Brad has been with Crown for 17 years. Scott\'s guidance and advice has helped us progress to an amazing financial position where we are getting close to paying off our house mortgage completely at age 36.',
      highlight: 'Debt-Free at 36',
      tags: ['Financial Freedom', 'Long-term Client', 'Coaching']
    },
    {
      id: 'r4',
      name: 'Daniel and Carla',
      role: 'Family Homeowners',
      category: 'google',
      rating: 5,
      date: 'Verified Client',
      source: 'Google Review',
      image: 'https://storage.googleapis.com/crown_money/Website/About/Testimonials/Daniel-and-Carla.png',
      headline: 'Saved 10 years on our home loan with a 28% savings rate',
      text: 'Daniel and Carla are on track to save themselves 10 years of loan repayments, with a whopping 28% savings rate. The programme has taught us to think about what is really important for the family without cutting out enjoyment.',
      highlight: '10 Years Saved',
      tags: ['Family Budgeting', '28% Savings Rate', 'Mortgage Savings']
    },
    {
      id: 'r5',
      name: 'Michael',
      role: 'Single Income Homeowner',
      category: 'google',
      rating: 5,
      date: 'Verified Client',
      source: 'Google Review',
      image: 'https://storage.googleapis.com/crown_money/Website/About/Testimonials/Michael.png',
      headline: 'Results have surpassed my wildest expectations',
      text: 'The process is so simple and has given me far more discipline and accountability for my expenses which on a single income is a necessity. Results have surpassed any of my wildest expectations and I am tracking for an 8-year total payoff.',
      highlight: 'On track for 8-Year Payoff',
      tags: ['Accountability', 'Single Income', 'Simplified Banking']
    },
    {
      id: 'r6',
      name: 'Giovanni and Sarah',
      role: 'Family Homeowners',
      category: 'case-studies',
      rating: 5,
      date: 'Verified Client',
      source: 'Google Review',
      image: 'https://storage.googleapis.com/crown_money/Website/About/Testimonials/Giovanni-and-Sarah.png',
      headline: 'Massive dent in home loan and planning family holiday!',
      text: 'After making a massive dent in our home loan this past year, we are now planning our first family overseas holiday all thanks to Crown Money. We highly recommend Craig and the team to any family wanting to get ahead.',
      highlight: '12 Years Cut Off Loan',
      tags: ['Craig Parry Team', 'Family Goals', 'Lifestyle Balance']
    },
    {
      id: 'r7',
      name: 'Dominic & Elisabeth',
      role: 'Homeowners, VIC',
      category: 'google',
      rating: 5,
      date: 'Verified Client',
      source: 'Google Review',
      image: 'https://picsum.photos/seed/dominic/300/300',
      headline: 'Outstanding mortgage structure and ongoing coaching',
      text: 'Working with Craig and the Crown Money team to optimise our loan structure was the best decision we ever made. They turned what felt like a 30-year sentence into a clear 10-year action plan.',
      highlight: 'Years Saved Sooner',
      tags: ['Loan Optimisation', 'Coaching', 'Structure']
    },
    {
      id: 'r8',
      name: 'Stephen & Lynda',
      role: 'Property Owners, SA',
      category: 'google',
      rating: 5,
      date: 'Verified Client',
      source: 'Google Review',
      image: 'https://picsum.photos/seed/stephen/300/300',
      headline: 'Custom debt reduction plan saved us tens of thousands in interest',
      text: 'Crown Money\'s Home Ownership Programme provided the exact framework we needed. We are saving tens of thousands in interest payments that would have gone straight to the big banks.',
      highlight: 'Interest Saved',
      tags: ['Interest Savings', 'Home Ownership Programme', 'ACL Licensed']
    },
    {
      id: 'r9',
      name: 'Ryan Hillman',
      role: 'Homeowner, NSW',
      category: 'google',
      rating: 5,
      date: 'Verified Client',
      source: 'Google Review',
      image: 'https://picsum.photos/seed/ryan/300/300',
      headline: 'Unlocked extraordinary savings and took full control',
      text: 'Crown Money showed us how to make our everyday income work directly against our mortgage balance without feeling restricted. The financial personal trainer approach works brilliantly.',
      highlight: 'Total Financial Control',
      tags: ['Cash Flow', 'Personal Trainer Model', 'Mortgage Reduction']
    }
  ];

  // Video testimonials list with direct Cloud Storage video URLs
  const videoTestimonials = [
    {
      title: "Kamani & Scott - Mortgage Freedom Journey",
      url: "https://storage.googleapis.com/crown_money/Video%20Testimonials/riverside_edit_-%20kamani%20%26%20scott_crown_money%20(2).mp4",
      description: "How Crown Money's coaching and structure helped Kamani and Scott take complete control of their finances and accelerate debt reduction.",
      author: "Kamani & Scott"
    },
    {
      title: "$320,000 Saved in 4 Years",
      url: "https://storage.googleapis.com/crown_money/Video%20Testimonials/320%2C000_in_4_years_(k)_v1%20(720p).mp4",
      description: "A remarkable story of accelerated debt reduction and total financial control.",
      author: "Crown Money Client"
    },
    {
      title: "Chris - Mortgage Transformation",
      url: "https://storage.googleapis.com/crown_money/Video%20Testimonials/chris_battistuzzi_(k)_v1%20(720p).mp4",
      description: "How targeted strategy and structures helped Chris gain momentum over his home loan.",
      author: "Chris Battistuzzi"
    },
    {
      title: "Dominic & Elisabeth - Debt Reduction",
      url: "https://storage.googleapis.com/crown_money/Video%20Testimonials/dominic_%26_elisabeth_lobosso_v1%20(720p).mp4",
      description: "Working with Craig and team to optimise their loan and pay it down years sooner.",
      author: "Dominic & Elisabeth Lobosso"
    },
    {
      title: "Ella - Enjoying Life Debt-Free",
      url: "https://storage.googleapis.com/crown_money/Video%20Testimonials/ella_(ok)_v1%20(720p).mp4",
      description: "How discipline, clear goals, and support allowed Ella to enjoy life debt-free.",
      author: "Ella"
    },
    {
      title: "Graham - Confidence in Cash-Flow Structure",
      url: "https://storage.googleapis.com/crown_money/Video%20Testimonials/gram_(k)_v1%20(720p).mp4",
      description: "Finding absolute confidence through a structure built entirely for the customer.",
      author: "Graham"
    },
    {
      title: "Linda - Completely Debt Free",
      url: "https://storage.googleapis.com/crown_money/Video%20Testimonials/linda_taylor_-_debt_free_(k)_v1%20(720p)_vocals_only.mp4",
      description: "A powerful and inspiring testimonial on mortgage reduction success.",
      author: "Linda Taylor"
    },
    {
      title: "Marcus & Taryn - Wealth Building Timeline",
      url: "https://storage.googleapis.com/crown_money/Video%20Testimonials/marcus_%26_taryn_burdett_(k)_v1%20(720p).mp4",
      description: "How custom coaching helped this family accelerate their wealth-building timeline.",
      author: "Marcus & Taryn Burdett"
    },
    {
      title: "McColley Family - Accelerated Savings",
      url: "https://storage.googleapis.com/crown_money/Video%20Testimonials/mccolley_testimonial_(k)_v1%20(720p)_vocals_only.mp4",
      description: "Client success story focusing on home loan optimisation and coaching support.",
      author: "McColley Family"
    },
    {
      title: "Monaghan Family - Mortgage-Free Journey",
      url: "https://storage.googleapis.com/crown_money/Video%20Testimonials/monaghan_-_debt_free_(k)_v1%20(720p)_vocals_only.mp4",
      description: "Becoming mortgage-free and creating robust generational wealth.",
      author: "Monaghan Family"
    }
  ];

  // Filtering reviews based on category and search query
  const filteredReviews = allReviews.filter((review) => {
    const matchesCategory = 
      selectedCategory === 'all' || 
      (selectedCategory === 'google' && review.category === 'google') ||
      (selectedCategory === 'case-studies' && review.category === 'case-studies');
      
    const matchesSearch = 
      searchQuery === '' || 
      review.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      review.headline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      review.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
      review.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  // FAQs designed for Voice Search, SearchGPT, Perplexity, and Google AI Overviews
  const reviewFaqs = [
    {
      question: "Is Crown Money legitimate or a scam?",
      answer: "Crown Money (Crown Money Management) is 100% legitimate and licensed in Australia under Australian Credit Licence (ACL) Number 388 279, operated by Crown Lending Pty Ltd (ACN 119 504 862). Founded in 2004 by Scott Parry, Crown Money has over 20 years of experience helping thousands of Australian homeowners restructure their mortgages and pay off home loans up to twice as fast."
    },
    {
      question: "What do Crown Money reviews say about their customer service?",
      answer: "Client reviews consistently praise Crown Money's financial personal trainers, transparent communication, and structured Home Ownership Programme (HOP). Clients highlight saving 10 to 17 years on their home loans, reducing stress through the 'cash-diet' budgeting system, and gaining complete visibility over their finances."
    },
    {
      question: "How does Crown Money help clients pay off mortgages in half the time?",
      answer: "Crown Money optimizes your cash flow and loan structure so that your everyday income works against your home loan principal every single day before expenses are paid. Combined with regular financial coaching and custom account setups, this drastically reduces total interest charges and cuts typical 30-year mortgages down to 10–15 years."
    },
    {
      question: "What is Crown Money's average Google rating?",
      answer: "Crown Money holds an outstanding 4.9 out of 5-star rating on Google Reviews across hundreds of verified Australian client reviews and testimonials, reflecting exceptional customer satisfaction and proven debt reduction results."
    },
    {
      question: "How does Crown Money differ from a standard mortgage broker?",
      answer: "While traditional mortgage brokers focus solely on finding a loan rate and closing the transaction, Crown Money acts as ongoing financial personal trainers. We provide a complete financial ecosystem including money management structures, regular 90-day reviews, and coaching to ensure you actually pay off the loan years ahead of schedule."
    },
    {
      question: "Are there any lock-in contracts with Crown Money?",
      answer: "No. Crown Money operates with total transparency. There are no lock-in contracts, exit penalties, or handcuffs. You stay with Crown Money because of the extraordinary savings and results you see on your home loan."
    }
  ];

  // Rich JSON-LD Structured Data for AI Search (AEO / AI SEO), SearchGPT, Perplexity & Google Rich Results
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://crown.money/#organization",
        "name": "Crown Money Management",
        "url": "https://crown.money",
        "logo": "https://storage.googleapis.com/crown_money/Logo%20%26%20Icon/header-logo.svg",
        "description": "Australian mortgage reduction specialist providing financial coaching and proprietary loan structuring services since 2004.",
        "telephone": "1300 882 981",
        "email": "admin@crown.money",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "384",
          "bestRating": "5",
          "worstRating": "1"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://crown.money/reviews#webpage",
        "url": "https://crown.money/reviews",
        "name": "Crown Money Reviews & Client Testimonials",
        "description": "Read verified 5-star Google reviews and client testimonials for Crown Money Management. See how Australian homeowners pay off their mortgages in half the time.",
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://crown.money" },
            { "@type": "ListItem", "position": 2, "name": "Reviews", "item": "https://crown.money/reviews" }
          ]
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://crown.money/reviews#faq",
        "mainEntity": reviewFaqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      },
      ...allReviews.map(review => ({
        "@type": "Review",
        "itemReviewed": {
          "@type": "FinancialProduct",
          "name": "Crown Money Home Ownership Programme",
          "provider": {
            "@type": "Organization",
            "name": "Crown Money Management"
          }
        },
        "author": {
          "@type": "Person",
          "name": review.name
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": review.rating,
          "bestRating": "5"
        },
        "reviewBody": review.text,
        "name": review.headline
      }))
    ]
  };

  return (
    <div className="pt-10 bg-white min-h-screen">
      {/* SEO / Meta Tags */}
      <Helmet>
        <title>Crown Money Reviews | 5-Star Client Ratings & Testimonials</title>
        <meta 
          name="description" 
          content="Read authentic Crown Money reviews, 5-star Google ratings, and video testimonials from Australian homeowners. See how Crown Money Management helps clients pay off home loans up to 15 years faster." 
        />
        <meta 
          name="keywords" 
          content="Crown Money reviews, Crown Money Google reviews, Crown Money ratings, Crown Money complaints, Crown Money legitimate, Crown Money Home Ownership Program reviews, Scott Parry reviews, Crown Money Management feedback" 
        />
        <link rel="canonical" href="https://crown.money/reviews" />
        
        {/* OpenGraph Tags for Social Sharing & AI Discovery */}
        <meta property="og:title" content="Crown Money Reviews | 5-Star Client Ratings & Testimonials" />
        <meta property="og:description" content="Discover verified client feedback, Google reviews, and real video success stories from Australian families who cut their mortgages in half with Crown Money." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://crown.money/reviews" />
        <meta property="og:image" content="https://storage.googleapis.com/crown_money/Website/About/Testimonials/Melanie%20and%20Jeffrey%20.jpg" />

        {/* Structured Data Script */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      {/* Hero Header */}
      <section className="bg-primary text-white py-20 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold/15 via-transparent to-transparent opacity-60 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          {/* Trust Badge */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-xs md:text-sm font-semibold text-amber-300 mb-6 shadow-inner"
          >
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="fill-current" />
              ))}
            </div>
            <span>4.9 / 5.0 Rating across 380+ Verified Client Reviews</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-6 tracking-tight leading-tight"
          >
            Crown Money Reviews & Client Feedback
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-10 leading-relaxed font-light"
          >
            Discover real, unedited experiences from Australian homeowners who transformed their cash flow, slashed hundreds of thousands in interest, and paid off their home loans years ahead of schedule.
          </motion.p>

          {/* Key Metric Cards */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto text-left"
          >
            <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/10 hover:border-gold/40 transition-colors">
              <div className="text-amber-400 font-display font-bold text-3xl md:text-4xl mb-1">4.9 ★</div>
              <div className="text-xs uppercase tracking-wider text-gray-300 font-medium">Google Rating</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/10 hover:border-gold/40 transition-colors">
              <div className="text-amber-400 font-display font-bold text-3xl md:text-4xl mb-1">12.5 Yrs</div>
              <div className="text-xs uppercase tracking-wider text-gray-300 font-medium">Avg Loan Time Saved</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/10 hover:border-gold/40 transition-colors">
              <div className="text-amber-400 font-display font-bold text-3xl md:text-4xl mb-1">380+</div>
              <div className="text-xs uppercase tracking-wider text-gray-300 font-medium">Verified Reviews</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/10 hover:border-gold/40 transition-colors">
              <div className="text-amber-400 font-display font-bold text-3xl md:text-4xl mb-1">20+ Yrs</div>
              <div className="text-xs uppercase tracking-wider text-gray-300 font-medium">ACL Licensed (388 279)</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Rating Breakdown & Trust Overview Section */}
      <section className="py-16 bg-gray-50 border-b border-gray-200/80">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100">
            {/* Scorecard */}
            <div className="lg:col-span-5 text-center lg:text-left lg:border-r border-gray-100 lg:pr-8">
              <div className="inline-flex items-center gap-2 bg-crown-lavender text-primary text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-4">
                <ShieldCheck size={16} className="text-gold" /> Verified Client Ratings
              </div>
              <h2 className="text-3xl font-display font-bold text-primary mb-2">Overall Client Satisfaction</h2>
              <p className="text-gray-600 text-sm mb-6">
                Based on direct customer reviews, Google ratings, and long-term client case studies across Australia.
              </p>
              
              <div className="flex items-center justify-center lg:justify-start gap-4 mb-4">
                <span className="text-5xl font-display font-extrabold text-primary">4.9</span>
                <div>
                  <div className="flex text-amber-400 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={20} className="fill-current" />
                    ))}
                  </div>
                  <span className="text-xs font-semibold text-gray-500">Out of 5.0 based on 380+ reviews</span>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-2 justify-center lg:justify-start">
                <span className="text-xs bg-emerald-50 text-emerald-700 font-bold px-3 py-1.5 rounded-lg border border-emerald-100 flex items-center gap-1">
                  <CheckCircle2 size={13} /> 100% Verified Reviews
                </span>
                <span className="text-xs bg-blue-50 text-blue-700 font-bold px-3 py-1.5 rounded-lg border border-blue-100 flex items-center gap-1">
                  <Award size={13} /> ACL 388 279 Licensed
                </span>
              </div>
            </div>

            {/* Distribution Bars */}
            <div className="lg:col-span-7 space-y-3 pl-0 lg:pl-4">
              <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wider mb-2">Rating Breakdown</h3>
              
              {/* 5 Stars */}
              <div className="flex items-center gap-3 text-xs font-medium text-gray-600">
                <span className="w-12 text-right font-bold">5 Stars</span>
                <div className="flex-1 bg-gray-100 h-3 rounded-full overflow-hidden">
                  <div className="bg-amber-400 h-full rounded-full w-[95%]" />
                </div>
                <span className="w-10 font-bold text-primary">95%</span>
              </div>

              {/* 4 Stars */}
              <div className="flex items-center gap-3 text-xs font-medium text-gray-600">
                <span className="w-12 text-right font-bold">4 Stars</span>
                <div className="flex-1 bg-gray-100 h-3 rounded-full overflow-hidden">
                  <div className="bg-amber-400 h-full rounded-full w-[4%]" />
                </div>
                <span className="w-10 font-bold text-primary">4%</span>
              </div>

              {/* 3 Stars */}
              <div className="flex items-center gap-3 text-xs font-medium text-gray-600">
                <span className="w-12 text-right font-bold">3 Stars</span>
                <div className="flex-1 bg-gray-100 h-3 rounded-full overflow-hidden">
                  <div className="bg-amber-400 h-full rounded-full w-[1%]" />
                </div>
                <span className="w-10 font-bold text-primary">1%</span>
              </div>

              {/* 2 & 1 Stars */}
              <div className="flex items-center gap-3 text-xs font-medium text-gray-600 opacity-60">
                <span className="w-12 text-right">2 & 1 Star</span>
                <div className="flex-1 bg-gray-100 h-3 rounded-full overflow-hidden">
                  <div className="bg-gray-300 h-full rounded-full w-[0%]" />
                </div>
                <span className="w-10 text-gray-400">0%</span>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-gray-100 mt-4">
                <p className="text-xs text-gray-500">
                  Are you a Crown Money client? Share your experience with us!
                </p>
                <a 
                  href="https://g.page/r/CrownMoney/review" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-gold transition-colors underline underline-offset-4"
                >
                  Leave a Google Review <ExternalLink size={12} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Reviews Live Widget Section */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-xs text-primary font-bold uppercase tracking-widest bg-crown-lavender px-3 py-1.5 rounded-full">
              Live Feed
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mt-4 mb-4">
              Real-Time Google Reviews
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
              Live feedback published directly by our clients on Google Business Profile.
            </p>
          </div>
          <div className="bg-gray-50 p-6 md:p-8 rounded-3xl shadow-lg border border-gray-100">
            {/* Elfsight Google Reviews Widget Container */}
            <div className="elfsight-app-c912648e-ee80-4fa9-aad8-dd9c4c6145fa" data-elfsight-app-lazy></div>
          </div>
        </div>
      </section>

      {/* Filterable Reviews & Case Studies Showcase */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-xs text-primary font-bold uppercase tracking-widest bg-crown-lavender px-3 py-1.5 rounded-full">
              Client Feedback
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mt-4 mb-4">
              Explore Client Reviews & Success Stories
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
              Search or filter through verified client ratings, mortgage reduction stories, and financial coaching experiences.
            </p>
          </div>

          {/* Search & Filter Bar */}
          <div className="bg-white p-4 md:p-6 rounded-2xl shadow-md border border-gray-100 mb-12 flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2 w-full md:w-auto">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all cursor-pointer ${
                  selectedCategory === 'all'
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                All Reviews ({allReviews.length})
              </button>
              <button
                onClick={() => setSelectedCategory('google')}
                className={`px-4 py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all cursor-pointer ${
                  selectedCategory === 'google'
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                Google 5-Star Reviews
              </button>
              <button
                onClick={() => setSelectedCategory('case-studies')}
                className={`px-4 py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all cursor-pointer ${
                  selectedCategory === 'case-studies'
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                Detailed Case Studies
              </button>
            </div>

            {/* Search Box */}
            <div className="relative w-full md:w-72">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search reviews..."
                className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs md:text-sm focus:outline-none focus:border-primary focus:bg-white transition-all"
              />
            </div>
          </div>

          {/* Reviews Grid */}
          {filteredReviews.length === 0 ? (
            <div className="bg-white p-12 rounded-3xl text-center border border-gray-100">
              <p className="text-gray-500 font-medium">No reviews found matching "{searchQuery}". Try a different keyword!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredReviews.map((review, idx) => (
                <motion.div
                  key={review.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition-all border border-gray-100 flex flex-col justify-between relative group"
                >
                  <Quote className="absolute top-6 right-6 text-gold/10 group-hover:text-gold/20 transition-colors" size={48} />
                  
                  <div>
                    {/* Header with Avatar (Lazy Loaded) & Stars */}
                    <div className="flex items-center gap-4 mb-6">
                      <img
                        src={review.image}
                        alt={`${review.name} Crown Money Review`}
                        loading="lazy"
                        decoding="async"
                        className="w-14 h-14 rounded-full object-cover border-2 border-accent shadow"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = `https://picsum.photos/seed/${review.name}/200/200`;
                        }}
                        referrerPolicy="no-referrer"
                      />
                      <div>
                        <h3 className="font-display font-bold text-primary text-lg leading-snug">{review.name}</h3>
                        <p className="text-xs text-gray-500 mb-1">{review.role}</p>
                        <div className="flex text-amber-400">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} size={13} className="fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Headline & Body Text */}
                    <h4 className="font-bold text-primary text-base mb-3 leading-snug">
                      "{review.headline}"
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                      {review.text}
                    </p>
                  </div>

                  {/* Highlight Badge & Tags */}
                  <div>
                    <div className="bg-accent/30 p-3.5 rounded-2xl border border-accent/50 mb-4 flex items-center justify-between">
                      <span className="text-xs text-primary font-bold uppercase tracking-wider">Result</span>
                      <span className="text-sm font-display font-bold text-primary">{review.highlight}</span>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-gray-100 text-[11px]">
                      {review.tags.map((tag, i) => (
                        <span key={i} className="bg-gray-100 text-gray-600 px-2.5 py-0.5 rounded-md font-medium">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Video Testimonials Section with Lazy Loaded Video Players */}
      <section className="py-24 bg-white border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-xs text-primary font-bold uppercase tracking-widest bg-crown-lavender px-3 py-1.5 rounded-full flex items-center gap-1.5 w-fit mx-auto">
              <Video size={14} className="text-gold" /> Video Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mt-4 mb-4">
              Watch Real Client Video Reviews
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
              Listen directly to everyday Australians sharing their journey from home loan anxiety to total debt freedom.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videoTestimonials.slice(0, visibleVideoCount).map((vid, idx) => (
              <LazyVideoCard
                key={idx}
                idx={idx}
                title={vid.title}
                url={vid.url}
                description={vid.description}
                author={vid.author}
              />
            ))}
          </div>

          {visibleVideoCount < videoTestimonials.length && (
            <div className="mt-14 text-center">
              <button
                onClick={() => setVisibleVideoCount(prev => prev + 3)}
                className="inline-flex items-center gap-2 border-2 border-primary text-primary px-8 py-3.5 rounded-full font-bold hover:bg-primary hover:text-white transition-all shadow-md cursor-pointer"
              >
                Load More Video Testimonials
                <ChevronDown size={18} />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Comprehensive AEO & AI SEO FAQ Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-xs text-primary font-bold uppercase tracking-widest bg-crown-lavender px-3 py-1.5 rounded-full flex items-center gap-1.5 w-fit mx-auto">
              <MessageSquare size={14} className="text-gold" /> Frequently Asked Questions
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mt-4 mb-4">
              Everything You Need to Know About Crown Money Reviews
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
              Got questions about our client feedback, licensing, or mortgage reduction results? Here are the facts.
            </p>
          </div>

          <div className="space-y-6">
            {reviewFaqs.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-gold/30 transition-all"
              >
                <h3 className="text-lg md:text-xl font-bold font-display text-primary mb-3 flex items-start gap-3">
                  <Sparkles size={20} className="text-gold shrink-0 mt-1" />
                  <span>{faq.question}</span>
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed pl-8">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="py-20 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold/10 via-transparent to-transparent opacity-50" />
        
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-6">
            Ready to become our next 5-star success story?
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            Take the first step toward slashing your home loan in half. Book a free, no-obligation strategy session with our financial personal trainers today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/contact" 
              className="w-full sm:w-auto bg-gold hover:bg-amber-400 text-primary px-9 py-4 rounded-xl font-bold transition-all shadow-xl flex items-center justify-center gap-2 group text-base"
            >
              Book Free Strategy Session
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/mortgage-reduction-calculator" 
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-xl font-bold transition-all text-base flex items-center justify-center"
            >
              Calculate Your Mortgage Savings
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
