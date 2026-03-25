import React from 'react';
import { motion } from 'motion/react';
import { Star, ArrowRight, Quote, TrendingDown, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export const SuccessStories = () => {
  const stories = [
    {
      name: "Melanie and Jeffrey",
      image: "https://storage.googleapis.com/crown_money/Website/About/Testimonials/Melanie%20and%20Jeffrey%20.jpg",
      result: "17 Years Saved",
      summary: "We’ve been with Crown Money for just over 12 months and it’s been a real game-changer for us. Previously we were on track to pay our mortgage off in another 20 years but now it’s looking like we could get it done in 3!",
      outcome: "Investment Property Purchased"
    },
    {
      name: "Natalie",
      image: "https://storage.googleapis.com/crown_money/Website/About/Testimonials/Natalie.png",
      result: "3x Faster Payoff",
      summary: "When I joined Crown I paid off in my first year as much as I had in the previous 3 years!! I was amazed how the program made me so disciplined and allowed me to actually enjoy life.",
      outcome: "Debt-free in next few years"
    },
    {
      name: "Jemima and Brad",
      image: "https://storage.googleapis.com/crown_money/Website/About/Testimonials/Jemima-and-Brad.png",
      result: "Debt Free at 36",
      summary: "Brad has been with Crown for 17 years. Scott's guidance and advice has helped us progress to an amazing financial position where we are getting close to paying off our house mortgage.",
      outcome: "Total Financial Freedom"
    },
    {
      name: "Daniel and Carla",
      image: "https://storage.googleapis.com/crown_money/Website/About/Testimonials/Daniel-and-Carla.png",
      result: "10 Years Saved",
      summary: "Daniel and Carla are on track to save themselves 10 years of loan repayments, with a whopping 28% savings rate. The program has taught us to think about what is really important for the family.",
      outcome: "28% Savings Rate"
    },
    {
      name: "Michael",
      image: "https://storage.googleapis.com/crown_money/Website/About/Testimonials/Michael.png",
      result: "Debt-free in 8 Years",
      summary: "The process is so simple and has given me far more discipline and accountability for my expenses which on a single income is a necessity. Results have surpassed any of my wildest expectations.",
      outcome: "On track for 8-year payoff"
    },
    {
      name: "Giovanni and Sarah",
      image: "https://storage.googleapis.com/crown_money/Website/About/Testimonials/Giovanni-and-Sarah.png",
      result: "12 Years Saved",
      summary: "After making a massive dent in our home loan this past year, we are now planning our first family overseas holiday all thanks to Crown Money. We highly recommend Craig and the team.",
      outcome: "12 Years Cut Off Loan"
    }
  ];

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": stories.map((story, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "item": {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": story.name
        },
        "reviewBody": story.summary,
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "itemReviewed": {
          "@type": "Organization",
          "name": "Crown Money"
        }
      }
    }))
  };

  return (
    <div className="pt-10">
      <Helmet>
        <title>Success Stories | Real Mortgage Reduction Results | Crown Money</title>
        <meta name="description" content="Read real success stories from Crown Money clients who have saved years and hundreds of thousands of dollars on their mortgages. See how Australian families achieve financial freedom." />
        <meta name="keywords" content="mortgage success stories, debt reduction results, client testimonials Crown Money, financial freedom Australia, mortgage reduction case studies" />
        <link rel="canonical" href="https://crown.money/success-stories" />
        <script type="application/ld+json">
          {JSON.stringify(reviewSchema)}
        </script>
      </Helmet>
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
