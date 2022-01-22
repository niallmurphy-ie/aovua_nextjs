const redirects = require('./lib/redirects');

module.exports = {
	reactStrictMode: true,
	images: {
		domains: ['http://localhost:1337', 'localhost', 'aovuastrapi.niallmurphy.dev'],
	},
	redirects,
};
