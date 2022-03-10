import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import client from '../../lib/apolloClient';
import { LOCATIONS } from '../../lib/queries/locationQueries';
import { LOCATION_URLPREFIX } from '../../lib/queries/locationQueries';
import WithTransition from '../../components/utils/WithTransition';
import PageTitle from '../../components/main/PageTitle';
import LocationServicePage from '../../components/pages/LocationServicePage';
import { CEMETERY_SAMPLES } from '../../lib/queries/cemeteryQueries';

const ServicePage = ({ location, cemeterySamples }) => {
	const [url, setUrl] = useState('');
	const pageTitle = `Mẫu mộ tại ${location.Name}`;
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
				<LocationServicePage
					location={location}
					cemeterySamples={cemeterySamples}
				/>
			</WithTransition>
		</>
	);
};

export async function getStaticPaths() {
	const paths = [
		{
			params: {
				location: 'cong-vien-vinh-hang',
			},
		},
	];

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

	const cemeterySamplesQuery = await client.query({
		query: CEMETERY_SAMPLES,
	});

	return {
		props: {
			location: locationQuery.data.locations[0],
			cemeterySamples: cemeterySamplesQuery.data.cemeterySamples,
		},
	};
}

export default ServicePage;
