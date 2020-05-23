module.exports = {
  siteMetadata: {
    title: `Joaovsa.dev`,
    description: `Desenvolvedor front-end apaixonado por javascript.`,
    author: `@joaovsa7`,
    url: "https://www.joaovsa.dev",
    image: `https://www.joaovsa.dev/static/profile-picture-18a5c883d583be0cf7bd792b42ad8ae9.png`,
    social: {
      twitter: "jvsa7_",
      linkedin: "joaovsa7",
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify-cms-paths`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `joaovsa.dev`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#000`,
        display: `minimal-ui`,
        icon: `src/assets/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-netlify-cms`,
    },
    {
      resolve: "gatsby-plugin-react-svg",
    },
    {
      resolve: `gatsby-plugin-typescript`,
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-167422547-1",
        head: true,
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        pageTransitionDelay: 0,
        defer: true,
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "joaovsa.dev",
      },
    },
  ],
};
