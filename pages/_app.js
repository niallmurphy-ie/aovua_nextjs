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
import '../styles/gallery.css';
import '../styles/fb-loader.css';
import '../styles/product.css';

import NextApp from 'next/app';
import { ApolloProvider } from '@apollo/client';
import client from '../lib/apolloClient';
import { FOOTER } from '../lib/queries/footer';
import { LOCATIONS_MAPS } from '../lib/queries/locationQueries';
import { CONTACT_PAGE } from '../lib/queries';
import Footer from '../components/footer/Footer';
import Head from 'next/head';
import NavBar from '../components/header/NavBar';
// import FacebookMessenger from '../components/utils/FacebookMessenger';
import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { getSiteVersion } from '../utils/siteVersion';

export default function App({
	Component,
	pageProps,
	footerData,
	mapsData,
	contactData,
	...appProps
}) {
	let url = '';
	let siteVersion = '';
	if (typeof window !== 'undefined') {
		url = window.location.href;
		siteVersion = getSiteVersion(window.location.hostname);
	}
	let companyName = '';
	if (siteVersion === "aovua.com.vn") {
		companyName = "Ao Vua JSC.";
	} else {
		companyName = "Khu Du Lịch Đảo Ngọc Xanh"
	}

	return (
		<ApolloProvider client={client}>
			<div className="App">
				<Head>
					<link rel="icon" href="/favicon.ico" />
					<meta property="og:locale" content="vi_VN" />
					<meta name="og:title" content={companyName} />
					<meta name="twitter:card" content="summary_large_image" />
					<meta name="og:url" content={url} />
					<link
						rel="apple-touch-icon"
						sizes="180x180"
						href="/apple-touch-icon.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="32x32"
						href="/favicon-32x32.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="16x16"
						href="/favicon-16x16.png"
					/>
					<link rel="manifest" href="/site.webmanifest" />
					<link
						rel="mask-icon"
						href="/safari-pinned-tab.svg"
						color="#5bbad5"
					/>
					<meta
						name="apple-mobile-web-app-title"
						content={companyName}
					/>
					<meta name="application-name" content={companyName} />
					<meta name="msapplication-TileColor" content="#ffffff" />
					<meta name="theme-color" content="#ffffff" />
				</Head>
				<NavBar home={appProps?.router.asPath === '/'} siteVersion={siteVersion} />
				<AnimatePresence exitBeforeEnter>
					<Component {...pageProps} siteVersion={siteVersion} />
				</AnimatePresence>
				<Footer
					contactData={contactData}
					mapsData={mapsData}
					footer={footerData}
					siteVersion={siteVersion}
				/>
			</div>
		</ApolloProvider>
	);
}

App.getInitialProps = async (appContext) => {
	const appProps = await NextApp.getInitialProps(appContext);
	const footerData = client.query({
		query: FOOTER,
	});
	const mapsData = client.query({
		query: LOCATIONS_MAPS,
	});
	const contactData = client.query({
		query: CONTACT_PAGE,
	});
	const results = await Promise.all([footerData, mapsData, contactData]);

	return {
		...appProps,
		footerData: results[0].data.footer,
		mapsData: results[1].data.locations,
		contactData: results[2].data.contact,
	};
};
