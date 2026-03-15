import React from 'react';
import { CheckCircle } from 'lucide-react';

export const Newsletter = () => {
  const resources = [
    { title: "20 Minutes Financial Health Check", url: "https://storage.googleapis.com/crown_money/Website/Resources/20%20Minutes%20Financial%20Health%20Check.pdf" },
    { title: "7 Easy Ways to Boost Your Cashflow", url: "https://storage.googleapis.com/crown_money/Website/Resources/Crown-Money-eBook_7-Easy-Ways-to-Boost-Cashflow.pdf" },
    { title: "Top 10 tips for Kids Savings", url: "https://storage.googleapis.com/crown_money/Website/Resources/Top%2010%20Tips%20for%20Kids%20Savings.pdf" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-crown-lavender rounded-[3rem] p-8 md:p-16 overflow-hidden relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">
                Get Expert Financial Resources <span className="text-gold">Delivered To Your Inbox</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Sign up for our newsletter to access these exclusive resources and stay updated with the latest financial strategies.
              </p>
              <div className="space-y-4 mb-8">
                {resources.map((res, idx) => (
                  <a 
                    key={idx} 
                    href={res.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-primary font-medium hover:text-gold transition-colors"
                  >
                    <CheckCircle size={20} className="text-gold" />
                    <span>{res.title}</span>
                  </a>
                ))}
              </div>
              <form className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-grow px-6 py-4 rounded-full border-2 border-primary/5 focus:border-primary outline-none transition-all"
                  required
                />
                <button className="bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-opacity-90 transition-all shadow-lg">
                  Sign Up Now
                </button>
              </form>
            </div>
            <div className="hidden lg:block">
              <img 
                src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&q=80&w=800" 
                alt="Financial Planning" 
                className="rounded-3xl shadow-2xl rotate-3"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          {/* Decorative elements */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-gold/10 rounded-full"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary/5 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};
