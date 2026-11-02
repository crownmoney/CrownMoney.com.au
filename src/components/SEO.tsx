import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL, getPageMeta, normalisePath } from '../seo/pages';

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
    </Helmet>
  );
};
