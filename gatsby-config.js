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
        // source directory
        contentPath: 'src/decks',
        // base path for routes generate by this theme
        basePath: '/slides',
      },
    },
  ],
}
