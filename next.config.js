const redirects = require('./lib/redirects');
const { withPlaiceholder } = require('@plaiceholder/next');

// const withSass = require('@zeit/next-sass');
// const withCSS = require('@zeit/next-css');

// module.exports = withCSS(withSass());

module.exports = withPlaiceholder({
	reactStrictMode: true,
	images: {
		domains: [
			'http://localhost:1337',
			'localhost',
			'aovuastrapi.niallmurphy.dev',
		],
		// minimumCacheTTL: 31536000,
	},
	redirects,
	experimental: {
		concurrentFeatures: true,
	},
});
