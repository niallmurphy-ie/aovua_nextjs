const redirects = require('./lib/redirects');

// const withSass = require('@zeit/next-sass');
// const withCSS = require('@zeit/next-css');

// module.exports = withCSS(withSass());

module.exports = {
	reactStrictMode: true,
	images: {
		domains: ['http://localhost:1337', 'localhost', 'aovuastrapi.niallmurphy.dev'],
		// minimumCacheTTL: 31536000,
	},
	redirects,
};
