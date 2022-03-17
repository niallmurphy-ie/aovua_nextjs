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
					content="Toạ lạc trên một bãi sông Đà, Đảo Ngọc Xanh sở hữu một vị trí bậc nhất để du khách có thể tận hưởng kỳ nghỉ của mình."
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
			id: 4,
			limit: 3,
		},
	});

	return {
		props: {
			location: data.location,
		},
	};
}
