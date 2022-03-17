import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Contact from '../components/main/contact/Contact';
import { CONTACT_PAGE } from '../lib/queries';
import client from '../lib/apolloClient';
import WithTransition from '../components/utils/WithTransition';

export default function ContactPage({ contact }) {
	const title = 'Liên hệ | Ao Vua JSC.';

	// Current url from router
	let url = '';

	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name="og:title" content={title} />
				<meta
					name="description"
					content="Công ty cổ phần ao vua, du lịch nghỉ dưỡng, vui chơi giải trí, du lịch cuối tuần, du lịch Ba Vì."
				/>
				{contact.WideHeaderImage && (
					<meta
						property="og:image"
						content={`${process.env.NEXT_PUBLIC_STRAPI_URL}${contact.WideHeaderImage?.url}`}
					/>
				)}
			</Head>
			<WithTransition>
				<Contact contact={contact} />
			</WithTransition>
		</>
	);
}

export async function getStaticProps() {
	const { data } = await client.query({
		query: CONTACT_PAGE,
	});

	return {
		props: {
			contact: data.contact,
		},
	};
}
