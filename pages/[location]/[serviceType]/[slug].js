import Head from 'next/head';
import PageTitle from '../../../components/main/PageTitle';
import Service from '../../../components/main/service/Service';
import client from '../../../lib/apolloClient';
import { ENTERTAINMENT, ENTERTAINMENTS } from '../../../lib/queries';
import { ACCOMMODATION } from '../../../lib/queries/accommodationQueries';
import { LOCATIONS } from '../../../lib/queries/locationQueries';
import { LOCATION_URLPREFIX } from '../../../lib/queries/locationQueries';

const ServicePage = ({
	location,
	entertainment,
	entertainments,
	accommodation,
}) => {
	// location gives the first location if multuple are selected.
	let pageTitle;
	let breadcrumb;
	if (entertainment) {
		pageTitle = entertainment.Name || '';
		breadcrumb = {
			url: `/${location.urlPrefix}/vui-choi-giai-tri`,
			name: `${location.Name} - Vui chơi giải trí`,
		};
	}
	if (accommodation) {
		pageTitle = accommodation.Name || '';
		breadcrumb = {
			url: `/${location.urlPrefix}`,
			name: `${location.Name} `,
		};
	}

	return (
		<>
			<Head>
				<title>{pageTitle}</title>
				<meta name="description" content={pageTitle} />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<PageTitle pageTitle={pageTitle} breadcrumb={breadcrumb} />
			<Service
				entertainment={entertainment}
				accommodation={accommodation}
			/>
		</>
	);
};

export async function getStaticPaths() {
	const paths = [];
	const locationsQuery = await client.query({
		query: LOCATIONS,
	});
	const locations = locationsQuery.data.locations;
	locations.forEach((location) => {
		location.entertainments.forEach((entertainment) => {
			paths.push({
				params: {
					location: location.urlPrefix,
					serviceType: 'vui-choi-giai-tri',
					slug: entertainment.slug,
				},
			});
		});
		location.accommodations.forEach((accommodation) => {
			paths.push({
				params: {
					location: location.urlPrefix,
					serviceType: 'khach-san-nha-hang',
					slug: accommodation.slug,
				},
			});
		});
	});

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps(context) {
	console.log(`context.params`, context.params);

	// All queries for all types of services
	const locationQuery = client.query({
		query: LOCATION_URLPREFIX,
		variables: {
			urlPrefix: context.params.location,
		},
	});

	const entertainmentQuery = client.query({
		query: ENTERTAINMENT,
		variables: {
			slug: context.params.slug,
		},
	});
	const entertainmentsQuery = client.query({
		query: ENTERTAINMENTS,
	});

	const accommodationQuery = client.query({
		query: ACCOMMODATION,
		variables: {
			slug: context.params.slug,
		},
	});

	const responses = await Promise.all([
		locationQuery,
		entertainmentQuery,
		entertainmentsQuery,
		accommodationQuery,
	]);

	return {
		props: {
			location: responses[0].data.locations[0],
			entertainment: responses[1].data.entertainments[0] || null,
			entertainments: responses[2].data.entertainments || null,
			accommodation: responses[3].data.accommodations[0] || null,
		},
	};
}

export default ServicePage;
