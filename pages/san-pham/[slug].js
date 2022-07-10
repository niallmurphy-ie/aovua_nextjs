import { PRODUCT, PRODUCTS } from '../../lib/queries/productQueries';

import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import Service from '../../components/main/service/Service';
import client from '../../lib/apolloClient';
import WithTransition from '../../components/utils/WithTransition';

const ProductPage = ({ products, product }) => {
	const [url, setUrl] = useState('');
	let pageTitle;
	let breadcrumb;
	const og = { description: '', image: '' };
	if (product) {
		pageTitle = `${product.Name}` || '';
		og.description = `Sản phẩm thực dưỡng Ao Vua`;
		og.image = product.Thumbnail?.url || '';
		breadcrumb = null;
	}

	useEffect(() => {
		setUrl(window.location.href);
	}, []);

	return (
		<>
			<Head>
				<title>{pageTitle}</title>
				<meta name="description" content={pageTitle} />
				<meta property="og:title" content={pageTitle} />
				<meta property="og:description" content={og.description} />
				{og.image && (
					<meta
						property="og:image"
						content={`${process.env.NEXT_PUBLIC_STRAPI_URL}${og.image}`}
					/>
				)}
			</Head>
			<WithTransition>
				<Service pageTitle={product.Name} product={product} />
			</WithTransition>
		</>
	);
};

export async function getStaticPaths() {
	const paths = [];

	const productsQuery = await client.query({
		query: PRODUCTS,
	});

	console.log('productsQuery', productsQuery.data.products[0]);

	productsQuery.data.products.forEach((product) => {
		paths.push({
			params: {
				slug: product.slug,
			},
		});
	});

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps(context) {
	const slug = context.params.slug;
	const productQuery = await client.query({
		query: PRODUCT,
		variables: { slug },
	});

	return {
		props: {
			product: productQuery.data.products[0],
		},
	};
}

export default ProductPage;
