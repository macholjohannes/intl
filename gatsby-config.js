module.exports = {
  siteMetadata: {
    title: `Machol & Johannes LLC Attorneys At Law`,
    description: `Machol & Johannes, LLC (and affiliates) is a premier collection law firm.`,
    author: `@macholjohannes`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
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
        name: `Machol & Johannes, LLC Attorneys At Law`,
        short_name: `Machol & Johannes`,
        start_url: `/`,
        background_color: `#024fa2`,
        theme_color: `#024fa2`,
        display: `minimal-ui`,
        icon: `src/images/machol-johannes-icon.png`, 
      },
    },
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        path: `${__dirname}/src/intl`,
        languages: [`en`, `es`],
        defaultLanguage: `en`,
        redirect: true,
        redirectComponent: require.resolve(`./src/components/redirect.js`),
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
