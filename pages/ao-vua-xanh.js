import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import Location from '../components/main/location/Location';
import { LOCATION } from '../lib/queries';
import client from '../lib/apolloClient';

export default function AoVua({ location }) {
	return (
		<>
			<Head>
				<title>{location.Name}</title>
				<meta
					name="description"
					content="Du lịch Ao Vua Xanh trải dài dưới chân núi Tản Viên, thuộc thôn Bát Đầm – xã Tản Lĩnh – huyện Ba Vì – thành phố Hà Nội."
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Layout home={false}>
				<Location location={location} />
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
