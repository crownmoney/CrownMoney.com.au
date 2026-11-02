import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { DEFAULT_OG_IMAGE, PAGES, SITE_NAME, SITE_URL, getPageMeta, normalisePath } from '../seo/pages';

const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;

// One consistent entity description on every page, so search engines and AI
// answer engines can tie all pages (and the social profiles) to the business.
const ORGANIZATION = {
  '@type': ['Organization', 'FinancialService'],
  '@id': ORG_ID,
  name: 'Crown Money',
  legalName: 'Crown Lending Pty Ltd',
  alternateName: 'Crown Money Management',
  url: `${SITE_URL}/`,
  logo: 'https://storage.googleapis.com/crown_money/Logo%20%26%20Icon/header-logo.svg',
  image: DEFAULT_OG_IMAGE,
  description:
    'Australian mortgage reduction and money management specialists helping homeowners pay off their home loans sooner through coaching and smarter account structures.',
  foundingDate: '2004',
  founder: { '@type': 'Person', name: 'Scott Parry', url: `${SITE_URL}/author/scott-parry` },
  telephone: '+61 1300 882 981',
  email: 'admin@crown.money',
  areaServed: { '@type': 'Country', name: 'Australia' },
  identifier: [
    { '@type': 'PropertyValue', name: 'Australian Credit Licence', value: '388279' },
    { '@type': 'PropertyValue', name: 'ACN', value: '119504862' },
  ],
  sameAs: [
    'https://www.facebook.com/CrownMoneyManagement',
    'https://www.instagram.com/crownmoneyofficial/',
    'https://twitter.com/Crown_Money',
    'https://www.linkedin.com/company/crown-money',
    'https://www.youtube.com/@crownmoneyAU',
  ],
};

function pageName(title: string) {
  return title.split(' | ')[0];
}

function structuredData(path: string, title: string, description: string) {
  const url = `${SITE_URL}${path}`;
  const crumbs = [{ name: 'Home', item: `${SITE_URL}/` }];
  const parts = path.split('/').filter(Boolean);
  parts.forEach((_, i) => {
    const p = '/' + parts.slice(0, i + 1).join('/');
    const meta = PAGES[p];
    if (meta) crumbs.push({ name: pageName(meta.title), item: `${SITE_URL}${p}` });
  });
  return {
    '@context': 'https://schema.org',
    '@graph': [
      ORGANIZATION,
      { '@type': 'WebSite', '@id': WEBSITE_ID, url: `${SITE_URL}/`, name: SITE_NAME, publisher: { '@id': ORG_ID }, inLanguage: 'en-AU' },
      {
        '@type': 'WebPage',
        '@id': `${url}#webpage`,
        url,
        name: title,
        description,
        isPartOf: { '@id': WEBSITE_ID },
        about: { '@id': ORG_ID },
        publisher: { '@id': ORG_ID },
        inLanguage: 'en-AU',
        breadcrumb: { '@id': `${url}#breadcrumb` },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${url}#breadcrumb`,
        itemListElement: crumbs.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.name, item: c.item })),
      },
    ],
  };
}

/**
 * Renders title, description, canonical, robots, Open Graph and Twitter tags
 * for the current route from src/seo/pages.ts. Rendered once in Layout —
 * pages must not set their own <title>/<meta>, or the tags will duplicate.
 */
export const SEO: React.FC = () => {
  const { pathname } = useLocation();
  const { meta, found } = getPageMeta(pathname);
  const url = `${SITE_URL}${normalisePath(pathname)}`;

  return (
    <Helmet>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      {meta.noindex ? (
        <meta name="robots" content="noindex, follow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
      )}
      {found && !meta.noindex && <link rel="canonical" href={url} />}

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_AU" />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      {found && <meta property="og:url" content={url} />}
      <meta property="og:image" content={DEFAULT_OG_IMAGE} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={DEFAULT_OG_IMAGE} />

      {found && !meta.noindex && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData(normalisePath(pathname), meta.title, meta.description))}
        </script>
      )}
    </Helmet>
  );
};
