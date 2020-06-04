/* eslint-disable max-len */
const path = require('path');
const siteMetadata = require('./siteMetadata');

const pathPrefix = siteMetadata.pathPrefix === '/' ? '' : siteMetadata.pathPrefix;

module.exports = {
  pathPrefix: siteMetadata.pathPrefix,
  siteMetadata: {
    title: siteMetadata.siteTitle,
    description: siteMetadata.siteDescription,
    siteUrl: siteMetadata.siteUrl + pathPrefix,
  },
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-sharp',
    'gatsby-transformer-json',
    'gatsby-transformer-sharp',
    'gatsby-plugin-remove-serviceworker',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-emotion',
    'gatsby-plugin-offline',
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        '@': path.join(__dirname, 'src'),
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
      resolve: 'gatsby-plugin-feed',
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
            serialize: ({ query: { site, allMarkdownRemark } }) => allMarkdownRemark.edges.map((edge) => {
              const url = `${site.siteMetadata.siteUrl}/contents${edge.node.fields.slug}`;
              return {
                ...edge.node.frontmatter,
                description: edge.node.excerpt,
                date: edge.node.frontmatter.date,
                url,
                guid: url,
                custom_elements: [{ 'content:encoded': edge.node.html }],
              };
            }),
            query: `
                {
                  allMarkdownRemark(
                    sort: {
                      fields: [frontmatter___date],
                      order: DESC
                    },
                  ) {
                    edges {
                      node {
                        excerpt(pruneLength: 250)
                        fields {
                          slug
                        }
                        frontmatter {
                          author
                          banner
                          category
                          date(formatString: "YYYY.MM.DD")
                          subTitle
                          tags
                          title
                        }
                        html
                        id
                        timeToRead
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
        name: siteMetadata.siteTitle,
        short_name: siteMetadata.siteTitleAlt,
        description: siteMetadata.siteDescription,
        start_url: siteMetadata.pathPrefix,
        background_color: siteMetadata.manifestBackgroundColor,
        theme_color: siteMetadata.manifestThemeColor,
        display: 'standalone',
        icon: siteMetadata.favicon,
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: siteMetadata.Google_Analytics_ID,
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
        cookieDomain: siteMetadata.siteUrl,
      },
    },
    {
      resolve: 'gatsby-plugin-google-adsense',
      options: {
        publisherId: siteMetadata.Google_AD_Sense_ID,
      },
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: siteMetadata.Google_Tag_Manager_ID,
        includeInDevelopment: false,
        defaultDataLayer: { platform: 'gatsby' },
      },
    },
    {
      resolve: 'gatsby-plugin-disqus',
      options: {
        shortname: siteMetadata.Disqus_ShortName,
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
