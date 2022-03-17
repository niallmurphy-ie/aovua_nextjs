import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import client from '../../lib/apolloClient';
import { LOCATIONS } from '../../lib/queries/locationQueries';
import { LOCATION_URLPREFIX } from '../../lib/queries/locationQueries';
import WithTransition from '../../components/utils/WithTransition';
import PageTitle from '../../components/main/PageTitle';
import LocationServicePage from '../../components/pages/LocationServicePage';
import { CEMETERY_SERVICES } from '../../lib/queries/cemeteryQueries';

const ServicePage = ({ location, cemeteryServices }) => {
	const [url, setUrl] = useState('');
	const pageTitle = `Dịch vụ tại ${location.Name}`;
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
					cemeteryServices={cemeteryServices}
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

	const cemeteryServicesQuery = await client.query({
		query: CEMETERY_SERVICES,
	});

	return {
		props: {
			location: locationQuery.data.locations[0],
			cemeteryServices: cemeteryServicesQuery.data.cemeteryServices,
		},
	};
}

export default ServicePage;
