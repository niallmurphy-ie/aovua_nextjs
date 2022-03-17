import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Location from '../components/main/location/Location';
import { LOCATION } from '../lib/queries/locationQueries';
import {
	CEMETERY_SAMPLES,
	CEMETERY_SERVICES,
} from '../lib/queries/cemeteryQueries';
import client from '../lib/apolloClient';
import WithTransition from '../components/utils/WithTransition';

export default function DaoNgocXanh({
	location,
	cemeterySamples,
	cemeteryServices,
}) {
	return (
		<>
			<Head>
				<title>{location.Name}</title>
				<meta name="og:title" content={location.Name} />
				<meta
					name="description"
					content="Một con đường đưa ta vào cuộc sống bình an thư thái, nơi ta có thể tìm thấy sự thanh thản chở che, nơi ta có thể cảm nhận tình yêu thương vô bờ bến, nơi chữ hiếu chữ nghĩa vẹn tròn."
				/>
				<meta
					name="og:image"
					content={`${process.env.NEXT_PUBLIC_STRAPI_URL}${location.Thumbnail?.url}`}
				/>
			</Head>
			<WithTransition>
				<Location
					cemeterySamples={cemeterySamples}
					cemeteryServices={cemeteryServices}
					location={location}
				/>
			</WithTransition>
		</>
	);
}

export async function getStaticProps() {
	const locationQuery = client.query({
		query: LOCATION,
		variables: {
			id: 6,
		},
	});

	const cemeterySamplesQuery = client.query({
		query: CEMETERY_SAMPLES,
	});

	const cemeteryServicesQuery = client.query({
		query: CEMETERY_SERVICES,
		variables: {
			limit: 6,
		},
	});

	const responses = await Promise.all([
		locationQuery,
		cemeterySamplesQuery,
		cemeteryServicesQuery,
	]);

	return {
		props: {
			location: responses[0].data.location,
			cemeterySamples: responses[1].data.cemeterySamples,
			cemeteryServices: responses[2].data.cemeteryServices,
		},
	};
}
