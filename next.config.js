const nextConfig = {
   images: {
      domains: ['cdn.shopify.com', 'localhost'],
   },
   env: {
      ALGOLIA_APPLICATION_ID: '4BBV3SP2D7',
      ALGOLIA_ADMIN_API_KEY: '2eb33a2c7e8c8933b875fe5a4b95180d',
      ALGOLIA_INDEX_NAME: 'nextify-searcher',
   }
};

module.exports = nextConfig;
