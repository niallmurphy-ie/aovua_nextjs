const redirects = require('./lib/redirects');

module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      'http://localhost:1337',
      'localhost',
      'aovuastrapi.niallmurphy.dev',
      'aovua.com.vn',
      'aovua.niallmurphy.dev',
    ],
    minimumCacheTTL: 31536000,
  },
  redirects,
};
