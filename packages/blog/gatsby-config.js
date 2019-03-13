require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Blog`,
    description: `It's a blog.`,
    author: `@ahrjarrett`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-orga`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `@mosch/gatsby-source-github`,
      options: {
        repository: `ahrjarrett.com`,
        tree: true,
        releases: false,
        user: `ahrjarrett`,
        secrets: {
          token: process.env.GITHUB_SECRET,
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}
