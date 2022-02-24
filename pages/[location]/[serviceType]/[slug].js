import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import PageTitle from '../../../components/main/PageTitle';
import Service from '../../../components/main/service/Service';
import client from '../../../lib/apolloClient';
import { ENTERTAINMENT, ENTERTAINMENTS } from '../../../lib/queries';
import { ACCOMMODATION } from '../../../lib/queries/accommodationQueries';
import { LOCATIONS } from '../../../lib/queries/locationQueries';
import { LOCATION_URLPREFIX } from '../../../lib/queries/locationQueries';
import { SIGHTSEEING } from '../../../lib/queries/sightseeingQueries';
import WithTransition from '../../../components/utils/WithTransition';

const ServicePage = ({
	location,
	entertainment,
	entertainments,
	accommodation,
	sightseeing,
}) => {
	const [url, setUrl] = useState('');
	let pageTitle;
	let breadcrumb;
	const og = { description: '', image: '' };
	if (entertainment) {
		pageTitle = entertainment.Name || '';
		og.description = `Tại ${location.Name}` || '';
		og.image = entertainment.Thumbnail?.url || '';
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
	if (sightseeing) {
		pageTitle = sightseeing.Name || '';
		breadcrumb = {
			url: `/${location.urlPrefix}/cac-diem-tham-quan`,
			name: `${location.Name} - Các điểm tham quan`,
		};
	}

	useEffect(() => {
		setUrl(window.location.href);
	}, []);

	return (
		<>
			<Head>
				<title>{pageTitle}</title>
				<meta name="description" content={pageTitle} />
				<meta property="og:title" content={pageTitle} />
				<meta property="og:url" content={url} />
				{/* <meta
					property="og:image:secure_url"
					content={`${process.env.NEXT_PUBLIC_STRAPI_URL}${og.image}`}
				/>
				<meta
					property="og:image"
					content={`${process.env.NEXT_PUBLIC_STRAPI_URL}${og.image}`}
				/> */}
				<meta property="og:description" content={og.description} />
			</Head>
			<WithTransition>
				<PageTitle pageTitle={pageTitle} breadcrumb={breadcrumb} />
				<Service
					location={location}
					entertainment={entertainment}
					accommodation={accommodation}
					sightseeing={sightseeing}
				/>
			</WithTransition>
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
		location.sightseeings.forEach((sightseeing) => {
			paths.push({
				params: {
					location: location.urlPrefix,
					serviceType: 'cac-diem-tham-quan',
					slug: sightseeing.slug,
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

	const sightseeingQuery = client.query({
		query: SIGHTSEEING,
		variables: {
			slug: context.params.slug,
		},
	});

	const responses = await Promise.all([
		locationQuery,
		entertainmentQuery,
		entertainmentsQuery,
		accommodationQuery,
		sightseeingQuery,
	]);

	return {
		props: {
			location: responses[0].data.locations[0],
			entertainment: responses[1].data.entertainments[0] || null,
			entertainments: responses[2].data.entertainments || null,
			accommodation: responses[3].data.accommodations[0] || null,
			sightseeing: responses[4].data.sightseeings[0] || null,
		},
	};
}

export default ServicePage;
