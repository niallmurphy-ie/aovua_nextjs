// App + Font
import '../styles/global.css';
// slick
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// add bootstrap css
import 'bootstrap/dist/css/bootstrap.css';

import '../styles/header.css';
import '../styles/page-title.css';
import '../styles/mobile-menu.css';
import '../styles/loading.css';
import '../styles/hero.css';
import '../styles/search-box.css';
import '../styles/footer.css';

// search date picker
import 'react-datepicker/dist/react-datepicker.css';

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
