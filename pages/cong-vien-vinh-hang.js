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
				<meta
					name="description"
					content="Công viên Vĩnh Hằng meta description #toDO"
				/>
				<link rel="icon" href="/favicon.ico" />
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
