import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const client = new ApolloClient({
	ssrMode: typeof window === 'undefined',
	link: new HttpLink({
		uri: `${process.env.NEXT_PUBLIC_STRAPI_URL}/graphql`, // Server URL (must be absolute)
		credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
	}),
	cache: new InMemoryCache(),
});

export default client;