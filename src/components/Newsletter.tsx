import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';
import { getLeadSourceData } from '../utils/urlTracker';

export const Newsletter = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const resources = [
    { title: "20 Minutes Financial Health Check", url: "https://storage.googleapis.com/crown_money/Website/Resources/20%20Minutes%20Financial%20Health%20Check.pdf" },
    { title: "7 Easy Ways to Boost Your Cashflow", url: "https://storage.googleapis.com/crown_money/Website/Resources/Crown-Money-eBook_7-Easy-Ways-to-Boost-Cashflow.pdf" },
    { title: "Top 10 tips for Kids Savings", url: "https://storage.googleapis.com/crown_money/Website/Resources/Top%2010%20Tips%20for%20Kids%20Savings.pdf" },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !firstName) return;
    
    setIsLoading(true);
    try {
      const sourceData = getLeadSourceData();
      const response = await fetch('https://hooks.zapier.com/hooks/catch/24598887/up2fobt/', {
        method: 'POST',
        body: JSON.stringify({ 
          firstName, 
          email,
          ...sourceData
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        // Redirect to PDF after a short delay
        setTimeout(() => {
          window.open('https://storage.googleapis.com/crown_money/Website/Resources/20%20Minutes%20Financial%20Health%20Check.pdf', '_blank');
        }, 1500);
      } else {
        console.error('Newsletter signup failed');
      }
    } catch (error) {
      console.error('Error signing up for newsletter:', error);
    } finally {
      setIsLoading(false);
    }
  };

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
              
              {isSubmitted ? (
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-green-100 flex items-center space-x-4">
                  <div className="bg-green-100 p-2 rounded-full text-green-600">
                    <CheckCircle size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-primary">Thank you for signing up!</p>
                    <p className="text-sm text-gray-600">Your resource is opening in a new tab.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <input 
                      type="text" 
                      placeholder="First Name" 
                      className="flex-grow px-6 py-4 rounded-full border-2 border-primary/5 focus:border-primary outline-none transition-all"
                      required
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      disabled={isLoading}
                    />
                    <input 
                      type="email" 
                      placeholder="Enter your email" 
                      className="flex-grow px-6 py-4 rounded-full border-2 border-primary/5 focus:border-primary outline-none transition-all"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={isLoading}
                    />
                  </div>
                  <button 
                    type="submit"
                    disabled={isLoading}
                    className="bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-opacity-90 transition-all shadow-lg disabled:opacity-50 w-full sm:w-auto self-start"
                  >
                    {isLoading ? 'Signing Up...' : 'Sign Up Now'}
                  </button>
                </form>
              )}
            </div>
            <div className="hidden lg:block">
              <img 
                src="https://storage.googleapis.com/crown_money/Website/Images/Newsletter_Crown.png" 
                alt="Crown Money Financial Resources Newsletter - Get expert debt reduction and mortgage strategy tips" 
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
