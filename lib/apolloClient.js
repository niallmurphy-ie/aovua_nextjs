import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { getSiteVersion } from "../utils/siteVersion";

const customFetch = (uri, options) => {
  const siteVersion = typeof window !== 'undefined' ? getSiteVersion(window.location.hostname) : 'aovua.com.vn';
  const headers = {
    ...options.headers,
    'X-Site-Version': siteVersion,
  };
  return fetch(uri, { ...options, headers });
};

const client = new ApolloClient({
  ssrMode: typeof window === 'undefined',
  link: new HttpLink({
    uri: `${process.env.NEXT_PUBLIC_STRAPI_URL}/graphql`, // Server URL (must be absolute)
    credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
    fetch: customFetch,
  }),
  cache: new InMemoryCache(),
});

export default client;
