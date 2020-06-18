/* eslint-disable react/require-default-props */
import React from 'react';
import { Helmet } from 'react-helmet';

import Post from '@/models/Post';

import siteMetadata from '../../../siteMetadata';

interface SEO {
  isPostSEO: boolean;
  postPath?: string;
  postNode?: Post;
}

const SEO = ({ isPostSEO, postPath = '', postNode }: SEO) => {
  const postMeta = postNode ? postNode.frontmatter : null;
  const title = postMeta && postMeta.title ? postMeta.title : siteMetadata.siteTitle;
  const description = postNode && postNode.excerpt
    ? postNode.excerpt : siteMetadata.siteDescription;
  const realPrefix = siteMetadata.pathPrefix === '/' ? '' : siteMetadata.pathPrefix;
  const postURL = `${siteMetadata.siteUrl}${realPrefix}contents/${postPath}`;
  const blogURL = siteMetadata.siteUrl + siteMetadata.pathPrefix;
  const image = siteMetadata.siteUrl + realPrefix + siteMetadata.siteBanner;

  const DEFAULT_SCHEMA_JSOND = [
    {
      name: title,
      alternateName: siteMetadata.siteTitleAlt ? siteMetadata.siteTitleAlt : '',
      headline: title,
      image: {
        '@type': 'ImageObject',
        url: image,
      },
      description: siteMetadata.siteDescription,
      datePublished: postNode ? postNode.frontmatter.date : '',
      dateModified: postNode ? postNode.frontmatter.date : '',
      author: {
        '@type': 'Person',
        name: siteMetadata.author,
      },
      publisher: {
        '@type': 'Organization',
        name: siteMetadata.author,
        logo: {
          '@type': 'ImageObject',
          url: `${siteMetadata.siteUrl}${siteMetadata.siteLogo}`,
        },
      },
      isPartOf: blogURL,
      mainEntityOfPage: {
        '@type': 'WebSite',
        '@id': blogURL,
      },
    },
  ];

  let schemaOrgJSONLD = [
    {
      ...DEFAULT_SCHEMA_JSOND,
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      '@id': blogURL,
      url: blogURL,
    },
  ];

  if (isPostSEO) {
    schemaOrgJSONLD = [
      {
        ...DEFAULT_SCHEMA_JSOND,
        '@context': 'http://schema.org',
        '@type': 'BlogPosting',
        '@id': postURL,
        url: postURL,
      },
    ];
  }
  return (
    <Helmet>
      <html lang={siteMetadata.siteLanguage} />
      <title>{siteMetadata.siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="image" content={image} />
      <script type="application/ld+json">{JSON.stringify(schemaOrgJSONLD)}</script>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={isPostSEO ? 'article' : 'website'} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content={siteMetadata.ogLanguage} />
      <meta property="og:site_name" content={siteMetadata.ogSiteName} />
      <meta property="og:url" content={isPostSEO ? postURL : blogURL} />
      <meta property="fb:app_id" content={siteMetadata.SITE_FB_APPID} />
      {/*
        @see https://developer.twitter.com/en/docs/tweets/optimize-with-cards/guides/getting-started
      */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={siteMetadata.userTwitter} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:url" content={siteMetadata.siteUrl} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export { SEO };

export default SEO;
