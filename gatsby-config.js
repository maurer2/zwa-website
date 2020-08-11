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
    copyright: {
      text: '© {year} - The authors of the Corona-Warn-App open-source project'
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
              en: 'Docs',
              de: 'Docs',
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
      {
        id: 'about',
        titles: {
          en: 'About',
          de: 'Äbout',
        },
        links: [
          {
            link:'/privacy',
            names: {
              en: 'Privacy statement',
              de: 'Datenschutz',
            },
          },
          {
            link:'/imprint',
            names: {
              en: 'Legal notice',
              de: 'Impressum',
            },
          },
        ]
      },
      {
        id: 'get-involved',
        titles: {
          en: 'Get involved',
          de: 'Get involved',
        },
        links: [
          {
            link:'/community',
            names: {
              en: 'Community',
              de: 'Community',
            },
          },
        ]
      },
      {
        id: 'hotline-app',
        titles: {
          en: 'Hotline App',
          de: 'Hotline App',
        },
        links: [
          {
            link:'+49 800 7540001',
            names: {
              en: 'tel:+498007540001',
              de: 'tel:+498007540001',
            },
          },
        ]
      },
      {
        id: 'hotline-tan',
        titles: {
          en: 'Hotline TAN',
          de: 'Hotline TAN',
        },
        links: [
          {
            link:'+49 800 7540002',
            names: {
              en: 'tel:+498007540002',
              de: 'tel:+498007540002',
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
    // images
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
        path: `${__dirname}/src/data/faq`,
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
