import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote, Play, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Testimonials = () => {
  const reviews = [
    {
      name: "Sarah & David",
      location: "Brisbane, QLD",
      text: "We were sceptical at first, but after 6 months we've already saved $15,000 in interest. The coaching is incredible.",
      rating: 5
    },
    {
      name: "Michael T.",
      location: "Sydney, NSW",
      text: "The wealth tracking dashboard is a game changer. I can see my net worth growing every single month.",
      rating: 5
    },
    {
      name: "Emma L.",
      location: "Melbourne, VIC",
      text: "I wish I had found Crown Money 10 years ago. I'd be debt-free by now! Better late than never.",
      rating: 5
    },
    {
      name: "Robert & Jane",
      location: "Perth, WA",
      text: "Professional, knowledgeable, and genuinely care about our success. Highly recommend to any homeowner.",
      rating: 5
    }
  ];

  return (
    <div className="pt-10">
      {/* Hero */}
      <section className="bg-crown-lavender py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-primary mb-6">What Our Clients Say</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Hear from the hundreds of Australians who have achieved financial freedom with Crown Money.
          </p>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold text-primary mb-4">Video Success Stories</h2>
            <p className="text-gray-600">Real people sharing their real results.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <iframe 
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/W0MskR1vqJs" 
                  title="Client Testimonial 1" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
              <h3 className="text-xl font-bold text-primary">Jo & Luke's Journey to Freedom</h3>
            </div>
            <div className="space-y-6">
              <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <iframe 
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/wK5j7XV17UQ" 
                  title="Client Testimonial 2" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
              <h3 className="text-xl font-bold text-primary">How Matthew Saved $45k in 1 Year</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Written Reviews */}
      <section className="py-24 bg-crown-lavender">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {reviews.map((review, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl shadow-lg border border-gray-50">
                <div className="flex text-gold mb-4">
                  {[...Array(review.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <Quote className="text-accent mb-4" size={24} />
                <p className="text-gray-600 italic mb-6">"{review.text}"</p>
                <div>
                  <p className="font-bold text-primary">{review.name}</p>
                  <p className="text-xs text-gray-500">{review.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-display font-bold text-primary mb-12 uppercase tracking-widest">Trusted By Australians Nationwide</h2>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all">
            <div className="text-2xl font-bold">FINANCE AWARDS</div>
            <div className="text-2xl font-bold">BROKER OF THE YEAR</div>
            <div className="text-2xl font-bold">GOOGLE REVIEWS 4.9/5</div>
            <div className="text-2xl font-bold">ASIC REGULATED</div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-primary text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Start Your Financial Freedom Plan</h2>
          <p className="text-gray-300 mb-10">Join our community of debt-free homeowners today.</p>
          <Link to="/contact" className="bg-gold text-white px-10 py-5 rounded-full font-bold hover:bg-gold-hover transition-all shadow-xl inline-block">
            Book Free Strategy Call
          </Link>
        </div>
      </section>
    </div>
  );
};
