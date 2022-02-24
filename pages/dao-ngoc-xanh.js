import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Location from '../components/main/location/Location';
import { LOCATION } from '../lib/queries/locationQueries';
import client from '../lib/apolloClient';
import WithTransition from '../components/utils/WithTransition';

export default function DaoNgocXanh({ location }) {
	return (
		<>
			<Head>
				<title>{location.Name}</title>
				<meta
					name="description"
					content="Du lịch Khu Du Lịch Đảo Ngọc Xanh meta description #toDO"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<WithTransition>
				<Location location={location} />
			</WithTransition>
		</>
	);
}

export async function getStaticProps() {
	const { data } = await client.query({
		query: LOCATION,
		variables: {
			id: 4,
		},
	});

	return {
		props: {
			location: data.location,
		},
	};
}
