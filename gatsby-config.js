module.exports = {
  // shared across pages
  siteMetadata: {
    title: `Gatsby Starter Blog2`,
    author: {
      name: `Kyle Mathews`,
      summary: `who lives and works in San Francisco building useful things.`,
    },
    description: `A starter blog demonstrating what Gatsby can do.`,
    siteUrl: `https://gatsby-starter-blog-demo.netlify.app/`,
    social: {
      twitter: `kylemathews`,
    },
    mainNavEntries:[
      {
        link:'/',
        names: {
          en: 'Home',
          de: 'Home',
        },
      },
      {
        link:'/community',
        names: {
          en: 'Community',
          de: 'Community',
        },
      },
      {
        link:'/news',
        names: {
          en: 'News',
          de: 'Aktuelles',
        },
      },
      {
        link:'/faq',
        names: {
          en: 'FAQ',
          de: 'FAQ',
        },
      },
    ],
    footerNavEntries:[
      {
        id: 'learn-more',
        titles: {
          en: 'Learn more',
          de: 'Learn möre',
        },
        links: [
          {
            link:'/',
            names: {
              en: 'docs',
              de: 'docs',
            },
          },
          {
            link:'/faq',
            names: {
              en: 'FAQ',
              de: 'FAQ',
            },
          },
        ]
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    // json files
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `faq`,
        path: `./src/data/faq`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: true,
      },
    },
    `gatsby-transformer-json`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
