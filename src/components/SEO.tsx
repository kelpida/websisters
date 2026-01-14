import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: string;
  twitterHandle?: string;
  author?: string;
  keywords?: string;
}

const SEO = ({
  title,
  description,
  image = '/og-image.png',
  url = 'https://websisters.cy',
  type = 'website',
  twitterHandle = '@WebSistersCY',
  author = 'WebSisters Cyprus',
  keywords = 'web development Cyprus, website design, digital solutions',
}: SEOProps) => {
  const fullTitle = `${title} | WebSisters Cyprus`;
  const canonicalUrl = url.includes('websisters.cy') ? url : `https://websisters.cy${url}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />

      {/* Open Graph / Facebook */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="WebSisters Cyprus" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="en-US" />
      <meta name="revisit-after" content="7 days" />
    </Helmet>
  );
};

export default SEO;
