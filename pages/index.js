import Head from 'next/head';
import Image from 'next/image';
import HomePage from '../components/main/homepage/Homepage';
import client from '../lib/apolloClient';
import { ARTICLES } from '../lib/queries/articles';
import { ENTERTAINMENTS } from '../lib/queries';
import { SIGHTSEEING_HOMEPAGE } from '../lib/queries/sightseeingQueries';
import { HOMEPAGE, HOMEPAGE_LOCATIONS } from '../lib/queries/homepageQueries';

export default function Home({
	homepageData,
	articlesData,
	entertainmentData,
	locationsData,
	sightseeingsData,
}) {
	console.log('sightseeingsData', sightseeingsData);
	return (
		<>
			<Head>
				<title>Ao Vua</title>
				<meta
					name="description"
					content="Generated by create next app"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<HomePage
				homepageData={homepageData}
				articles={articlesData}
				entertainment={entertainmentData}
				locations={locationsData}
				sightseeings={sightseeingsData}
			/>
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

	console.log('responses :>> ', responses);
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
