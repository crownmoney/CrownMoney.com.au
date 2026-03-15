import React from 'react';
import { motion } from 'motion/react';
import { Mic, Play, Calendar, Clock, ArrowRight } from 'lucide-react';

export const Podcast = () => {
  const episodes = [
    {
      title: "The Psychology of Debt Reduction",
      date: "March 12, 2024",
      duration: "45 mins",
      desc: "Scott Parry discusses why most people fail at paying off debt and how to change your mindset for success."
    },
    {
      title: "Interest Rates: What Homeowners Need to Know",
      date: "March 5, 2024",
      duration: "38 mins",
      desc: "A deep dive into the current economic climate and how to protect your mortgage from rising rates."
    },
    {
      title: "Success Story: From 30 Years to 12 Years",
      date: "February 26, 2024",
      duration: "52 mins",
      desc: "An interview with Jo and Luke about their journey to mortgage freedom and the challenges they overcame."
    }
  ];

  return (
    <div className="pt-10">
      {/* Hero */}
      <section className="bg-crown-lavender py-20">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center space-x-2 text-primary font-bold uppercase tracking-widest text-sm mb-6">
              <Mic size={18} className="text-gold" />
              <span>The Crown Money Podcast</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-primary mb-6">
              Money Management <span className="text-gold">Simplified</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Join Scott Parry and guests as they discuss debt reduction, wealth building, and the path to financial freedom in Australia.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-opacity-90 transition-all flex items-center space-x-2">
                <Play size={18} fill="currentColor" />
                <span>Listen Now</span>
              </button>
              <button className="bg-white text-primary border border-gray-200 px-8 py-4 rounded-full font-bold hover:bg-gray-50 transition-all">
                Subscribe on Spotify
              </button>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://picsum.photos/seed/podcast/800/800" 
              alt="Podcast Cover" 
              className="rounded-3xl shadow-2xl w-full max-w-md mx-auto"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Episodes */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-display font-bold text-primary mb-12">Latest Episodes</h2>
          
          <div className="space-y-8">
            {episodes.map((ep, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-gray-100 hover:shadow-xl transition-all group flex flex-col md:flex-row gap-8 items-center">
                <div className="bg-accent text-primary w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Play size={24} fill="currentColor" />
                </div>
                <div className="flex-grow">
                  <div className="flex items-center space-x-4 text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
                    <span className="flex items-center"><Calendar size={12} className="mr-1" /> {ep.date}</span>
                    <span className="flex items-center"><Clock size={12} className="mr-1" /> {ep.duration}</span>
                  </div>
                  <h3 className="text-2xl font-display font-bold text-primary mb-3">{ep.title}</h3>
                  <p className="text-gray-600 text-sm">{ep.desc}</p>
                </div>
                <button className="text-primary hover:text-gold transition-colors">
                  <ArrowRight size={24} />
                </button>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <button className="text-primary font-bold hover:text-gold transition-colors flex items-center mx-auto">
              View All Episodes <ArrowRight size={18} className="ml-2" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
