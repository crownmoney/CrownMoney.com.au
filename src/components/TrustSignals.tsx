import React from 'react';
import { motion } from '../utils/motion';

const logos = [
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

export const TrustSignals = () => {
  return (
    <section className="py-16 bg-white overflow-hidden border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 mb-10 text-center">
        <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">As Seen On & Featured In</p>
      </div>
      <div className="relative flex overflow-x-hidden group">
        <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
        
        <motion.div 
          className="flex whitespace-nowrap py-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            duration: 40, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          {/* Double the logos for seamless loop */}
          {[...logos, ...logos].map((logo, idx) => {
            const logoName = logo.split('/').pop()?.replace(/%20/g, ' ').replace(/\.[^/.]+$/, '') || 'Media Logo';
            return (
              <div key={idx} className="mx-10 md:mx-14 flex items-center justify-center bg-white p-8 rounded-3xl shadow-sm border border-gray-100 min-w-[260px] h-36 transition-all duration-500 hover:shadow-xl hover:-translate-y-2">
                <img loading="lazy" decoding="async" 
                  src={logo} 
                  alt={`${logoName} - Featured in Crown Money Media`} 
                  className="max-h-full max-w-full object-contain"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://picsum.photos/seed/${idx}/200/100?grayscale`;
                  }}
                />
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
