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
    siteUrl: SiteConfig.siteUrl + pathPrefix,
  },
  plugins: [
    'gatsby-plugin-catch-links',
    'gatsby-plugin-emotion',
    'gatsby-plugin-lodash',
    'gatsby-plugin-manifest',
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-typescript',
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
      resolve: 'gatsby-plugin-root-import',
      options: {
        '@': path.join(__dirname, 'src'),
        config: path.join(__dirname, 'config'),
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
        optimizeId: 'YOUR_GOOGLE_OPTIMIZE_TRACKING_ID',
        experimentId: 'YOUR_GOOGLE_EXPERIMENT_ID',
        variationId: 'YOUR_GOOGLE_OPTIMIZE_VARIATION_ID',
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: SiteConfig.siteUrl,
      },
    },
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: SiteConfig.Google_Tag_Manager_ID,
        includeInDevelopment: false,
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
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography.ts',
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
  ],
};
