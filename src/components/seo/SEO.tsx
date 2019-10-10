/* eslint-disable react/require-default-props */
import React from 'react';
import Helmet from 'react-helmet';

import Post from '@/models/Post';
import SiteConfig from 'config/SiteConfig';

interface SEO {
  isPostSEO: boolean;
  postPath?: string;
  postNode?: Post;
}

const SEO = ({ isPostSEO, postPath = '', postNode }: SEO) => {
  const postMeta = postNode ? postNode.frontmatter : null;
  const title = postMeta && postMeta.title ? postMeta.title : SiteConfig.siteTitle;
  const description = postNode && postNode.excerpt ? postNode.excerpt : SiteConfig.siteDescription;
  const realPrefix = SiteConfig.pathPrefix === '/' ? '/' : SiteConfig.pathPrefix;
  const postURL = `${SiteConfig.siteUrl}${realPrefix}contents/${postPath}`;
  const blogURL = SiteConfig.siteUrl + SiteConfig.pathPrefix;
  const image = SiteConfig.siteUrl + realPrefix + SiteConfig.siteBanner;

  const DEFAULT_SCHEMA_JSOND = [
    {
      name: title,
      alternateName: SiteConfig.siteTitleAlt ? SiteConfig.siteTitleAlt : '',
      headline: title,
      image: {
        '@type': 'ImageObject',
        url: image,
      },
      description: SiteConfig.siteDescription,
      datePublished: postNode ? postNode.frontmatter.date : '',
      dateModified: postNode ? postNode.frontmatter.date : '',
      author: {
        '@type': 'Person',
        name: SiteConfig.author,
      },
      publisher: {
        '@type': 'Organization',
        name: SiteConfig.author,
        logo: {
          '@type': 'ImageObject',
          url: `${SiteConfig.siteUrl}${SiteConfig.siteLogo}`,
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
      <html lang={SiteConfig.siteLanguage} />
      <title>{SiteConfig.siteTitle}</title>
      <meta name='description' content={description} />
      <meta name='image' content={image} />
      <script type='application/ld+json'>{JSON.stringify(schemaOrgJSONLD)}</script>
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:type' content={isPostSEO ? 'article' : 'website'} />
      <meta property='og:image' content={image} />
      <meta property='og:locale' content={SiteConfig.ogLanguage} />
      <meta property='og:site_name' content={SiteConfig.ogSiteName} />
      <meta property='og:url' content={isPostSEO ? postURL : blogURL} />
      <meta property='fb:app_id' content={SiteConfig.siteFBAppID} />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:creator' content={SiteConfig.userTwitter} />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:url' content={SiteConfig.siteUrl} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={image} />
    </Helmet>
  );
};

export default SEO;
