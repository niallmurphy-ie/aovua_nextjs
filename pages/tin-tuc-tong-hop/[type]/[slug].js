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
	const categoriesQuery = client.query({
		query: CATEGORIES,
	});

	const response = await categoriesQuery;

	console.log(response);

	const paths = response.data.categories.map((category) => {
		if (category.articles.length > 0) {
			const slugs = category.articles.map((article) => article.slug);
			return slugs.map((slug) => ({
				params: {
					type: category.urlPrefix,
					slug,
				},
			}));
		} else {
			return null;
		}
	});

	const pathsFiltered = paths.filter((path) =>
		path !== null && path !== undefined
	);

	// console.log(pathsFiltered);

	console.log(pathsFiltered);

	return {
		paths: pathsFiltered,
		fallback: false,
	};
}

export async function getStaticProps() {
	const categoryQuery = client.query({
		query: CATEGORY,
		variables: {
			urlPrefix: type,
		},
	});

	const articleQuery = client.query({
		query: ARTICLE,
		variables: {
			slug,
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
