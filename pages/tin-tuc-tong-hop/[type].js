import { useRouter } from 'next/router';
import { CATEGORY, CATEGORIES } from '../../lib/queries/articles';
import client from '../../lib/apolloClient';

const Post = ({ category }) => {
	console.log(category);
	return <p>hELLL</p>;
};

export default Post;

export const getStaticProps = async ({ params }) => {
	const categoryQuery = await client.query({
		query: CATEGORY,
		variables: {
			urlPrefix: `tin-tuc-tong-hop/${params.type}`, // First part is hard-coded in Strapi.
		},
	});

	return {
		props: {
			category: categoryQuery.data.categories[0],
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
