module.exports = {
  siteMetadata: {
    title: `Slides`,
  },
  plugins: [
    `gatsby-plugin-mdx`,
    `gatsby-plugin-typescript`,
    {
      resolve: 'gatsby-theme-mdx-deck',
      options: {
        // enable or disable gatsby-plugin-mdx
        mdx: false,
        // source directory
        contentPath: 'src/decks',
        // base path for routes generate by this theme
        basePath: '/slides',
      },
    },
  ],
}
