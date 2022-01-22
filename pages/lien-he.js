import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import Contact from '../components/main/contact/Contact';
import { CONTACT_PAGE } from '../lib/queries';
import client from '../lib/apolloClient';

export default function ContactPage({ contact }) {
	return (
		<>
			<Head>
				<title>Liên Hệ</title>
				<meta
					name="description"
					content="Du lịch Ao Vua Xanh trải dài dưới chân núi Tản Viên, thuộc thôn Bát Đầm – xã Tản Lĩnh – huyện Ba Vì – thành phố Hà Nội."
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Layout home={false}>
				<Contact contact={contact} />
			</Layout>
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
