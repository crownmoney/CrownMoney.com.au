import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: "Melanie and Jeffrey",
    story: "We’ve been with Crown Money for just over 12 months and it’s been a real game-changer for us. Previously we were on track to pay our mortgage off in another 20 years but now it’s looking like we could get it done in 3!",
    outcome: "17 Years Saved",
    image: "https://storage.googleapis.com/crown_money/Website/About/Testimonials/Melanie%20and%20Jeffrey%20.jpg"
  },
  {
    name: "Natalie",
    story: "When I joined Crown I paid off in my first year as much as I had in the previous 3 years!! I was amazed how the programme made me so disciplined and allowed me to actually enjoy life.",
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
    story: "The programme has taught us to think about what is really important for the family. This allows us to live life without some of the financial stresses that arise when bills pop out of nowhere.",
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

export const Testimonials = () => {
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
                  <img loading="lazy" decoding="async" 
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
                    <h3 className="text-2xl font-display font-bold text-primary mb-2">{testimonials[currentIndex].name}</h3>
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
              aria-label="Previous testimonial"
              className="bg-white p-4 rounded-full text-primary shadow-lg hover:bg-primary hover:text-white transition-all"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={next}
              aria-label="Next testimonial"
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
