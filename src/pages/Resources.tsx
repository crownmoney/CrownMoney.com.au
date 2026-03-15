import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, Download, FileText, Lightbulb, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Resources = () => {
  const resources = [
    {
      title: "Mortgage Freedom Guide",
      type: "eBook",
      desc: "Our comprehensive guide to paying off your home in record time.",
      icon: <BookOpen />
    },
    {
      title: "Cashflow Masterclass",
      type: "Video Series",
      desc: "Learn how to manage your daily spending without sacrificing your lifestyle.",
      icon: <Lightbulb />
    },
    {
      title: "Debt Reduction Checklist",
      type: "PDF",
      desc: "A step-by-step checklist to start your debt reduction journey today.",
      icon: <FileText />
    }
  ];

  return (
    <div className="pt-10">
      {/* Hero */}
      <section className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">Educational Resources</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Free tools, guides, and insights to help you master your money and eliminate debt.
          </p>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {resources.map((res, idx) => (
              <div key={idx} className="bg-crown-lavender p-10 rounded-3xl border border-primary/5 hover:shadow-2xl transition-all group">
                <div className="bg-white text-primary w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-primary group-hover:text-white transition-colors">
                  {React.cloneElement(res.icon as React.ReactElement, { size: 32 })}
                </div>
                <p className="text-xs font-bold text-gold uppercase tracking-widest mb-2">{res.type}</p>
                <h3 className="text-2xl font-display font-bold text-primary mb-4">{res.title}</h3>
                <p className="text-gray-600 mb-8">{res.desc}</p>
                <button className="flex items-center space-x-2 text-primary font-bold hover:text-gold transition-colors">
                  <span>Download Free Guide</span>
                  <Download size={18} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Preview */}
      <section className="py-24 bg-crown-lavender">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-display font-bold text-primary mb-4">Latest Insights</h2>
              <p className="text-gray-600">Expert advice on mortgage reduction and wealth building.</p>
            </div>
            <Link to="/news" className="hidden md:flex items-center text-primary font-bold hover:text-gold transition-colors">
              View All Articles <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map((i) => (
              <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-xl flex flex-col md:flex-row">
                <div className="w-full md:w-2/5 h-48 md:h-auto">
                  <img 
                    src={`https://picsum.photos/seed/article${i}/600/400`} 
                    alt="Article" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8 w-full md:w-3/5">
                  <p className="text-xs font-bold text-gold uppercase tracking-widest mb-2">Mortgage Strategy</p>
                  <h3 className="text-xl font-bold text-primary mb-4">How Interest Rates Impact Your Debt Reduction Plan</h3>
                  <p className="text-gray-600 text-sm mb-6">Learn why a rising rate environment might actually be the best time to start your strategy...</p>
                  <Link to="/news" className="text-primary font-bold text-sm hover:underline">Read More</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-primary rounded-3xl p-12 text-center text-white relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl font-display font-bold mb-6">Get Weekly Money Tips</h2>
              <p className="text-gray-300 mb-10">Join 10,000+ Australians receiving our weekly financial education newsletter.</p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-grow px-6 py-4 rounded-full text-gray-900 outline-none"
                />
                <button className="bg-gold text-white px-8 py-4 rounded-full font-bold hover:bg-gold-hover transition-all">
                  Subscribe
                </button>
              </form>
            </div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          </div>
        </div>
      </section>
    </div>
  );
};
