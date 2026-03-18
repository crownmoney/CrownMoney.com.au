import React from 'react';
import { motion } from 'motion/react';

const awards = [
  "https://storage.googleapis.com/crown_money/Awards/2021_Better%20Business%20Awards_SA_Best%20Customer%20Service%20(Individual)_FINALIST.png",
  "https://storage.googleapis.com/crown_money/Awards/2021_Better%20Business%20Awards_SA_Best%20Residential%20Broker_FINALIST.png",
  "https://storage.googleapis.com/crown_money/Awards/2022_ABA_2022-Finalist_Customer%20Service%20of%20the%20Year%20-%20Individual%20(1).png",
  "https://storage.googleapis.com/crown_money/Awards/2022_finalist%20seal_SA_Best%20Customer%20Service%20(Individual).png",
  "https://storage.googleapis.com/crown_money/Awards/2023_finalist%20seal_SA_Best%20Boutique%20Independent%20Office%20.png",
  "https://storage.googleapis.com/crown_money/Awards/2023_finalist%20seal_SA_Best%20Customer%20Service%20(Individual)%20(1).png",
  "https://storage.googleapis.com/crown_money/Awards/2023_finalist%20seal_SA_Best%20Residential%20Broker%20(1).png"
];

export const Awards = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-primary mb-4">Award Winning Service</h2>
        <p className="text-gray-600 mb-16 max-w-2xl mx-auto">
          Our commitment to excellence has been recognized by the industry's most prestigious awards.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center justify-center">
          {awards.map((award, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-center justify-center"
            >
              <img 
                src={award} 
                alt="Award Seal" 
                className="h-32 md:h-40 w-auto object-contain hover:scale-110 transition-transform duration-300"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Decorative background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-accent/5 -skew-y-3 z-0"></div>
    </section>
  );
};
