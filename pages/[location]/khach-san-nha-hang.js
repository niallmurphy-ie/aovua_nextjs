import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import LocationHotelRestaurant from '../../components/main/location/LocationHotelRestaurant';
import client from '../../lib/apolloClient';
import { LOCATIONS } from '../../lib/queries/locationQueries';
import { LOCATION_URLPREFIX } from '../../lib/queries/locationQueries';
import WithTransition from '../../components/utils/WithTransition';
import PageTitle from '../../components/main/PageTitle';

const ServicePage = ({ location }) => {
	const [url, setUrl] = useState('');
	const pageTitle = `Khách sạn nhà hàng tại ${location.Name}`;
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
				<LocationHotelRestaurant
					location={location}
					addLocationName={true}
					addTitle={false}
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
