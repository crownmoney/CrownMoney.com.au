import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { STORIES, STORIES_PUBLISHED, getStory } from '../content/stories';
import { NotFound } from './NotFound';

const SITE_URL = 'https://crownmoney.com.au';

export const StoryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const story = slug ? getStory(slug) : undefined;
  if (!story) return <NotFound />;

  const url = `${SITE_URL}/success-stories/${story.slug}`;
  const others = STORIES.filter((s) => s.slug !== story.slug).slice(0, 3);

  return (
    <div className="bg-white">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: story.headline,
            description: story.description,
            url,
            mainEntityOfPage: url,
            datePublished: STORIES_PUBLISHED,
            dateModified: STORIES_PUBLISHED,
            author: { '@id': `${SITE_URL}/#organization` },
            publisher: { '@id': `${SITE_URL}/#organization` },
            articleSection: 'Client success stories',
            inLanguage: 'en-AU',
          })}
        </script>
      </Helmet>

      <section className="bg-primary text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <Link to="/success-stories" className="inline-flex items-center text-sm text-gray-300 hover:text-white mb-6">
            <ArrowLeft size={16} className="mr-2" /> All success stories
          </Link>
          <p className="text-gold font-bold uppercase tracking-widest text-sm mb-3">Client story · {story.name}</p>
          <h1 className="text-3xl md:text-5xl font-display font-bold mb-6 leading-tight">{story.headline}</h1>
          <p className="text-lg md:text-xl text-gray-300">{story.intro}</p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 space-y-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {story.highlights.map((h) => (
              <div key={h.label} className="bg-gray-50 border border-gray-100 rounded-2xl p-6 text-center">
                <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">{h.label}</p>
                <p className="text-2xl font-display font-bold text-primary">{h.value}</p>
              </div>
            ))}
          </div>

          <div className="aspect-video bg-black rounded-3xl overflow-hidden shadow-xl">
            <video
              src={story.video}
              className="w-full h-full object-contain"
              controls
              preload="none"
              playsInline
              aria-label={`Video testimonial: ${story.headline}`}
            />
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-primary mb-6">In their own words</h2>
            <div className="space-y-6">
              {story.quotes.map((q, i) => (
                <blockquote key={i} className="relative pl-10 text-lg text-gray-700 leading-relaxed">
                  <Quote size={24} className="absolute left-0 top-1 text-gold" aria-hidden="true" />
                  {q}
                </blockquote>
              ))}
            </div>
            <p className="mt-6 text-sm text-gray-500">
              Quotes are from {story.name === 'Crown Money client' || story.name === 'Crown Money clients' ? 'the' : `${story.name}'s`}{' '}
              video testimonial, lightly edited for readability.
            </p>
          </div>

          <div className="bg-accent rounded-3xl p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-primary mb-4">How much sooner could you own your home?</h2>
            <p className="text-gray-700 mb-6">
              Every household is different. Run your own numbers, or talk to a Crown Money coach about your situation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/mortgage-reduction-calculator" className="bg-primary text-white px-6 py-3 rounded-full font-bold text-center hover:bg-primary/90">
                Try the mortgage reduction calculator
              </Link>
              <Link to="/contact" className="bg-gold text-primary px-6 py-3 rounded-full font-bold text-center hover:bg-gold-hover">
                Book a free strategy call
              </Link>
            </div>
          </div>

          <p className="text-sm text-gray-500 leading-relaxed">
            Results are specific to this client and depend on their income, expenses, loan and personal circumstances. They are
            not a guarantee of future results. This page is general information only and does not take your objectives, financial
            situation or needs into account. Crown Lending Pty Ltd, Australian Credit Licence 388 279.
          </p>

          <div>
            <h2 className="text-2xl font-display font-bold text-primary mb-6">More client stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {others.map((s) => (
                <Link
                  key={s.slug}
                  to={`/success-stories/${s.slug}`}
                  className="group block bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-shadow"
                >
                  <h3 className="font-display font-bold text-primary mb-2 group-hover:underline">{s.headline}</h3>
                  <p className="text-sm text-gray-600 mb-4">{s.summary}</p>
                  <span className="inline-flex items-center text-sm font-bold text-gold-dark">
                    Read story <ArrowRight size={14} className="ml-1" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
