import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import LocationHotelRestaurant from '../../components/main/location/LocationHotelRestaurant';
import client from '../../lib/apolloClient';
import { LOCATIONS } from '../../lib/queries/locationQueries';
import { LOCATION_URLPREFIX } from '../../lib/queries/locationQueries';
import WithTransition from '../../components/utils/WithTransition';
import PageTitle from '../../components/main/PageTitle';
import LocationServicePage from '../../components/pages/LocationServicePage';

const ServicePage = ({ location }) => {
	const [url, setUrl] = useState('');
	const pageTitle = `Các điểm tham quan tại ${location.Name}`;
	// breadcrumb to location
	const breadcrumb = {
		name: location.Name,
		url: `/${location.urlPrefix}`,
	};
	const og = { description: '', image: '' };

	useEffect(() => {
		setUrl(window.location.href);
	}, []);

	return (
		<>
			<Head>
				<title>{pageTitle}</title>
				<meta name="description" content={pageTitle} />
				<meta name="og:title" content={pageTitle} />
				<meta name="og:description" content={pageTitle} />
				{
					// location Thumbnail }
					location.Thumbnail && (
						<meta
							name="og:image"
							content={`${process.env.NEXT_PUBLIC_STRAPI_URL}${location.Thumbnail.url}`}
						/>
					)
				}
			</Head>
			<WithTransition>
				<PageTitle pageTitle={pageTitle} breadcrumb={breadcrumb} />
				<LocationServicePage
					location={location}
					sightseeings={location.sightseeings}
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
		paths.push({
			params: {
				location: location.urlPrefix,
			},
		});
	});

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps(context) {
	const locationQuery = await client.query({
		query: LOCATION_URLPREFIX,
		variables: {
			urlPrefix: context.params.location,
		},
	});

	return {
		props: {
			location: locationQuery.data.locations[0],
		},
	};
}

export default ServicePage;
