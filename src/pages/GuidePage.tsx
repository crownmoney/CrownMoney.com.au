import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, ArrowRight, Info } from 'lucide-react';
import { GuideBlock, getGuide, publishedGuides } from '../content/guides';
import { NotFound } from './NotFound';

const SITE_URL = 'https://crownmoney.com.au';

const formatDate = (iso: string) =>
  new Date(`${iso}T00:00:00`).toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' });

function Block({ block }: { block: GuideBlock }) {
  switch (block.type) {
    case 'h2':
      return <h2 className="text-2xl md:text-3xl font-display font-bold text-primary mt-12 mb-4">{block.text}</h2>;
    case 'h3':
      return <h3 className="text-xl font-display font-bold text-primary mt-8 mb-3">{block.text}</h3>;
    case 'p':
      return <p className="text-lg text-gray-700 leading-relaxed mb-5">{block.text}</p>;
    case 'ul':
      return (
        <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700 mb-5">
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    case 'table':
      return (
        <div className="overflow-x-auto my-6 rounded-2xl border border-gray-200">
          <table className="w-full text-left text-sm md:text-base">
            {block.caption && <caption className="text-left p-4 font-bold text-primary bg-gray-50">{block.caption}</caption>}
            <thead className="bg-primary text-white">
              <tr>
                {block.head.map((h, i) => (
                  <th key={i} scope="col" className="p-3 md:p-4 font-bold">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, r) => (
                <tr key={r} className={r % 2 ? 'bg-gray-50' : 'bg-white'}>
                  {row.map((cell, c) => (
                    <td key={c} className={`p-3 md:p-4 text-gray-700 ${c === 0 ? 'font-bold text-primary' : ''}`}>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case 'callout':
      return (
        <p className="flex gap-3 bg-accent rounded-2xl p-4 text-sm text-gray-700 my-6">
          <Info size={18} className="text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
          {block.text}
        </p>
      );
    case 'links':
      return (
        <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 my-10">
          <h2 className="text-xl font-display font-bold text-primary mb-4">{block.title}</h2>
          <ul className="space-y-2">
            {block.items.map((l) => (
              <li key={l.href}>
                <Link to={l.href} className="inline-flex items-center font-bold text-gold-dark hover:underline">
                  {l.label} <ArrowRight size={14} className="ml-1" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      );
  }
}

export const GuidePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const guide = slug ? getGuide(slug) : undefined;
  if (!guide) return <NotFound />;

  const url = `${SITE_URL}/guides/${guide.slug}`;
  const related = publishedGuides().filter((g) => g.slug !== guide.slug).slice(0, 3);

  return (
    <div className="bg-white">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'Article',
                headline: guide.headline,
                description: guide.description,
                url,
                mainEntityOfPage: url,
                dateModified: guide.updated,
                author: { '@type': 'Organization', name: guide.author, url: `${SITE_URL}/about` },
                ...(guide.reviewedBy ? { reviewedBy: { '@type': 'Person', name: guide.reviewedBy } } : {}),
                publisher: { '@id': `${SITE_URL}/#organization` },
                inLanguage: 'en-AU',
              },
              {
                '@type': 'FAQPage',
                mainEntity: guide.faqs.map((f) => ({
                  '@type': 'Question',
                  name: f.q,
                  acceptedAnswer: { '@type': 'Answer', text: f.a },
                })),
              },
            ],
          })}
        </script>
      </Helmet>

      <section className="bg-primary text-white py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4">
          <Link to="/guides" className="inline-flex items-center text-sm text-gray-300 hover:text-white mb-6">
            <ArrowLeft size={16} className="mr-2" /> All guides
          </Link>
          <h1 className="text-3xl md:text-5xl font-display font-bold mb-6 leading-tight">{guide.headline}</h1>
          <p className="text-sm text-gray-300">
            By {guide.author}
            {guide.reviewedBy ? ` · Reviewed by ${guide.reviewedBy}` : ''} · Updated {formatDate(guide.updated)}
          </p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-12 md:py-16">
        <div className="border-l-4 border-gold pl-6 mb-10">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">The short answer</p>
          <p className="text-xl text-primary font-medium leading-relaxed">{guide.summary}</p>
        </div>

        {guide.blocks.map((block, i) => (
          <Block key={i} block={block} />
        ))}

        <h2 className="text-2xl md:text-3xl font-display font-bold text-primary mt-12 mb-6">Frequently asked questions</h2>
        <div className="space-y-6">
          {guide.faqs.map((f) => (
            <div key={f.q}>
              <h3 className="text-lg font-bold text-primary mb-2">{f.q}</h3>
              <p className="text-gray-700 leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>

        <div className="bg-accent rounded-3xl p-8 md:p-10 mt-12">
          <h2 className="text-2xl font-display font-bold text-primary mb-4">Want a plan for your own loan?</h2>
          <p className="text-gray-700 mb-6">A Crown Money coach can show you how much sooner you could own your home.</p>
          <Link to="/contact" className="inline-block bg-gold text-primary px-6 py-3 rounded-full font-bold hover:bg-gold-hover">
            Book a free strategy call
          </Link>
        </div>

        <p className="text-sm text-gray-500 leading-relaxed mt-10">
          This guide is general information only and does not take your objectives, financial situation or needs into account.
          Consider whether it is appropriate for you and seek personal financial, credit or tax advice before acting. Crown
          Lending Pty Ltd, Australian Credit Licence 388 279.
        </p>

        {related.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-display font-bold text-primary mb-6">More guides</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((g) => (
                <Link key={g.slug} to={`/guides/${g.slug}`} className="block bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:shadow-md">
                  <h3 className="font-display font-bold text-primary">{g.headline}</h3>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
    </div>
  );
};
