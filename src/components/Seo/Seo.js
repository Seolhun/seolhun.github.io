import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import config from '../../../content/meta/config';

const Seo = ({ data, facebook }) => {
  const { author, cover, description, tags, title } =
    (data || {}).frontmatter || {};
  const { slug } = (data || {}).fields || {};

  // MetaTags
  const metaTags = tags && tags.length ? tags.join(',') : config.shortSiteTitle;
  const metaAuthors = author ? author : config.authorName;
  const metaTitle = title
    ? `${title} - ${config.shortSiteTitle}`
    : config.siteTitle;
  const metaDescription = description ? description : config.siteDescription;
  const metaImage = cover ? cover.childImageSharp.resize.src : config.siteImage;
  const metaUrl = config.siteUrl + config.pathPrefix + slug;

  return (
    <Helmet
      htmlAttributes={{
        lang: config.siteLanguage,
        prefix: 'og: http://ogp.me/ns#',
      }}
    >
      {/* General tags */}
      <title>{metaTitle}</title>
      <meta name="title" content={metaTitle} />
      <meta name="description" content={metaDescription} />
      <meta name="author" content={metaAuthors} />
      <meta name="keywords" content={metaTags} />
      {/* OpenGraph tags */}
      <meta property="fb:app_id" content={facebook.appId} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:site_name" content={metaTitle} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={metaUrl} />
      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image:src" content={metaImage} />
      <meta
        name="twitter:creator"
        content={config.authorTwitterAccount ? config.authorTwitterAccount : ''}
      />
    </Helmet>
  );
};

Seo.propTypes = {
  data: PropTypes.object,
  facebook: PropTypes.object.isRequired,
};

export default Seo;
