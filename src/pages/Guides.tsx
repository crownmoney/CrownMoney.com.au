import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { publishedGuides } from '../content/guides';

export const Guides = () => {
  const guides = publishedGuides();
  return (
    <div className="bg-white">
      <section className="bg-primary text-white py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">Home Loan &amp; Money Guides</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Plain-English guides for Australian homeowners on paying off your mortgage sooner, offset accounts, repayments and
            managing your money.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          {guides.length === 0 ? (
            <p className="text-center text-gray-600">New guides are on the way. In the meantime, try our free calculators.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {guides.map((g) => (
                <Link
                  key={g.slug}
                  to={`/guides/${g.slug}`}
                  className="group flex flex-col bg-gray-50 border border-gray-100 rounded-3xl p-8 hover:shadow-lg transition-shadow"
                >
                  <h2 className="text-2xl font-display font-bold text-primary mb-3 group-hover:underline">{g.headline}</h2>
                  <p className="text-gray-600 flex-grow">{g.description}</p>
                  <span className="mt-4 inline-flex items-center font-bold text-gold-dark">
                    Read the guide <ArrowRight size={16} className="ml-1" />
                  </span>
                </Link>
              ))}
            </div>
          )}
          <div className="text-center mt-12">
            <Link to="/tools" className="inline-block bg-primary text-white px-6 py-3 rounded-full font-bold hover:bg-primary/90">
              Explore our free calculators
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
