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
	const breadcrumb = {
		name: 'Tin tức',
		url: '/tin-tuc-tong-hop',
	};

	return (
		<>
			<Head>
				<title>{article.Title} | Ao Vua JSC.</title>
				<meta
					name="og:title"
					content={`${article.Title} | Ao Vua JSC.`}
				/>
				<meta
					name="description"
					content={`${article.Title} | Ao Vua JSC.`}
				/>
				{article.Thumbnail && (
					<meta
						property="og:image"
						content={`${process.env.NEXT_PUBLIC_STRAPI_URL}${article.Thumbnail?.url}`}
					/>
				)}
				<meta property="og:type" content="article" />
			</Head>
			<WithTransition>
				<PageTitle
					headerImage={article.WideHeaderImage?.url}
					thumbnail={article.Thumbnail.url}
					pageTitle={article.Title}
					breadcrumb={breadcrumb}
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
