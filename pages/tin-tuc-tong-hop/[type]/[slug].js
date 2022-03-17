import Head from 'next/head';
import PageTitle from '../../../components/main/PageTitle';
import Article from '../../../components/main/article/Article';
import client from '../../../lib/apolloClient';
import {
	CATEGORY,
	ARTICLE,
	CATEGORIES,
	ARTICLES,
} from '../../../lib/queries/articles';
import WithTransition from '../../../components/utils/WithTransition';

const ArticlePage = ({ category, article, categories, articles }) => {
	console.log('article', article);
	return (
		<>
			<Head>
				<title>{article.Title}</title>
				<meta
					name="description"
					content={`${article.categories[0].CategoryName} - ${article.Title}`}
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<WithTransition>
				<PageTitle
					thumbnail={article.Thumbnail.url}
					pageTitle={article.Title}
					breadcrumb={null}
				/>
				<Article
					article={article}
					articles={articles}
					categories={categories}
				/>
			</WithTransition>
		</>
	);
};

export async function getStaticPaths() {
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
}

export async function getStaticProps(context) {
	const categoryQuery = client.query({
		query: CATEGORY,
		variables: {
			urlPrefix: `tin-tuc-tong-hop/${context.params.type}`, // First part is hard-coded in Strapi.
		},
	});

	const articleQuery = client.query({
		query: ARTICLE,
		variables: {
			slug: context.params.slug,
		},
	});

	const categoriesQuery = client.query({
		query: CATEGORIES,
	});

	const articlesQuery = client.query({
		query: ARTICLES,
		variables: {
			limit: 5,
		},
	});

	const responses = await Promise.all([
		categoryQuery,
		articleQuery,
		categoriesQuery,
		articlesQuery,
	]);

	return {
		props: {
			category: responses[0].data.categories[0],
			article: responses[1].data.articles[0],
			categories: responses[2].data.categories,
			articles: responses[3].data.articles,
		},
	};
}

export default ArticlePage;
