import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import Location from '../components/pages/Location';
import { LOCATION } from '../lib/queries';
import client from '../lib/apolloClient';

export default function AoVua({ location }) {
	// Initial State
	const [locationData, setLocationData] = useState(null);
	const [pageTitle, setPageTitle] = useState('');
	// Fill state
	useEffect(() => {
		setLocationData({
			name: location.Name,
			description: location.LocationDescription,
			media: location.Media,
			headerImage: location.WideHeaderImage,
		});
		setPageTitle(location.Name);
	}, [location]);

	return (
		<>
			<Head>
				<title>{pageTitle}</title>
				<meta
					name="description"
					content="Generated by create next app"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Layout home={false}>
				<Location locationData={locationData} />
			</Layout>
		</>
	);
}

export async function getStaticProps() {
	const { data } = await client.query({
		query: LOCATION,
		variables: {
			id: 1,
		},
	});

	return {
		props: {
			location: data.location,
		},
	};
}
