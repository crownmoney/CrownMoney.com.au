import React from 'react';
import { motion } from 'motion/react';
import { Star, ArrowRight, Quote, TrendingDown, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

export const SuccessStories = () => {
  const stories = [
    {
      name: "Jo & Luke",
      image: "https://storage.googleapis.com/crown_money/Website/About/Testimonials/Jo-and-Luke.png",
      result: "18 Years Saved",
      summary: "Restructured their mortgage and implemented a cashflow strategy that cut their 30-year loan down to just 12 years.",
      outcome: "$240k+ Interest Saved"
    },
    {
      name: "Matthew Anderson",
      image: "https://storage.googleapis.com/crown_money/Website/About/Testimonials/Matthew-Anderson-1.jpg",
      result: "$45k Debt Reduced",
      summary: "In just 12 months, Matthew reduced his principal by $45,000 without changing his lifestyle, thanks to our coaching.",
      outcome: "On track for freedom in 9 years"
    },
    {
      name: "Todd & Sarah",
      image: "https://storage.googleapis.com/crown_money/Website/About/Testimonials/Todd-and-Sarah.png",
      result: "25% Savings Increase",
      summary: "By optimizing their offset accounts and daily spending, Todd and Sarah found an extra $1,200 per month for their mortgage.",
      outcome: "Paid off $120k in 3 years"
    },
    {
      name: "Melanie & Jeffrey",
      image: "https://picsum.photos/seed/melanie/400/400",
      result: "15 Years Saved",
      summary: "A young family who thought they were stuck with a 30-year loan. Now they'll be debt-free before their kids finish high school.",
      outcome: "$180k Interest Saved"
    },
    {
      name: "Natalie",
      image: "https://picsum.photos/seed/natalie/400/400",
      result: "Single Income Success",
      summary: "Natalie proved you don't need two incomes to pay off a home fast. She's attacking her principal with precision.",
      outcome: "Debt-free in 11 years"
    },
    {
      name: "Daniel & Carla",
      image: "https://picsum.photos/seed/daniel/400/400",
      result: "Investment Growth",
      summary: "Used our strategy to pay off their home and then leveraged the equity to start their investment property portfolio.",
      outcome: "Home paid + 1 Investment"
    }
  ];

  return (
    <div className="pt-10">
      {/* Hero */}
      <section className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">Real Australians. Real Results.</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how our clients are transforming their financial lives and achieving mortgage freedom years ahead of schedule.
          </p>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {stories.map((story, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 flex flex-col h-full"
              >
                <div className="relative h-64">
                  <img 
                    src={story.image} 
                    alt={story.name} 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://picsum.photos/seed/${story.name}/600/600`;
                    }}
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 bg-gold text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                    {story.result}
                  </div>
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <h3 className="text-2xl font-display font-bold text-primary mb-4">{story.name}</h3>
                  <p className="text-gray-600 mb-6 flex-grow">{story.summary}</p>
                  <div className="bg-accent/30 p-4 rounded-2xl border border-accent/50">
                    <p className="text-xs text-primary font-bold uppercase tracking-widest mb-1">Outcome</p>
                    <p className="text-lg font-display font-bold text-primary">{story.outcome}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <div className="bg-crown-lavender p-12 rounded-3xl max-w-4xl mx-auto">
              <h2 className="text-3xl font-display font-bold text-primary mb-6">Your story could be next.</h2>
              <p className="text-gray-600 mb-10">Join the hundreds of Australian families who have taken control of their mortgage.</p>
              <Link to="/contact" className="bg-primary text-white px-10 py-5 rounded-full font-bold hover:bg-opacity-90 transition-all shadow-xl inline-block">
                Book Free Strategy Call
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
