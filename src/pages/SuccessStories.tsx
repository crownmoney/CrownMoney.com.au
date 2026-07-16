import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Star, ArrowRight, Quote, TrendingDown, Calendar, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export const SuccessStories = () => {
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    // Dynamically inject the Elfsight script for Google Reviews
    const existingScript = document.querySelector('script[src="https://elfsightcdn.com/platform.js"]');
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://elfsightcdn.com/platform.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

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

  const videos = [
    {
      title: "$320,000 Saved in 4 Years",
      url: "https://storage.googleapis.com/crown_money/Video%20Testimonials/320%2C000_in_4_years_(k)_v1%20(720p).mp4",
      description: "A remarkable story of accelerated debt reduction and total financial control."
    },
    {
      title: "Chris",
      url: "https://storage.googleapis.com/crown_money/Video%20Testimonials/chris_battistuzzi_(k)_v1%20(720p).mp4",
      description: "How targeted strategy and structures helped Chris gain momentum over his home loan."
    },
    {
      title: "Dominic & Elisabeth",
      url: "https://storage.googleapis.com/crown_money/Video%20Testimonials/dominic_%26_elisabeth_lobosso_v1%20(720p).mp4",
      description: "Working with Craig and team to optimize their loan and pay it down years sooner."
    },
    {
      title: "Ella",
      url: "https://storage.googleapis.com/crown_money/Video%20Testimonials/ella_(ok)_v1%20(720p).mp4",
      description: "How discipline, clear goals, and support allowed Ella to enjoy life debt-free."
    },
    {
      title: "Graham",
      url: "https://storage.googleapis.com/crown_money/Video%20Testimonials/gram_(k)_v1%20(720p).mp4",
      description: "Finding absolute confidence through a structure built entirely for the customer."
    },
    {
      title: "Linda - Debt Free",
      url: "https://storage.googleapis.com/crown_money/Video%20Testimonials/linda_taylor_-_debt_free_(k)_v1%20(720p)_vocals_only.mp4",
      description: "A powerful and inspiring testimonial on mortgage reduction success."
    },
    {
      title: "Marcus & Taryn",
      url: "https://storage.googleapis.com/crown_money/Video%20Testimonials/marcus_%26_taryn_burdett_(k)_v1%20(720p).mp4",
      description: "How custom coaching helped this family accelerate their wealth-building timeline."
    },
    {
      title: "Accelerated Savings Success",
      url: "https://storage.googleapis.com/crown_money/Video%20Testimonials/mccolley_testimonial_(k)_v1%20(720p)_vocals_only.mp4",
      description: "Client success story focusing on home loan optimization and coaching support."
    },
    {
      title: "Mortgage-Free Success",
      url: "https://storage.googleapis.com/crown_money/Video%20Testimonials/monaghan_-_debt_free_(k)_v1%20(720p)_vocals_only.mp4",
      description: "Becoming mortgage-free and creating robust generational wealth."
    },
    {
      title: "Peter & Karina",
      url: "https://storage.googleapis.com/crown_money/Video%20Testimonials/peter_kerak_%26_karina_kerakova_v1%20(720p).mp4",
      description: "A transparent and reliable approach that worked perfectly for their lifestyle."
    },
    {
      title: "Ryan",
      url: "https://storage.googleapis.com/crown_money/Video%20Testimonials/ryan_hillman_(k)_v1%20(720p).mp4",
      description: "Unlocking extraordinary savings and taking charge of their path."
    },
    {
      title: "Sheena",
      url: "https://storage.googleapis.com/crown_money/Video%20Testimonials/sheena_(k)_v1%20(720p).mp4",
      description: "Developing incredible budget structure and confidence under guidance."
    },
    {
      title: "Stephen & Lynda",
      url: "https://storage.googleapis.com/crown_money/Video%20Testimonials/stephen_%26_lynda_milde_(k)_v1%20(720p).mp4",
      description: "How a custom debt reduction plan saved thousands in interest."
    },
    {
      title: "Steve",
      url: "https://storage.googleapis.com/crown_money/Video%20Testimonials/steve_(k)_v1%20(720p).mp4",
      description: "Refining financial strategy and achieving total debt reduction success."
    },
    {
      title: "Accelerated Freedom Story #3",
      url: "https://storage.googleapis.com/crown_money/Video%20Testimonials/copy_of_3_(k)_v1%20(720p).mp4",
      description: "Witnessing real, rapid home loan savings and total peace of mind."
    },
    {
      title: "Accelerated Freedom Story #5",
      url: "https://storage.googleapis.com/crown_money/Video%20Testimonials/copy_of_5_(ok)_v1%20(720p).mp4",
      description: "Proven results showing exactly how our system works to defeat interest."
    },
    {
      title: "Accelerated Freedom Story #7",
      url: "https://storage.googleapis.com/crown_money/Video%20Testimonials/copy_of_7_(k)_v1%20(720p).mp4",
      description: "How changing the mortgage structure beats the traditional banking model."
    },
    {
      title: "Our Financial System in Action",
      url: "https://storage.googleapis.com/crown_money/Video%20Testimonials/om_testimonial_01_(k)_v1%20(720p)_vocals_only.mp4",
      description: "A detailed look at client experiences and real financial achievements."
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

  const visibleVideos = videos.slice(0, visibleCount);
  const hasMore = visibleCount < videos.length;

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

      {/* Google Reviews Section */}
      <section className="py-20 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-xs text-primary font-bold uppercase tracking-widest bg-crown-lavender px-3 py-1.5 rounded-full">
              Google Reviews
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mt-4 mb-4">
              What Our Clients Say On Google
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're incredibly proud of our 5-star reputation. Read direct client feedback on our services and strategies.
            </p>
          </div>
          <div className="bg-white p-6 md:p-8 rounded-3xl shadow-xl border border-gray-100">
            {/* Elfsight Google Reviews Widget */}
            <div className="elfsight-app-c912648e-ee80-4fa9-aad8-dd9c4c6145fa" data-elfsight-app-lazy></div>
          </div>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-xs text-primary font-bold uppercase tracking-widest bg-crown-lavender px-3 py-1.5 rounded-full">
              Case Studies
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mt-4 mb-4">
              Featured Client Case Studies
            </h2>
          </div>
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
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="py-24 bg-gray-50/50 border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-xs text-primary font-bold uppercase tracking-widest bg-crown-lavender px-3 py-1.5 rounded-full">
              Video Stories
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mt-4 mb-4">
              Watch Success Testimonials
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear directly from real Australians who have accelerated their timeline and achieved complete financial freedom.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleVideos.map((video, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (idx % 3) * 0.1 }}
                className="bg-white rounded-3xl shadow-md border border-gray-100 overflow-hidden flex flex-col h-full group"
              >
                {/* Video Player */}
                <div className="relative aspect-video bg-black overflow-hidden flex items-center justify-center">
                  <video
                    src={video.url}
                    className="w-full h-full object-contain"
                    controls
                    preload="metadata"
                    playsInline
                  />
                </div>
                {/* Text Context */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-primary font-display mb-2 group-hover:text-gold transition-colors duration-200">
                      {video.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {video.description}
                    </p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-xs text-gray-400 font-mono">
                      Crown Success Video
                    </span>
                    <span className="text-xs text-gold font-bold flex items-center gap-1">
                      <Star size={12} className="fill-current" /> Verified Result
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {hasMore && (
            <div className="mt-16 text-center">
              <button
                onClick={() => setVisibleCount(prev => prev + 6)}
                className="inline-flex items-center gap-2 border-2 border-primary text-primary px-8 py-4 rounded-full font-bold hover:bg-primary hover:text-white transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer"
              >
                Load More Video Testimonials
                <ChevronDown size={18} />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
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
