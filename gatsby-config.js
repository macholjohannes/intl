module.exports = {
  siteMetadata: {
    title: `Machol & Johannes LLC Attorneys At Law`,
    description: `Machol & Johannes, LLC (and affiliates) is a premier collection law firm.`,
    author: `@macholjohannes`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify`,
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
  ],
}
