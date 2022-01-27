import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Location from '../components/main/location/Location';
import { LOCATION } from '../lib/queries/locationQueries';
import client from '../lib/apolloClient';

export default function DaoNgocXanh({ location }) {
	return (
		<>
			<Head>
				<title>{location.Name}</title>
				<meta
					name="description"
					content="Khu du lịch Đầm Long meta description #toDO"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Location location={location} />
		</>
	);
}

export async function getStaticProps() {
	const { data } = await client.query({
		query: LOCATION,
		variables: {
			id: 5,
		},
	});

	return {
		props: {
			location: data.location,
		},
	};
}
