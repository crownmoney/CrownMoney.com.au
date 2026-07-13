import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  ogType?: string;
  canonicalUrl?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  ogImage = 'https://storage.googleapis.com/crown_money/Website/Images/happy%20couple.png',
  ogUrl,
  ogType = 'website',
  canonicalUrl,
}) => {
  const location = useLocation();
  
  const siteName = 'Crown Money';
  const defaultTitle = 'Crown Money | Pay Off Your Mortgage in half the time | Australia\'s Leading Financial Coaching';
  const defaultDescription = 'Crown Money helps Australian families pay off their home loans in up to half the time using advanced money management strategies. Achieve financial freedom faster with our proven system.';
  const defaultKeywords = 'mortgage reduction Australia, pay off mortgage fast, financial coaching Australia, debt reduction strategy, home loan interest savings, Crown Money Management, Scott Parry, mortgage freedom system, wealth tracking dashboard';

  const finalTitle = title ? (title.includes(siteName) ? title : `${title} | ${siteName}`) : defaultTitle;
  const finalDescription = description || defaultDescription;
  const finalKeywords = keywords || defaultKeywords;
  
  const finalOgTitle = ogTitle || title || 'Crown Money | Australia\'s Leading Mortgage Reduction Specialists';
  const finalOgDescription = ogDescription || description || 'Pay off your mortgage in half the time, not 30 years. Our proven money management system helps Aussie homeowners save hundreds of thousands in interest.';
  
  const currentPath = location.pathname;
  const baseDomain = 'https://crown.money';
  const finalOgUrl = ogUrl || `${baseDomain}${currentPath}`;
  const finalCanonicalUrl = canonicalUrl || `${baseDomain}${currentPath}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{finalTitle}</title>
      <meta name="title" content={finalTitle} />
      <meta name="description" content={finalDescription} />
      {finalKeywords && <meta name="keywords" content={finalKeywords} />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={finalOgUrl} />
      <meta property="og:title" content={finalOgTitle} />
      <meta property="og:description" content={finalOgDescription} />
      {ogImage && <meta property="og:image" content={ogImage} />}
      <meta property="og:site_name" content={siteName} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={finalOgUrl} />
      <meta name="twitter:title" content={finalOgTitle} />
      <meta name="twitter:description" content={finalOgDescription} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}

      {/* Canonical */}
      <link rel="canonical" href={finalCanonicalUrl} />
    </Helmet>
  );
};
