module.exports = {
  siteMetadata: {
    title: `Austin Chang`,
    description: `Austin 作為專注在網際網路的軟體工作者，總計約六年網頁開發經驗，使用 React、TypeScript、AngularJS 等技術。對技術發展保持開放態度，持續審視職涯並保持學習，希望與有才華的工作者共同事並應用在實際商用產品。`,
    author: `張瑀`,
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
    // `gatsby-plugin-offline`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-theme-ui`,
  ],
  pathPrefix: `/resume`,
}
