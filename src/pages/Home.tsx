import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Play, CheckCircle, ArrowRight, Star, Quote, TrendingUp, Calendar, ShieldCheck, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

import { Newsletter } from '../components/Newsletter';
import { MortgageCalculator } from '../components/MortgageCalculator';
import { TrustSignals } from '../components/TrustSignals';
import { Awards } from '../components/Awards';
import { AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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
            Pay Off Your Mortgage <span className="text-gold">Years Faster</span> Without Changing Your Income
          </h1>
          <p className="text-lg text-gray-600 mb-10 max-w-lg">
            Australia’s leading specialists in debt reduction and money management. We help you build wealth while eliminating debt.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link 
              to="/contact"
              className="bg-primary text-white px-8 py-4 rounded-full font-bold text-center hover:bg-opacity-90 transition-all shadow-lg flex items-center justify-center"
            >
              Book Free Strategy Call
            </Link>
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
              alt="Crown Money House" 
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

const Testimonials = () => {
  const testimonials = [
    {
      name: "Melanie and Jeffrey",
      story: "We’ve been with Crown Money for just over 12 months and it’s been a real game-changer for us. Previously we were on track to pay our mortgage off in another 20 years but now it’s looking like we could get it done in 3!",
      outcome: "17 Years Saved",
      image: "https://storage.googleapis.com/crown_money/Website/About/Testimonials/Melanie%20and%20Jeffrey%20.jpg"
    },
    {
      name: "Natalie",
      story: "When I joined Crown I paid off in my first year as much as I had in the previous 3 years!! I was amazed how the program made me so disciplined and allowed me to actually enjoy life.",
      outcome: "3x Faster Payoff",
      image: "https://storage.googleapis.com/crown_money/Website/About/Testimonials/Natalie.png"
    },
    {
      name: "Jemima and Brad",
      story: "Scott's guidance and advice has helped us progress to an amazing financial position where we are getting close to paying off our house mortgage. We wouldn't be where we are today without Scott and Crown.",
      outcome: "Debt Free at 36",
      image: "https://storage.googleapis.com/crown_money/Website/About/Testimonials/Jemima-and-Brad.png"
    },
    {
      name: "Daniel and Carla",
      story: "The program has taught us to think about what is really important for the family. This allows us to live life without some of the financial stresses that arise when bills pop out of nowhere.",
      outcome: "10 Years Saved",
      image: "https://storage.googleapis.com/crown_money/Website/About/Testimonials/Daniel-and-Carla.png"
    },
    {
      name: "Michael",
      story: "The process is so simple and has given me far more discipline and accountability for my expenses which on a single income is a necessity. Results have surpassed any other of my wildest expectations.",
      outcome: "Debt-free in 8 years",
      image: "https://storage.googleapis.com/crown_money/Website/About/Testimonials/Michael.png"
    },
    {
      name: "Giovanni and Sarah",
      story: "After making a massive dent in our home loan this past year, we are now planning our first family overseas holiday all thanks to Crown Money. We highly recommend Craig and the team.",
      outcome: "12 Years Saved",
      image: "https://storage.googleapis.com/crown_money/Website/About/Testimonials/Giovanni-and-Sarah.png"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 bg-crown-lavender overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-primary mb-4">Success Stories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Real results from real Australians who took control of their financial future.</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="bg-white rounded-[3rem] p-8 md:p-16 shadow-xl relative"
            >
              <Quote className="absolute top-8 left-8 text-gold/10" size={120} />
              <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
                <div className="shrink-0">
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].name}
                    className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover border-4 border-accent shadow-lg"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="text-center md:text-left">
                  <p className="text-xl md:text-2xl text-gray-700 italic leading-relaxed mb-8">
                    "{testimonials[currentIndex].story}"
                  </p>
                  <div>
                    <h4 className="text-2xl font-display font-bold text-primary mb-2">{testimonials[currentIndex].name}</h4>
                    <div className="inline-block bg-accent px-4 py-2 rounded-full text-primary font-bold text-sm">
                      {testimonials[currentIndex].outcome}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-12 space-x-4">
            <button 
              onClick={prev}
              className="bg-white p-4 rounded-full text-primary shadow-lg hover:bg-primary hover:text-white transition-all"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={next}
              className="bg-white p-4 rounded-full text-primary shadow-lg hover:bg-primary hover:text-white transition-all"
            >
              <ChevronRight size={24} />
            </button>
          </div>
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
              alt="Crown Money Team Awards" 
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

export const Home = () => {
  return (
    <div>
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

      <HowItWorksPreview />
      <TimelineVisual />
      <Awards />
      <Testimonials />
      <Newsletter />
      <WhyCrownMoney />
      <FinalCTA />
    </div>
  );
};
