import PageTitle from '../../components/main/PageTitle';
import Category from '../../components/main/category/Category';
import { CATEGORY, CATEGORIES } from '../../lib/queries/articles';
import Head from 'next/head';
import client from '../../lib/apolloClient';
import WithTransition from '../../components/utils/WithTransition';

const Post = ({ category, categories }) => {
	const breadcrumb = category
		? {
				url: '/tin-tuc-tong-hop',
				name: `Tin tức`,
		  }
		: null;

	return (
		<>
			<Head>
				<title>{category?.CategoryName} | Ao Vua JSC.</title>
				<meta
					name="og:title"
					content={`${category?.CategoryName} | Ao Vua JSC.`}
				/>
				<meta
					name="description"
					content={`${category?.Category} | Ao Vua JSC.`}
				/>
				<meta name="og:image" content="/images/logo.png" />
			</Head>
			<WithTransition>
				<PageTitle
					pageTitle={category.CategoryName}
					breadcrumb={breadcrumb}
				/>
				<Category category={category} categories={categories} />
			</WithTransition>
		</>
	);
};

export default Post;

export const getStaticProps = async ({ params }) => {
	const categoryQuery = await client.query({
		query: CATEGORY,
		variables: {
			urlPrefix: `tin-tuc-tong-hop/${params.type}`, // First part is hard-coded in Strapi.
		},
	});

	const categoriesQuery = await client.query({
		query: CATEGORIES,
	});

	return {
		props: {
			category: categoryQuery.data.categories[0],
			categories: categoriesQuery.data.categories,
		},
	};
};

export const getStaticPaths = async () => {
	const categoriesQuery = await client.query({
		query: CATEGORIES,
	});

	const paths = [];
	categoriesQuery.data.categories.forEach((category) => {
		if (category.articles.length > 0) {
			const params = [];
			const slugs = category.articles.map((article) => article.slug);
			slugs.forEach((slug) =>
				params.push({
					type: category.urlPrefix.split('/')[1], // First part is hard-coded in Strapi.
					slug,
				})
			);
			params.forEach((param) => paths.push({ params: param }));
		}
	});

	return {
		paths,
		fallback: false,
	};
};
