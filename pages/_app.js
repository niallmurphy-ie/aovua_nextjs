// App + Font
import '../styles/global.css';
// slick
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// add bootstrap css
import 'bootstrap/dist/css/bootstrap.css';
// modal video
import '../node_modules/react-modal-video/css/modal-video.min.css';

import '../styles/header.css';
import '../styles/page-title.css';
import '../styles/mobile-menu.css';
import '../styles/loading.css';
import '../styles/hero.css';
import '../styles/search-box.css';
import '../styles/footer.css';
import '../styles/about.css';
import '../styles/video.css';
import '../styles/blog.css';
import '../styles/article.css';
import '../styles/article-sidebar.css';

// search date picker
import 'react-datepicker/dist/react-datepicker.css';

import { ApolloProvider } from '@apollo/client';
import client from '../lib/apolloClient';

export default function App({ Component, pageProps }) {
	return (
		<ApolloProvider client={client}>
			<Component {...pageProps} />
		</ApolloProvider>
	);
}

