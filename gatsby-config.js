module.exports = {
  siteMetadata: {
    title: `Joaovsa.dev`,
    description: `Desenvolvedor front-end apaixonado por javascript.`,
    author: `@blakenoll and @joaovsa7`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `joaovsa.dev`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#000`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
    },
    {
      resolve: `gatsby-styled-components-dark-mode`,
      options: {
        light: {
          backgroundColor: '#fff',
          primaryColor: '#000a12',
          blue: '#488DE8',
          red: '#e67b59',
          gray: '#1f1f1f',
          yellow: '#ece071',
        },
        dark: {
          backgroundColor: '#000a12',
          primaryColor: '#eee',
          darkBlue: '#004ba0',
          blue: '#488DE8',
          red: '#b71c1c',
          yellow: '#F7FF82',
          gray: '#757575',
        }
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
