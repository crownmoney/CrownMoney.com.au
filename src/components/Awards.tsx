import React from 'react';
import { motion } from '../utils/motion';
import { Award, Trophy, Star } from 'lucide-react';

const highlightedAward = {
  image: "https://storage.googleapis.com/crown_money/Website/About/Awards%20Won/BBA26_Winners_SA_Best%20Customer%20Service%20(Office).png",
  title: "Best Customer Service (Office) — Winner",
  year: "2026",
  source: "Better Business Awards"
};

const winnerAwards = [
  "https://storage.googleapis.com/crown_money/Website/About/Awards%20Won/2025_Winner_SA_Best%20Boutique%20Non-Franchise%20Office.png",
  "https://storage.googleapis.com/crown_money/Website/About/Awards%20Won/2023_Winner%20seal__SA_Best%20Boutique%20Independent%20Office%20.png",
  "https://storage.googleapis.com/crown_money/Website/About/Awards%20Won/2022_Winner%20seal__SA_Best%20Independent%20Office%20(5%20brokers%20or%20less).png",
  "https://storage.googleapis.com/crown_money/Website/About/Awards%20Won/2022_FBAA%20FINANCE%20BROKER%20OF%20THE%20YEAR%20(SA)_WINNER.png",
  "https://storage.googleapis.com/crown_money/Website/About/Awards%20Won/2021_FBAA_Finance%20Broker%20of%20the%20Year_WINNER.jpg",
  "https://storage.googleapis.com/crown_money/Website/About/Awards%20Won/2021_Better%20Business%20Awards_SA_Best%20Independent%20Office%20(5%20brokers%20or%20less)_WINNER.png",
  "https://storage.googleapis.com/crown_money/Website/About/Awards%20Won/2020_Finsure_Broker%20of%20the%20Year_WINNER.png"
];

const finalistAwards = [
  "https://storage.googleapis.com/crown_money/Awards/2023_finalist%20seal_SA_Best%20Customer%20Service%20(Individual)%20(1).png",
  "https://storage.googleapis.com/crown_money/Awards/2023_finalist%20seal_SA_Best%20Residential%20Broker%20(1).png",
  "https://storage.googleapis.com/crown_money/Awards/2023_finalist%20seal_SA_Best%20Boutique%20Independent%20Office%20.png",
  "https://storage.googleapis.com/crown_money/Awards/2022_finalist%20seal_SA_Best%20Customer%20Service%20(Individual).png",
  "https://storage.googleapis.com/crown_money/Awards/2022_ABA_2022-Finalist_Customer%20Service%20of%20the%20Year%20-%20Individual%20(1).png",
  "https://storage.googleapis.com/crown_money/Awards/2021_Better%20Business%20Awards_SA_Best%20Customer%20Service%20(Individual)_FINALIST.png",
  "https://storage.googleapis.com/crown_money/Awards/2021_Better%20Business%20Awards_SA_Best%20Residential%20Broker_FINALIST.png"
];

export const Awards = () => {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center relative z-10 space-y-20">
        
        <div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-primary mb-4">Award-Winning Excellence</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our unwavering commitment to delivering exceptional customer service and innovative finance strategies is consistently recognised by the industry's most prestigious organisations.
          </p>
        </div>

        {/* Highlighted latest 2026 Award */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border-2 border-gold/30 relative overflow-hidden"
        >
          {/* Decorative Sparkles */}
          <div className="absolute top-6 right-6 text-gold animate-pulse">
            <Star size={28} className="fill-gold" />
          </div>
          <div className="absolute bottom-6 left-6 text-gold/40">
            <Trophy size={48} />
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 relative z-10 text-left">
            <div className="w-48 h-48 md:w-56 md:h-56 flex-shrink-0 bg-primary/5 rounded-2xl p-4 flex items-center justify-center border border-gray-100">
              <img loading="lazy" decoding="async" 
                src={highlightedAward.image} 
                alt={`${highlightedAward.title}`} 
                className="max-h-full max-w-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="space-y-4">
              <span className="inline-flex items-center space-x-2 bg-gold/10 text-primary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                <Award size={14} className="text-gold" />
                <span>Latest Achievement</span>
              </span>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-primary">
                {highlightedAward.title}
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                We are incredibly proud to have been crowned the <strong>Winner</strong> of the <strong>{highlightedAward.source}</strong> for {highlightedAward.year}, highlighting our dedication to setting the gold standard in premium customer support.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Major Industry Winners List */}
        <div className="space-y-12">
          <div className="flex items-center justify-center space-x-3">
            <Trophy className="text-gold" size={24} />
            <h3 className="text-xl md:text-2xl font-display font-bold text-primary">Key Industry Wins</h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-6 items-center justify-center">
            {winnerAwards.map((award, idx) => {
              const name = award.split('/').pop()?.replace(/%20/g, ' ').replace(/\.[^/.]+$/, '') || 'Winner Award';
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="flex flex-col items-center justify-center bg-white p-4 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow h-44 cursor-pointer"
                >
                  <img loading="lazy" decoding="async" 
                    src={award} 
                    alt={`${name} - Crown Money Win`} 
                    className="h-28 w-auto object-contain hover:scale-110 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <span className="text-xs text-gray-600 font-bold uppercase mt-2 text-center truncate w-full">
                    Winner
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Industry Finalists List */}
        <div className="space-y-12 pt-8 border-t border-gray-200/50">
          <div className="flex items-center justify-center space-x-3">
            <Award className="text-gray-400" size={24} />
            <h3 className="text-xl font-display font-bold text-gray-500">Industry Recognition</h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-6 items-center justify-center opacity-85">
            {finalistAwards.map((award, idx) => {
              const name = award.split('/').pop()?.replace(/%20/g, ' ').replace(/\.[^/.]+$/, '') || 'Finalist Award';
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="flex flex-col items-center justify-center bg-white p-4 rounded-2xl border border-gray-100 shadow-sm h-44"
                >
                  <img loading="lazy" decoding="async" 
                    src={award} 
                    alt={`${name} - Crown Money Award Finalist`} 
                    className="h-28 w-auto object-contain"
                    referrerPolicy="no-referrer"
                  />
                  <span className="text-xs text-gray-600 font-bold uppercase mt-2 text-center truncate w-full">
                    Finalist
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

