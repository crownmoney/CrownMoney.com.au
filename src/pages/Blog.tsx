import React from 'react';
import { motion } from 'motion/react';
import { Calendar, User, ArrowRight, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Blog = () => {
  const posts = [
    {
      title: "How to Pay Off Your 30-Year Mortgage in 15 Years",
      category: "Mortgage Strategy",
      date: "March 10, 2024",
      author: "Scott Parry",
      image: "https://picsum.photos/seed/blog1/800/500"
    },
    {
      title: "The Truth About Interest Rates and Your Savings",
      category: "Finance News",
      date: "March 3, 2024",
      author: "Craig Parry",
      image: "https://picsum.photos/seed/blog2/800/500"
    },
    {
      title: "5 Cashflow Habits of Debt-Free Homeowners",
      category: "Money Management",
      date: "February 25, 2024",
      author: "Sarah Jenkins",
      image: "https://picsum.photos/seed/blog3/800/500"
    },
    {
      title: "Why Your Bank Doesn't Want You to Pay Off Your Loan Fast",
      category: "Industry Secrets",
      date: "February 18, 2024",
      author: "Scott Parry",
      image: "https://picsum.photos/seed/blog4/800/500"
    }
  ];

  return (
    <div className="pt-10">
      {/* Hero */}
      <section className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">Financial Insights & News</h1>
            <p className="text-xl text-gray-300">
              Expert advice, industry updates, and practical strategies to help you achieve mortgage freedom.
            </p>
          </div>
        </div>
      </section>

      {/* Search & Categories */}
      <section className="py-8 bg-crown-lavender border-b border-primary/5">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-wrap justify-center gap-4">
            {['All', 'Mortgage Strategy', 'Money Management', 'Finance News', 'Success Stories'].map((cat) => (
              <button key={cat} className="px-6 py-2 rounded-full bg-white text-sm font-bold text-gray-600 hover:bg-primary hover:text-white transition-all shadow-sm">
                {cat}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-64">
            <input 
              type="text" 
              placeholder="Search articles..." 
              className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-200 outline-none focus:border-primary"
            />
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {posts.map((post, idx) => (
              <motion.article 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="relative h-80 rounded-3xl overflow-hidden mb-6 shadow-xl">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-6 left-6 bg-gold text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                    {post.category}
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-6 text-xs font-bold text-gray-400 uppercase tracking-widest">
                    <span className="flex items-center"><Calendar size={14} className="mr-2 text-gold" /> {post.date}</span>
                    <span className="flex items-center"><User size={14} className="mr-2 text-gold" /> {post.author}</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-primary group-hover:text-gold transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    Discover the proven strategies used by hundreds of Australian families to eliminate their mortgage debt years ahead of schedule...
                  </p>
                  <div className="pt-4">
                    <span className="inline-flex items-center text-primary font-bold hover:text-gold transition-colors">
                      Read Article <ArrowRight size={18} className="ml-2" />
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-20 flex justify-center space-x-2">
            <button className="w-10 h-10 rounded-full bg-primary text-white font-bold">1</button>
            <button className="w-10 h-10 rounded-full bg-white text-gray-600 font-bold border border-gray-200 hover:bg-gray-50">2</button>
            <button className="w-10 h-10 rounded-full bg-white text-gray-600 font-bold border border-gray-200 hover:bg-gray-50">3</button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-crown-lavender text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-display font-bold text-primary mb-6">Want personalized advice?</h2>
          <p className="text-gray-600 mb-10">Our blog is great for education, but a strategy call is where the real transformation happens.</p>
          <Link to="/contact" className="bg-primary text-white px-10 py-5 rounded-full font-bold hover:bg-opacity-90 transition-all shadow-xl inline-block">
            Book Free Strategy Call
          </Link>
        </div>
      </section>
    </div>
  );
};
