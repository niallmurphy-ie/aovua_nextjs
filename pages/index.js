import Head from 'next/head';
import HomePage from '../components/main/homepage/Homepage';
import client from '../lib/apolloClient';
import { ARTICLES } from '../lib/queries/articles';
import { ENTERTAINMENTS } from '../lib/queries';
import { SIGHTSEEING_HOMEPAGE } from '../lib/queries/sightseeingQueries';
import { HOMEPAGE, HOMEPAGE_LOCATIONS } from '../lib/queries/homepageQueries';
import WithTransition from '../components/utils/WithTransition';

export default function Home({
	homepageData,
	articlesData,
	entertainmentData,
	locationsData,
	sightseeingsData,
}) {
	return (
		<>
			<Head>
				<title>Ao Vua JSC.</title>
				<meta
					name="description"
					content="Ao Vua JSC rất hân hạnh được chào đón quý khách tới các chi nhánh của chúng tôi. Với những con người tận tâm, chúng tôi đảm bảo những trải nghiệm hài lòng nhất cho quý khách."
				/>
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
				<meta name="apple-mobile-web-app-title" content="Ao Vua JSC." />
				<meta name="application-name" content="Ao Vua JSC." />
				<meta name="msapplication-TileColor" content="#ffffff" />
				<meta name="theme-color" content="#ffffff" />
			</Head>
			<WithTransition>
				<HomePage
					homepageData={homepageData}
					articles={articlesData}
					entertainment={entertainmentData}
					locations={locationsData}
					sightseeings={sightseeingsData}
				/>
			</WithTransition>
		</>
	);
}

export const getStaticProps = async () => {
	const homepageQuery = client.query({
		query: HOMEPAGE,
	});

	const latestNewsQuery = client.query({
		query: ARTICLES,
		variables: {
			limit: 3,
		},
	});

	const entertainmentQuery = client.query({
		query: ENTERTAINMENTS,
		variables: {
			Promoted: true,
		},
	});

	const locationsQuery = client.query({
		query: HOMEPAGE_LOCATIONS,
	});

	const sightseeingsQuery = client.query({
		query: SIGHTSEEING_HOMEPAGE,
	});

	const responses = await Promise.all([
		homepageQuery,
		latestNewsQuery,
		entertainmentQuery,
		locationsQuery,
		sightseeingsQuery,
	]);

	return {
		props: {
			homepageData: responses[0].data.homepage,
			articlesData: responses[1].data.articles,
			entertainmentData: responses[2].data.entertainments,
			locationsData: responses[3].data.locations,
			sightseeingsData: responses[4].data.sightseeings,
		},
	};
};
