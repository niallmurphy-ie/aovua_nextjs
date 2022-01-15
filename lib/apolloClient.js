import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const client = new ApolloClient({
	ssrMode: typeof window === 'undefined',
	link: new HttpLink({
		uri: 'http://localhost:1337/graphql', // Server URL (must be absolute)
		credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
	}),
	cache: new InMemoryCache(),
});

export default client;