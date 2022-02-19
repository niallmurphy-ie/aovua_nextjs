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
import '../styles/location.css';
import '../styles/ckeditor-output.css';
import '../styles/contact.css';
import '../styles/entertainment.css';
import '../styles/destination.css';
import '../styles/category.css';
import '../styles/restaurant-accommodation.css';
import '../styles/features.css';
// search date picker
import 'react-datepicker/dist/react-datepicker.css';

import NextApp from 'next/app';
import { ApolloProvider } from '@apollo/client';
import client from '../lib/apolloClient';
import { FOOTER } from '../lib/queries/footer';
import Footer from '../components/footer/Footer';
import Head from 'next/head';
import NavBar from '../components/header/NavBar';
import FacebookMessenger from '../components/utils/FacebookMessenger';
import React from 'react';

export default function App({ Component, pageProps, footerData, ...appProps }) {
	return (
		<ApolloProvider client={client}>
			<div className="App">
				<Head>
					<link rel="icon" href="/favicon.ico" />
					{/* <meta
						property="og:image"
						content={`https://og-image.vercel.app/${encodeURI(
							'Ao Vua'
						)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
					/> */}
					<meta name="og:title" content="Ao Vua" />
					<meta name="twitter:card" content="summary_large_image" />
				</Head>
				<NavBar home={appProps.router.asPath === '/'} />
				<Component {...pageProps} />
				<Footer footer={footerData} />
				<FacebookMessenger />
			</div>
		</ApolloProvider>
	);
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.

App.getInitialProps = async (appContext) => {
	const appProps = await NextApp.getInitialProps(appContext);
	const footerData = await client.query({
		query: FOOTER,
	});
	return { ...appProps, footerData: footerData.data.footer };
};
