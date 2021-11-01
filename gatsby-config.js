module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "test-shopify",
  },
  plugins: [
    {
      resolve: "gatsby-source-shopify",
      options: {
        shopName: "test-poznan",
        accessToken: "57bcac1ae8267f7201d4096792959ea1",
      },
    },
  ],
};
