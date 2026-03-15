import React from 'react';
import { motion } from 'motion/react';
import { Play, CheckCircle, ArrowRight, Star, Quote, TrendingUp, Calendar, ShieldCheck, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

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
              src="https://picsum.photos/seed/finance/800/600" 
              alt="Crown Money Team" 
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
      name: "Jo & Luke",
      image: "https://storage.googleapis.com/crown_money/Website/About/Testimonials/Jo-and-Luke.png",
      quote: "Crown Money changed our lives. We're on track to pay our home off in 12 years instead of 30!",
      result: "18 years saved"
    },
    {
      name: "Matthew Anderson",
      image: "https://storage.googleapis.com/crown_money/Website/About/Testimonials/Matthew-Anderson-1.jpg",
      quote: "The coaching is what makes the difference. Having someone keep you accountable is priceless.",
      result: "$45k debt reduced in year 1"
    },
    {
      name: "Todd & Sarah",
      image: "https://storage.googleapis.com/crown_money/Website/About/Testimonials/Todd-and-Sarah.png",
      quote: "We finally feel in control of our money. The dashboard shows us exactly where we are every day.",
      result: "25% increase in savings"
    }
  ];

  return (
    <section className="py-20 bg-crown-lavender">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">Real Australians. Real Results.</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join hundreds of families who have taken control of their financial future.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl shadow-xl hover:translate-y-[-5px] transition-all">
              <div className="flex items-center space-x-4 mb-6">
                <img 
                  src={t.image} 
                  alt={t.name} 
                  className="w-16 h-16 rounded-full object-cover border-2 border-accent"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://picsum.photos/seed/${t.name}/100/100`;
                  }}
                />
                <div>
                  <h4 className="font-bold text-primary">{t.name}</h4>
                  <div className="flex text-gold">
                    {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                  </div>
                </div>
              </div>
              <Quote className="text-accent mb-4" size={32} />
              <p className="text-gray-600 italic mb-6">"{t.quote}"</p>
              <div className="bg-accent/30 px-4 py-2 rounded-lg inline-block">
                <span className="text-sm font-bold text-primary">{t.result}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl">
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/W0MskR1vqJs" 
              title="Client Testimonial" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-display font-bold text-primary">Hear directly from our clients</h3>
            <p className="text-gray-600">
              Our strategy isn't just about numbers; it's about the freedom and peace of mind that comes with being debt-free.
            </p>
            <Link to="/testimonials" className="inline-flex items-center text-primary font-bold hover:text-gold transition-colors group">
              Read More Success Stories
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

const WhyCrownMoney = () => {
  const features = [
    { icon: <Calendar />, title: "20+ Years Experience", desc: "Two decades of helping Australians navigate the finance world." },
    { icon: <Users />, title: "Monthly Financial Coaching", desc: "Ongoing support to keep you on track towards your goals." },
    { icon: <TrendingUp />, title: "Personalised Strategies", desc: "No cookie-cutter plans. We build a strategy for your specific life." },
    { icon: <ShieldCheck />, title: "Wealth Tracking Software", desc: "Real-time visibility into your progress and net worth." },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">Why Crown Money?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We are more than just finance brokers. We are your partners in wealth creation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, idx) => (
            <div key={idx} className="p-8 rounded-3xl border border-gray-100 hover:border-gold/30 hover:shadow-xl transition-all group">
              <div className="bg-accent text-primary w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                {React.cloneElement(f.icon as React.ReactElement, { size: 28 })}
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary">{f.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
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
      <SocialProof />
      <HowItWorksPreview />
      <TimelineVisual />
      <Testimonials />
      <WhyCrownMoney />
      <FinalCTA />
    </div>
  );
};
