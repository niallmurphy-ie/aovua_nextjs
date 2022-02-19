import React from 'react';
import { ARTICLES } from '../../lib/queries/articles';
import client from '../../lib/apolloClient';
import News from '../../components/main/news/News';

const NewsPage = ({ articles }) => {
	return <News articles={articles} />;
};

export const getStaticProps = async () => {
	const articlesQuery = await client.query({
		query: ARTICLES,
	});

	return {
		props: {
			articles: articlesQuery.data.articles,
		},
	};
};

export default NewsPage;
