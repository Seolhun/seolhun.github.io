const path = require('path');
require('source-map-support').install();
require('ts-node').register({
  compilerOptions: {
    module: 'commonjs',
    target: 'es2017',
  },
});

const SiteConfig = require('./config/SiteConfig').default;
const pathPrefix = SiteConfig.pathPrefix === '/' ? '' : SiteConfig.pathPrefix;

module.exports = {
  pathPrefix: SiteConfig.pathPrefix,
  siteMetadata: {
    title: SiteConfig.siteTitle,
    description: SiteConfig.siteDescription,
    siteUrl: SiteConfig.siteUrl + pathPrefix,
  },
  plugins: [
    'gatsby-plugin-sitemap',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-emotion',
    'gatsby-plugin-lodash',
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        '@': path.join(__dirname, 'src'),
        config: path.join(__dirname, 'config'),
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/contents/posts`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'stories',
        path: `${__dirname}/contents/stories`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'metas',
        path: `${__dirname}/metas`,
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map((edge) => {
                const url = site.siteMetadata.siteUrl + '/contents' + edge.node.fields.slug;
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url,
                  guid: url,
                  custom_elements: [{ 'content:encoded': edge.node.html }],
                });
              });
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { fields: [frontmatter___date], order: DESC },
                ) {
                  edges {
                    node {
                      excerpt(pruneLength: 200)
                      html
                      fields {
                        slug
                      }
                      frontmatter {
                        title
                        date(formatString: "YYYY.MM.DD")
                        category
                        tags
                        banner
                      }
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: "Hi-Cord's RSS Feed",
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: SiteConfig.siteTitle,
        short_name: SiteConfig.siteTitleAlt,
        description: SiteConfig.siteDescription,
        start_url: SiteConfig.pathPrefix,
        background_color: SiteConfig.manifestBackgroundColor,
        theme_color: SiteConfig.manifestThemeColor,
        display: 'standalone',
        icon: SiteConfig.favicon,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: SiteConfig.Google_Analytics_ID,
        head: false,
        anonymize: true,
        respectDNT: true,
        exclude: [],
        pageTransitionDelay: 0,
        // optimizeId: 'YOUR_GOOGLE_OPTIMIZE_TRACKING_ID',
        // experimentId: 'YOUR_GOOGLE_EXPERIMENT_ID',
        // variationId: 'YOUR_GOOGLE_OPTIMIZE_VARIATION_ID',
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: SiteConfig.siteUrl,
      },
    },
    {
      resolve: `gatsby-plugin-google-adsense`,
      options: {
        publisherId: SiteConfig.Google_AD_Sense_ID,
      },
    },
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: SiteConfig.Google_Tag_Manager_ID,
        includeInDevelopment: false,
        defaultDataLayer: { platform: 'gatsby' },
      },
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: SiteConfig.Disqus_ShortName,
      },
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography.ts',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'nofollow noopener noreferrer',
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-autolink-headers',
        ],
      },
    },
  ],
};
