import Head from 'next/head';
import NavBar from './header/NavBar';
import Footer from './footer/Footer';

export const siteTitle = 'Ao Vua';

export default function Layout({ children, home }) {
	return (
		<div className="App">
			<Head>
				<link rel="icon" href="/favicon.ico" />
				<meta name="description" content="Ao Vua, Ba Vi" />
				<meta
					property="og:image"
					content={`https://og-image.vercel.app/${encodeURI(
						siteTitle
					)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
				/>
				<meta name="og:title" content={siteTitle} />
				<meta name="twitter:card" content="summary_large_image" />
			</Head>
			<div className="App">
				<NavBar home={home} />
				{children}
				<Footer />
			</div>
		</div>
	);
}
