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
				<meta name="og:title" content={location.Name} />
				<meta
					name="description"
					content="Khi đến với Khu du lịch sinh thái Đầm Long, quý khách sẽ được hoà mình vào thiên nhiên và tận hưởng những trải nghiệm khó quên."
				/>
				<meta
					name="og:image"
					content={`${process.env.NEXT_PUBLIC_STRAPI_URL}${location.Thumbnail?.url}`}
				/>
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
			id: 5,
			limit: 3,
		},
	});

	return {
		props: {
			location: data.location,
		},
	};
}
