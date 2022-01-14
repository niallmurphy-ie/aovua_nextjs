// import '../styles/globals.css';

// add bootstrap css
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/header.css';

import { ApolloProvider } from '@apollo/client';
import { useApollo } from '../lib/apolloClient';

export default function App({ Component, pageProps }) {
	const apolloClient = useApollo(pageProps);

	return (
		<ApolloProvider client={apolloClient}>
			<Component {...pageProps} />
		</ApolloProvider>
	);
}
