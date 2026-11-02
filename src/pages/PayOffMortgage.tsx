import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShieldCheck, 
  Percent, 
  Award, 
  Star, 
  TrendingUp, 
  Users, 
  ChevronDown, 
  ChevronUp, 
  CheckCircle, 
  Heart, 
  Sparkles,
  Trophy,
  ArrowDown
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const PayOffMortgage = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Parse GCLID, GBRAID, WBRAID, and UTM variables to pre-fill the Paperform hidden fields
  const getPrefillString = () => {
    if (typeof window === 'undefined') return '';
    const params = new URLSearchParams(window.location.search);
    const keysToCapture = ['gclid', 'gbraid', 'wbraid', 'utm_source', 'utm_medium', 'utm_campaign'];
    const prefillParts: string[] = [];
    keysToCapture.forEach(key => {
      const value = params.get(key);
      if (value) {
        prefillParts.push(`${key}=${encodeURIComponent(value)}`);
      }
    });
    return prefillParts.join('&');
  };

  const prefillVal = getPrefillString() || "1";

  // Inject Paperform Embed Script on Mount
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://paperform.co/__embed.min.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const faqList = [
    {
      question: "What is Crown Money?",
      answer: "Crown money is one of Australia’s leading financial coaching services where we have been helping clients pay off their houses in up to half the time, by helping them manage their money more effectively so that it works harder for them. When most people get a standard home loan, at the end of their 30 year loan term they end up paying back close to double the original loan amount to the bank, including all the interest payments. What we do at Crown Money is we help clients restructure their finances in a way that allows them to cut anywhere from 40 to 50% off the total amount that they will end up paying for their home, which allows them to be debt free up to twice as fast. We have a wide range of financial coaching services to help cater for Australians and their financial needs. For the past 20 years we have specialised in helping clients pay off their house much faster than what they’re currently tracking for. We have financial coaching programmes for people who don’t have a mortgage and need help with their money management."
    },
    {
      question: "How much does it cost?",
      answer: "The cost of the services will vary greatly based on many factors, including your current situation and your goals. We have solutions that are free and go all the way up to custom pricing from there. Just like an accountant would need to understand your situation more before they can tell you how much it would be to help you achieve your accounting and tax goals, we are the same from a debt reduction and wealth creation point of view.\n\nSpeak to one of our experts and they will walk you through what your options are. Regardless of what you pick, we always leave clients better than we found them, even if they decide to do it themselves. If you do decide that one of our custom solutions is a good fit, for most clients, they are designed to pay for themselves very quickly through the savings and gains they provide."
    },
    {
      question: "I have an offset account, so I'm already saving interest, how is this different?",
      answer: "The easiest way to describe the difference between an offset account and what we do as financial coaches is think of an offset account as a gym membership. What we do is different, because we’re a gym membership with a personal trainer built in. We all know that people with personal trainers get better results than those who just try and attempt to go to the gym themselves. Offset accounts are there to traditionally help ‘offset’ interest. However, they don’t accelerate the reduction in principal to be paid out in under 15 years due to the way the offset loans are structured. We deliberately structure our money management system so that it reduces principal rapidly and offsets interest at the same time. Getting a 2 prong attack of debt reduction and interest offset working in your favour. The other key difference we have seen with an offset account is they usually only save clients four or five years off a 30-year loan, compared to the vast majority of our clients using our Financial Coaching structure are out of debt and own their homes in under 15 years. The clients on the Crown money management system are outperforming what they were doing before they met us when they had an offset account, even though they have the same income and debt level. Most of our clients have come from an offset account and a ‘cheap rate’ with a bank as their offset account wasn’t working as well for them as they’d expected. Those clients are now saving 200% more and paying down their loans in 50% of the time. A big reason for this uplift in their performance is the financial coaching and software that allows us to coach you on your financial numbers such as your savings rate, your debt reduction speed, surplus cashflow position, what day you own your home, and how much equity you’ve created in your property. The guidance we provide clients around increasing your income, with scripts and strategies on how to get pay rises, as well as helping reduce their expenses with initiatives such as crown coins and auditing your fixed expenses are key reasons these clients make and save as much money as possible compared to an offset account."
    },
    {
      question: "I'm disciplined with my money and stick to a budget. Why would I need this?",
      answer: "This money management system is designed to help accelerate your debt reduction as well as your net worth, and just because you’re disciplined and stick to a budget doesn’t mean that you’re outperforming financially. If you don’t know your numbers or measure them you aren’t in control financially. Do you know when you can make your next financial move such as buying your next property? Do you know how much you could afford, and when you can afford to do that? Do you know your savings rate? Your surplus cash flow position? Do you know exactly what day you’re going to pay your house off ? Just because you stick to a budget doesn’t mean that you’re financially secure and in the best position where your money is working the hardest for you and you’re making excellent financial progress. A lot of the time you won’t have a financial plan in place. We come in and help build that financial strategy and tailor it to you and your specific goals and dreams."
    },
    {
      question: "Do you control all my money and pay my bills for me?",
      answer: "No, we don’t control anyone’s money and we don’t pay anyone’s bills for them. We specifically help with the management of all cash flow and optimise it to make sure that your cash flow structure is running as efficiently as possible. We simply make sure that your funds are available for you when your bills and large expenses are due."
    },
    {
      question: "Do you hold my money or is it still sitting with a bank?",
      answer: "We don’t hold any money on behalf of any clients. Your loan is in your name, your bank accounts are in your name and so all your banking is with your bank or new financial institution that you choose to take out your finances with. We do not hold any money on behalf of any clients at any time."
    },
    {
      question: "Why can't I achieve the same thing with my current bank?",
      answer: "Most Australians think they can achieve great financial results as long as they’ve got a cheap rate and an offset account, but having seen over 6,500 Australian’s financial positions (with offset accounts and cheap rates), they’re unfortunately not outperforming the average Australian. Their savings rate is below 7%. Our average client savings rate is above 24%. Their annual debt reduction is close to $12,000pa and our average client’s annual debt reduction is over $29,327+. Your current bank is focused on keeping you in debt for as long as possible, they’re financially incentivised to make sure you’re paying interest for the longest period of time. We have designed loan structures and money management systems to help you reduce interest, cut down your loan term and make sure your money is working as hard as possible for you."
    },
    {
      question: "I hate paperwork, how long does it take to get set up?",
      answer: "We all hate paperwork. This is similar to going on an overseas holiday. You’ve got the check-in, you’ve got the baggage check, and you’ve got customs and then you’ve got boarding of the plane… All of those frustrating hoops you’ve got to jump through to get to your final destination …. an amazing island holiday. It’s very similar to this process as there is paperwork required, being in the financial services industry we need to be compliant with all the rules and regulations. We have to comply with Anti Money Laundering, Know-Your-Client and Best Interest duty, it is an unavoidable part of this process. The time for the Money Management system to be implemented and setup usually takes four weeks to six weeks from our initial meeting."
    },
    {
      question: "How do we access our money if there's an emergency?",
      answer: "Clients usually have a ‘float’ sitting in their spending account or their Visa debit account. This float, is usually $1000+, and is sitting there to cover any emergencies on the weekends. We are also able to help access funds for an emergency usually within a few hours. There are plenty ways to access money if there’s an emergency and we ensure that you’ll never be caught short."
    },
    {
      question: "What happens if I want out?",
      answer: "There are no lock-in contracts, there are no handcuffs or penalties for leaving. You can come and go as you please. So if you want out, you can leave at any time. There’s no break costs. There’s no exit fees. Pure and simply you can pick and choose when you come and when you go."
    },
    {
      question: "What's the catch? Why isn't everyone doing this?",
      answer: "Well, why weren’t you doing this before today? Probably because you didn’t know about it, it’s not something that your bank or your broker has discussed with you how you need a financial coach. We let our 20+ years of above average results, case studies, testimonials and happy google reviews speak for themselves."
    },
    {
      question: "Is Crown Money licensed?",
      answer: "Yes, Crown Money holds an Australian Credit Licence (ACL). We are operated by Crown Lending Pty Ltd, ACL Number 388 279, ACN 119 504 862. You can view a copy of our licence [here](https://storage.googleapis.com/crown_money/Website/License%20%26%20Legal/Crown%20Lending%20ASIC%20ACL.pdf)."
    },
    {
      question: "How do you get paid?",
      answer: "We get paid like a mortgage broker gets paid if we are able to refinance your home loan. The bank that we refinance your home loan to will pay us an introduction fee as well as an ongoing management fee. We also have a Money Management system establishment cost, which is usually put on top of the loan. It is to set up the financial coaching system which allows us to manage and coach our clients on their finances going forward."
    }
  ];

  const brandLogos = [
    "https://storage.googleapis.com/crown_money/Trust%20Signals/7%20today%20tonight%20logo.png",
    "https://storage.googleapis.com/crown_money/Trust%20Signals/A%20current%20affair%20logo.png",
    "https://storage.googleapis.com/crown_money/Trust%20Signals/Herald%20Sun%20logo.png",
    "https://storage.googleapis.com/crown_money/Trust%20Signals/News-com-au_logo.svg.png",
    "https://storage.googleapis.com/crown_money/Trust%20Signals/The%20Sunday%20Times%20Logo.png",
    "https://storage.googleapis.com/crown_money/Trust%20Signals/The-Australian-Financial-Review-Logo.png",
    "https://storage.googleapis.com/crown_money/Trust%20Signals/Untitled-5.png",
    "https://storage.googleapis.com/crown_money/Trust%20Signals/a-current-affair.png",
    "https://storage.googleapis.com/crown_money/Trust%20Signals/herald-sun.png",
    "https://storage.googleapis.com/crown_money/Trust%20Signals/in-the-black.png",
    "https://storage.googleapis.com/crown_money/Trust%20Signals/money%20management.png",
    "https://storage.googleapis.com/crown_money/Trust%20Signals/money-magazine.png",
    "https://storage.googleapis.com/crown_money/Trust%20Signals/the-advertiser.png",
    "https://storage.googleapis.com/crown_money/Trust%20Signals/the-daily-telegraph.png",
    "https://storage.googleapis.com/crown_money/Trust%20Signals/the-west-australian.png"
  ];

  return (
    <div id="pay-off-mortgage-landing" className="min-h-screen bg-white text-[#2A154B] selection:bg-[#D4AF37] selection:text-white font-sans scroll-smooth">
      
      {/* 1. Custom CSS overrides rendered inline to strip out excess whitespace from Paperform */}
      <style dangerouslySetInnerHTML={{__html: `
        iframe[src*="paperform.co"],
        .paperform-embed,
        div[data-paperform-id] {
          margin: 0 !important;
          padding: 0 !important;
          background: #ffffff !important;
          border: none !important;
          max-height: 480px !important;
        }
        div[data-paperform-id] iframe,
        iframe[src*="paperform.co"] {
          border: none !important;
          background: #ffffff !important;
          height: 380px !important;
          min-height: 320px !important;
          max-height: 420px !important;
        }
      `}} />

      {/* 2. Urgent Announcement Bar */}
      <div id="announcement-bar" className="bg-[#1D093B] border-b border-[#D4AF37]/25 text-white text-center py-3 px-4 text-xs md:text-sm font-semibold tracking-wide uppercase">
        <span className="inline-flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
          WORRIED YOUR MORTGAGE WILL FORCE YOU TO KEEP WORKING INTO YOUR 70s?
        </span>
      </div>

      {/* 3. Hero Region with Centered Logo (Strictly No Navigation Menu Items) */}
      <div id="hero-interactive-section" className="bg-gradient-to-b from-[#1D093B] to-[#2A154B] text-white relative">
        <header className="py-3 md:py-4 flex justify-center items-center border-b border-white/5">
          <img 
            src="https://storage.googleapis.com/crown_money/Logo%20%26%20Icon/header-logo.svg" 
            alt="Crown Money" 
            className="h-8 md:h-10 w-auto filter brightness-0 invert" 
          />
        </header>

        {/* Hero Responsive Split Container with optimised padding for high fold alignment */}
        <div className="max-w-7xl mx-auto px-4 pt-4 pb-8 md:pt-6 md:pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Core Value Proposition Messaging */}
            <div className="lg:col-span-7 text-center lg:text-left space-y-4 md:space-y-6">
              <span className="inline-block bg-[#D4AF37]/15 text-[#D4AF37] text-xs font-bold px-4 py-1.5 rounded-full tracking-wider uppercase border border-[#D4AF37]/20 shadow-sm">
                PROPRIETARY DEBT-FREE SYSTEM
              </span>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-display font-extrabold tracking-tight text-white leading-tight">
                Find Out If It’s Possible for You to Pay Your <span className="text-[#D4AF37] italic font-serif">Mortgage</span> Off in <span className="text-[#D4AF37] italic font-serif">7-15 Years</span> & Retire <span className="text-[#D4AF37] italic font-serif">Debt-Free!</span>
              </h1>
              <p className="text-gray-300 text-sm md:text-base lg:text-lg font-medium max-w-2xl lg:max-w-none mx-auto leading-relaxed">
                Answer a few short questions to see if the Crown Money System could help you retire mortgage-free. Over <strong className="text-white font-bold">7,000 Australian families</strong> have used it to own their homes decades earlier, without lifestyle cutbacks or earning more income.
              </p>
            </div>

            {/* Right Column: Premium white form card wrapper raised high in first fold with golden pointer arrow */}
            <div className="lg:col-span-5 w-full max-w-xl mx-auto relative mt-6 lg:mt-0">
              {/* Attention Grabber Indicator / Bouncing Pointer Arrow with gold accent */}
              <div className="absolute -top-7 left-1/2 transform -translate-x-1/2 z-20 pointer-events-none w-max">
                <motion.div 
                  className="bg-gradient-to-r from-[#D4AF37] to-amber-500 text-[#2A154B] text-xs font-extrabold px-4 py-1.5 rounded-full shadow-lg border border-white/50 flex items-center gap-1.5 uppercase tracking-wide"
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <span>Start Questionnaire Below</span>
                  <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[#2a154b]" />
                </motion.div>
              </div>

              {/* White Form Card Box wrapping Paperform natively */}
              <div className="bg-white rounded-[2rem] p-4 md:p-6 shadow-2xl border-4 border-[#D4AF37]/45 relative overflow-hidden mt-2">
                {/* Thin golden designer accent line */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#D4AF37] via-amber-400 to-[#D4AF37]" />
                
                {/* Embedded paperform inside its comfortable native white container */}
                <div className="relative overflow-hidden bg-white max-h-[380px] w-full">
                  <div 
                    data-paperform-id="crownmoney" 
                    data-prefill={prefillVal} 
                    data-prefill-inherit="1" 
                    data-scroll="once" 
                    className="w-full"
                  ></div>
                </div>
              </div>
              
              <div className="text-xs md:text-xs text-gray-300 font-medium pt-3 flex items-center justify-center lg:justify-start gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37] flex-shrink-0" />
                <span>All details are held 100% private & secure. This will not impact your credit file.</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* 4. Elegant "As Seen On & Featured In" Infinite Scrolling section */}
      <section id="trust-featured-in" className="bg-white py-12 border-b border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center mb-8">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-widest font-mono">AS FEATURED ON & IN REGULAR PUBLICATIONS</p>
        </div>
        <div className="relative flex overflow-x-hidden group">
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
          
          <motion.div 
            className="flex whitespace-nowrap py-2"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ 
              duration: 35, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          >
            {/* Double the logos to facilitate seamless endless scrolling */}
            {[...brandLogos, ...brandLogos].map((logo, idx) => {
              const name = logo.split('/').pop()?.replace(/%20/g, ' ').replace(/\.[^/.]+$/, '') || 'Media Logo';
              return (
                <div key={idx} className="mx-8 md:mx-12 flex-shrink-0 flex items-center justify-center p-4 bg-gray-50/40 rounded-2xl border border-gray-100 h-16 w-40 hover:bg-gray-50 transition-colors">
                  <img loading="lazy" decoding="async" 
                    src={logo} 
                    alt={name} 
                    className="max-h-10 max-w-full object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition duration-300"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://picsum.photos/seed/${idx}/150/50?grayscale`;
                    }}
                  />
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* 5. Award-Winning Industry Authority */}
      <section id="awards-reco" className="bg-gray-50 py-20 px-4 border-b border-gray-100">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-gold-dark text-xs font-bold tracking-widest uppercase bg-[#D4AF37]/15 px-3.5 py-1.5 rounded-full">
              INDUSTRY LEADERSHIP
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-black text-[#2A154B] leading-tight">
              Multi-Award Winning Authority
            </h2>
            <p className="text-gray-600 text-sm md:text-base">
              Proudly recognised by Australia's premier independent mortgage panels, fintech organisations, and broker alliances for trailblazing debt structuring excellence and customer execution.
            </p>
          </div>

          {/* Highlighted major 2026 Winner Better Business Award */}
          <div className="max-w-3xl mx-auto bg-white rounded-3xl p-6 md:p-8 shadow-xl border-2 border-[#D4AF37]/35 flex flex-col md:flex-row items-center gap-8 text-left">
            <div className="w-36 h-36 md:w-44 md:h-44 flex-shrink-0 bg-[#2A154B]/5 rounded-2xl p-4 flex items-center justify-center border border-gray-100">
              <img loading="lazy" decoding="async" 
                src="https://storage.googleapis.com/crown_money/Website/About/Awards%20Won/BBA26_Winners_SA_Best%20Customer%20Service%20(Office).png" 
                alt="2026 Better Business Awards Winner SA Best Customer Service" 
                className="max-h-full max-w-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="space-y-3">
              <span className="inline-flex items-center space-x-1.5 bg-[#D4AF37]/10 text-[#2A154B] px-3.5 py-1.2 rounded-full text-xs font-bold uppercase tracking-wider">
                <Award size={14} className="text-[#D4AF37]" />
                <span>Latest Recognition</span>
              </span>
              <h3 className="text-xl md:text-2xl font-display font-black text-[#2A154B]">
                Best Customer Service (Office) — Winner
              </h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                Better Business Awards proudly awarded Crown Money Management for SA outstanding Customer Support. Setting a premium standard across debt-reduction services.
              </p>
            </div>
          </div>

          {/* 4 Winners Grid */}
          <div className="space-y-8">
            <h3 className="text-center font-display font-bold text-[#2A154B] text-sm uppercase tracking-wider">Major Industry Wins</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
              {[
                {
                  img: "https://storage.googleapis.com/crown_money/Website/About/Awards%20Won/2025_Winner_SA_Best%20Boutique%20Non-Franchise%20Office.png",
                  title: "Best Boutique Office"
                },
                {
                  img: "https://storage.googleapis.com/crown_money/Website/About/Awards%20Won/2023_Winner%20seal__SA_Best%20Boutique%20Independent%20Office%20.png",
                  title: "Best Boutique Independent"
                },
                {
                  img: "https://storage.googleapis.com/crown_money/Website/About/Awards%20Won/2022_FBAA%20FINANCE%20BROKER%20OF%20THE%20YEAR%20(SA)_WINNER.png",
                  title: "Finance Broker of the Year"
                },
                {
                  img: "https://storage.googleapis.com/crown_money/Website/About/Awards%20Won/2020_Finsure_Broker%20of%20the%20Year_WINNER.png",
                  title: "Broker of the Year"
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-5 rounded-2xl border border-gray-150 shadow-sm flex flex-col items-center justify-center text-center space-y-3 hover:shadow-md transition">
                  <img loading="lazy" decoding="async" src={item.img} alt={item.title} className="h-20 w-auto object-contain hover:scale-115 transition duration-300" referrerPolicy="no-referrer" />
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Meet The Aussie Families Section (Deep Purple space with both YouTube shorts & screenshot text cards) */}
      <section id="shorts-and-testimonials" className="bg-[#2A154B] text-white py-20 px-4 relative overflow-hidden">
        
        {/* Decorative backdrop elements */}
        <div className="absolute w-[400px] h-[400px] bg-[#D4AF37]/5 rounded-full filter blur-[120px] top-12 left-0 -ml-40" />
        <div className="absolute w-[400px] h-[400px] bg-white/5 rounded-full filter blur-[120px] bottom-12 right-0 -mr-40" />

        <div className="max-w-7xl mx-auto space-y-16 relative z-10">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-[#D4AF37] text-xs font-bold tracking-widest uppercase">
              REVIEWS & TESTIMONIALS
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight">
              Meet The Aussie Families Who Got Their Freedom Back
            </h2>
            <p className="text-gray-300 text-sm md:text-base">
              Listen to the actual experiences of Australian homeowners who broke free from thirty years of bank debt with our system.
            </p>
          </div>

          {/* YouTube Shorts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                id: 'Ls2IV8kA1Y4',
                title: 'Andrew & Angela\'s Story',
                desc: 'See how this family knocked off massive amounts of principal in months.'
              },
              {
                id: 'es-etOd8jg8',
                title: 'Hayley\'s Milestone Story',
                desc: 'Sticking to budget effectively and reaching goals 12+ years quicker.'
              },
              {
                id: '1l9Hrdho9No',
                title: 'Tim & Emma\'s Real Freedom',
                desc: 'Transitioning from stressful mortgage payments to full cash clarity.'
              }
            ].map((video, idx) => (
              <motion.div 
                key={video.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col bg-white/5 rounded-3xl p-4 border border-white/10 hover:border-[#D4AF37]/35 transition-all duration-300"
              >
                {/* 9:16 portrait style for Shorts */}
                <div className="aspect-[9/16] w-full bg-black/40 rounded-2xl overflow-hidden shadow-lg border border-white/5 relative">
                  <iframe loading="lazy" 
                    width="100%" 
                    height="100%" 
                    src={`https://www.youtube-nocookie.com/embed/${video.id}`}
                    title={video.title}
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen
                    className="w-full h-full object-cover"
                  ></iframe>
                </div>
                <div className="mt-4 space-y-1 px-1">
                  <h3 className="text-white font-bold font-display text-sm md:text-md">
                    {video.title}
                  </h3>
                  <p className="text-gray-400 text-xs">
                    {video.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Screenshot Beautiful Cards Testimonial Layout */}
          <div className="pt-16 max-w-5xl mx-auto space-y-8">
            <h3 className="text-center font-display font-black text-[#D4AF37] text-lg uppercase tracking-wider">
              Written Client Endorsements
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  quote: "We paid off a massive $36,000 this year without sacrificing our overseas family holidays. We love how the system works and the friendly Crown team are always there to help and guide you along the way. Perfect results.",
                  author: "Andrew & Angela",
                  rating: 5
                },
                {
                  quote: "It is wonderful to be able to track our progress through the monthly statements delivered to us. It really motivates you to stick to your budget and achieve your long term goals. I now recommend Crown Money Management to all my family and friends!",
                  author: "Hayley",
                  rating: 5
                },
                {
                  quote: "Since we joined we comfortably saved for our wedding, honeymoon to the Maldives, a trip to Bali and currently enjoying a month through Miami, Bahamas and Mexico. All while still paying off our mortgage. Living off our own money (not credit cards) has given us clarity and structure.",
                  author: "Tim & Emma",
                  rating: 5
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-white text-[#2A154B] rounded-[2rem] p-8 shadow-2xl relative flex flex-col justify-between transform hover:-translate-y-1 transition duration-300">
                  <div className="space-y-4">
                    <div className="text-primary/10">
                      <span className="text-7xl font-serif leading-none select-none absolute -top-1 left-6 text-[#2A154B]/10">“</span>
                    </div>
                    <p className="text-gray-700 text-[14px] leading-relaxed relative z-10 pt-4 font-medium italic">
                      "{item.quote}"
                    </p>
                  </div>
                  <div className="pt-6 mt-6 border-t border-gray-100 text-center space-y-2">
                    <h3 className="text-[#2A154B] font-bold font-display text-base">
                      - {item.author}
                    </h3>
                    <div className="flex justify-center text-[#D4AF37]">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current text-[#D4AF37]" />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 7. Why Thousands of Australians Choose Crown Money */}
      <section id="why-choose" className="bg-white py-20 px-4 border-b border-gray-150">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-8 text-left">
            <div className="space-y-3">
              <span className="text-xs font-bold text-gold-dark tracking-wider uppercase block">
                ALIGNED PERFORMANCE CO-DESIGN
              </span>
              <h2 className="text-3xl md:text-5xl font-display font-black text-[#2A154B] leading-tight">
                Why thousands of Australians choose Crown Money
              </h2>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                Traditional lenders are structured to keep you in interest debt for as long as possible. We build a custom payoff blueprint to pull timelines back.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  title: "Strategy First, Rate Second",
                  body: "A low rate provides mild relief, but proper custom timeline structures are what actually pay down a mortgage in under 15 years. We focus on a complete defensive cash design."
                },
                {
                  title: "Ongoing Professional Strategy Coaches",
                  body: "We do not leave you to succeed alone. Our coaches execute monthly audits with you to hold your course secure, adjust to dynamic household shocks, and reward wins."
                },
                {
                  title: "Proprietary Wealth Platform",
                  body: "Gain live access to custom tools monitoring surplus, exact date of true debt-free ownership, net worth progress, and historical performance updates in real-time."
                }
              ].map((perk, pIdx) => (
                <div key={pIdx} className="flex gap-4 items-start">
                  <div className="p-1.5 bg-[#D4AF37]/10 rounded-full text-[#D4AF37] max-h-min mt-1 flex-shrink-0">
                    <CheckCircle className="w-5 h-5 fill-current text-white text-[#D4AF37]" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-display font-bold text-base text-[#2A154B]">{perk.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{perk.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-[2.5rem] overflow-hidden border-8 border-gray-100 shadow-2xl bg-gray-55">
              <img loading="lazy" decoding="async" 
                src="https://storage.googleapis.com/crown_money/Website/About/Other/The-Better-Business-Awards.png" 
                alt="Crown Money Team receiving the Better Business Awards for excellence in finance" 
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-6 left-6 bg-[#2A154B] text-white p-5 rounded-2xl border border-[#D4AF37]/35 shadow-lg max-w-xs">
                <p className="text-[#D4AF37] text-2xl font-black font-display tracking-tight leading-none">20+ Years</p>
                <p className="text-xs text-gray-300 font-semibold uppercase tracking-wider mt-1">OF TRUSTED ADVICE & EXPERTISE</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 8. Interactive Accordion FAQs Section */}
      <section id="faqs" className="bg-[#FAF9FC] py-20 px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <span className="text-gold-dark text-xs font-bold tracking-widest uppercase bg-[#D4AF37]/10 px-3.5 py-1.5 rounded-full">
              GENERAL INFORMATION & FAQ
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-black text-[#2A154B] leading-tight">
              Answers To Your Questions
            </h2>
            <p className="text-gray-600 text-sm md:text-base">
              Got worries or technical questions? Explore detailed insights into how Crown Money empowers you.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-4 md:p-8 shadow-xl border border-gray-100 space-y-4">
            {faqList.map((item, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div key={index} className="border-b border-gray-100 last:border-0 pb-4 last:pb-0">
                  <button 
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full py-4 flex items-center justify-between text-left text-[#2A154B] hover:text-[#D4AF37] transition duration-200"
                  >
                    <span className="font-display font-bold text-base md:text-lg pr-4">{item.question}</span>
                    <span className="bg-[#2A154B]/5 p-2 rounded-full text-[#2A154B] flex-shrink-0">
                      {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="text-gray-600 text-sm leading-relaxed pb-4 pt-1 whitespace-pre-line font-medium">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          <div className="bg-gradient-to-r from-[#2A154B] to-[#1D093B] text-white p-8 md:p-12 rounded-[2.5rem] text-center space-y-6 relative border border-[#D4AF37]/20">
            <h3 className="text-2xl font-display font-bold tracking-tight">Still have a unique household scenario?</h3>
            <p className="text-gray-300 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
              Our specialists are ready to review your exact home loan balances, lifestyle limits, and setup speed completely free of obligation.
            </p>
            <div className="pt-2">
              <a 
                href="#hero-interactive-section" 
                className="bg-[#D4AF37] hover:bg-white text-[#2A154B] px-8 py-3.5 rounded-full font-bold transition duration-300 shadow-xl inline-block"
              >
                Go to Eligibility Check
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Clean Center-Aligned Footer (Strictly No Navigation Menu Items) */}
      <footer id="landing-footer" className="bg-[#120526] text-gray-400 py-16 px-4 border-t border-white/5">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="flex flex-col items-center gap-6">
            <img loading="lazy" decoding="async" 
              src="https://storage.googleapis.com/crown_money/Logo%20%26%20Icon/header-logo.svg" 
              alt="Crown Money" 
              className="h-10 w-auto filter brightness-0 invert opacity-65"
            />
            <div className="flex flex-wrap justify-center gap-6 text-xs md:text-xs font-semibold uppercase tracking-wider text-gray-400">
              <span>MFAA Member</span>
              <span>•</span>
              <span>ACL 388 279</span>
              <span>•</span>
              <span>ACN 119 504 862</span>
            </div>
          </div>

          <div className="text-xs leading-relaxed text-gray-400 space-y-4 pt-8 border-t border-white/5 max-w-4xl mx-auto text-center">
            <p>
              <strong>Compliance Disclaimer:</strong> Financial services represented here are configured under Crown Money Management Pty Ltd (ACN 119 504 862, ACL Number 388 279). Any representation of savings is calculated pursuant to historical audit samples and individual eligibility. This does not constitute legal, tax, or investment advice. Feel free to obtain independent guidance relevant to your specific personal household circumstances.
            </p>
            <p>
              Our 12-Month Guarantee: We guarantee to beat your current registered traditional bank debt reduction results within 12 months, or we refund our service system setup fees according to contractual terms of service. No risk, just payoff.
            </p>
            
            {/* Added Privacy Link */}
            <div className="pt-4 flex justify-center gap-4 text-xs font-semibold text-[#D4AF37] hover:text-white transition duration-200">
              <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
              <span>•</span>
              <Link to="/target-market-determinations" className="hover:underline">TMD</Link>
            </div>

            <p className="text-gray-400 text-xs pt-4">
              &copy; {new Date().getFullYear()} Crown Money Management. All rights reserved. Built with 12-Month Guarantee security.
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
};
