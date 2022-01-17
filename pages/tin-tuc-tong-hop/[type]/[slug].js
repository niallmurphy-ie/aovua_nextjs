import { useRouter } from 'next/router';
import client from '../../../lib/apolloClient';
import { CATEGORY, ARTICLE, CATEGORIES } from '../../../lib/queries';

const ArticlePage = ({ category, article }) => {
	const router = useRouter();
	const { type, slug } = router.query;

	console.log(category, article);
	return (
		<p>
			{type} - {slug}
		</p>
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
			slug: context.params.slug
		},
	});

	const responses = await Promise.all([categoryQuery, articleQuery]);

	return {
		props: {
			category: responses[0].data.categories[0],
			article: responses[1].data.articles[0],
		},
	};
}

export default ArticlePage;
