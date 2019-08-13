/* eslint-disable react/require-default-props */
import React from "react";
import Helmet from "react-helmet";

import SiteConfig from "config/SiteConfig";
import Post from "@/models/Post";

interface SEO {
  postNode: Post;
  postPath: string;
  postSEO: boolean;
}

const SEO = ({ postNode, postPath, postSEO }: SEO) => {
  let title;
  let description;
  let image;
  let postURL;
  const realPrefix = SiteConfig.pathPrefix === "/" ? "" : SiteConfig.pathPrefix;
  if (postSEO) {
    const postMeta = postNode.frontmatter;
    title = postMeta.title;
    description = postNode.excerpt;
    image = SiteConfig.siteBanner;
    postURL = SiteConfig.siteUrl + realPrefix + postPath;
  } else {
    title = SiteConfig.siteTitle;
    description = SiteConfig.siteDescription;
    image = SiteConfig.siteBanner;
  }
  image = SiteConfig.siteUrl + realPrefix + image;
  const blogURL = SiteConfig.siteUrl + SiteConfig.pathPrefix;
  let schemaOrgJSONLD = [
    {
      "@context": "http://schema.org",
      "@type": "WebSite",
      "@id": blogURL,
      url: blogURL,
      name: title,
      alternateName: SiteConfig.siteTitleAlt ? SiteConfig.siteTitleAlt : ""
    }
  ];
  if (postSEO) {
    schemaOrgJSONLD = [
      {
        "@context": "http://schema.org",
        "@type": "BlogPosting",
        // @ts-ignore
        "@id": postURL,
        // @ts-ignore
        url: postURL,
        name: title,
        alternateName: SiteConfig.siteTitleAlt ? SiteConfig.siteTitleAlt : "",
        headline: title,
        image: {
          "@type": "ImageObject",
          url: image
        },
        description: SiteConfig.siteDescription,
        datePublished: postNode.frontmatter.date,
        dateModified: postNode.frontmatter.date,
        author: {
          "@type": "Person",
          name: SiteConfig.author
        },
        publisher: {
          "@type": "Organization",
          name: SiteConfig.author,
          logo: {
            "@type": "ImageObject",
            url: SiteConfig.siteUrl + realPrefix + SiteConfig.siteLogo
          }
        },
        isPartOf: blogURL,
        mainEntityOfPage: {
          "@type": "WebSite",
          "@id": blogURL
        }
      }
    ];
  }
  return (
    <Helmet>
      <html lang={SiteConfig.siteLanguage} />
      <title>{SiteConfig.siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="image" content={image} />
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>
      <meta property="og:locale" content={SiteConfig.ogLanguage} />
      <meta
        property="og:site_name"
        content={SiteConfig.ogSiteName ? SiteConfig.ogSiteName : ""}
      />
      <meta property="og:url" content={postSEO ? postURL : blogURL} />
      {postSEO ? <meta property="og:type" content="article" /> : null}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta
        property="fb:app_id"
        content={SiteConfig.siteFBAppID ? SiteConfig.siteFBAppID : ""}
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:creator"
        content={SiteConfig.userTwitter ? SiteConfig.userTwitter : ""}
      />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:url" content={SiteConfig.siteUrl} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEO;
