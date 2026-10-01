import React from 'react';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { MortgageCalculator } from '../components/MortgageCalculator';
import { ShieldCheck, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const CalculatorLanding = () => {
  return (
    <div className="pt-20">
      <Helmet>
        <title>Mortgage Reduction Calculator | Pay Off Your Home Faster | Crown Money</title>
        <meta name="description" content="Use our advanced mortgage reduction calculator to see how much interest you can save and how many years you can shave off your home loan with Crown Money's Home Ownership Programme." />
        <meta name="keywords" content="mortgage reduction calculator, pay off home loan faster, mortgage savings calculator, interest reduction calculator, Crown Money HOP, home ownership programme australia" />
        <link rel="canonical" href="https://crownmoney.com.au/mortgage-reduction-calculator" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Mortgage Reduction Calculator",
            "description": "Advanced financial tool to calculate interest savings and loan term reduction for Australian homeowners.",
            "applicationCategory": "FinanceApplication",
            "operatingSystem": "All",
            "author": {
              "@type": "Organization",
              "name": "Crown Money",
              "url": "https://crownmoney.com.au"
            }
          })}
        </script>
      </Helmet>
      {/* Hero Section */}
      <section className="bg-primary text-white py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Mortgage Reduction Calculator: See How Much You Can Save
            </h1>
            <p className="text-xl text-gray-300 mb-10">
              Our advanced mortgage reduction calculator doesn't just show you interest; it shows you the path to total home ownership in half the time.
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full border border-white/20">
                <ShieldCheck size={18} className="text-gold" />
                <span className="text-sm font-bold">12-Month Guarantee</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full border border-white/20">
                <TrendingUp size={18} className="text-gold" />
                <span className="text-sm font-bold">Free Strategy Session</span>
              </div>
            </div>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full -translate-x-1/2 translate-y-1/2 blur-2xl"></div>
      </section>

      {/* Calculator Section */}
      <section className="py-24 bg-white" id="calculator">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-8">
                Calculate Your Potential Savings
              </h2>
              <div className="prose prose-lg text-gray-600 mb-10">
                <p>
                  Most Australians are stuck in a 30-year mortgage cycle that costs them hundreds of thousands in unnecessary interest. Our calculator helps you visualise a different reality.
                </p>
                <h3 className="text-xl font-bold text-primary mt-8 mb-4">How to use this calculator:</h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="text-gold mt-1 flex-shrink-0" size={20} />
                    <span>Enter your current home loan balance and interest rate.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="text-gold mt-1 flex-shrink-0" size={20} />
                    <span>Input your monthly repayment amount.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="text-gold mt-1 flex-shrink-0" size={20} />
                    <span>See the "Crown Money Effect"—how much time and money you could save with our Home Ownership Programme (HOP).</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-crown-lavender p-8 rounded-3xl border border-primary/5">
                <h3 className="text-xl font-bold text-primary mb-4">Why is this different?</h3>
                <p className="text-gray-700 mb-6">
                  Standard bank calculators only show you the minimum. We show you the maximum potential of your income when managed by financial personal trainers.
                </p>
                <Link 
                  to="/contact"
                  className="inline-flex items-center space-x-2 text-primary font-bold hover:text-gold transition-colors"
                >
                  <span>Learn about our 12-Month Guarantee</span>
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            <div className="bg-white p-8 rounded-[2.5rem] shadow-2xl border border-gray-100">
              <MortgageCalculator />
              <div className="mt-8 text-center">
                <p className="text-sm text-gray-500 mb-6">
                  Results are indicative. For a precise projection based on your unique situation, book a session.
                </p>
                <Link 
                  to="/contact"
                  className="inline-block bg-gold text-primary px-8 py-4 rounded-full font-bold hover:bg-opacity-90 transition-all shadow-lg"
                >
                  Book Your Free Strategy Session
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section (GEO) */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-12 text-center">
            Frequently Asked Questions About Mortgage Reduction
          </h2>
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-primary mb-4">How can I pay off my mortgage in half the time?</h3>
              <p className="text-gray-600 leading-relaxed">
                Paying off a mortgage in half the time instead of 30 requires a combination of a competitive interest rate and a structured cash-flow management system. Crown Money Management uses a "cash-diet" system and our proprietary Home Ownership Programme (HOP) to help clients allocate more of their existing income toward the principal without sacrificing their lifestyle.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-primary mb-4">What is the "Crown Money Effect"?</h3>
              <p className="text-gray-600 leading-relaxed">
                The "Crown Money Effect" refers to the significant reduction in loan term and interest paid when a homeowner switches from a standard bank-managed loan to a Crown Money managed strategy. On average, our clients pay off their homes in half the time and save over $300,000 in interest.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-primary mb-4">Do I need a higher income to pay off my loan faster?</h3>
              <p className="text-gray-600 leading-relaxed">
                No. Most of our clients achieve these results using their current income. The secret lies in efficiency and management, not just earning more. We act as your financial personal trainers to ensure every dollar is working for you.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
