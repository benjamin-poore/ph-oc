module.exports = {
  siteMetadata: {
    title: `Potter's House Oregon City`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: "gatsby-source-graphql",
      options: {
        // This type will contain remote schema Query type
        typeName: "KEYSTONE",
        // This is the field under which it's accessible
        fieldName: "keystone",
        // URL to query from
        url: "http://154.53.63.196:3000/api/graphql",
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    /*
     * Gatsby's data processing layer begins with “source” plugins. Here we
     * setup the site to pull data from the "documents" collection in a local
     * MongoDB instance
     */
    {
      resolve: `gatsby-source-mongodb`,
      options: { dbName: `Gatsby`, collection: `test` },
      query: { documents: { as_of: { $gte: 1604397088013 } } },
    },
  ],
}

