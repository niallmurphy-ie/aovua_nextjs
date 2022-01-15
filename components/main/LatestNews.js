import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { LATEST_NEWS } from '../../lib/queries';
import Loading from '../Loading';
import Article from './latestnews/ArticleInLatestNews'

const LatestNewsSection = () => {
	// Blogs
	const [blogs, setBlogs] = useState([]);
	const blogsQuery = useQuery(LATEST_NEWS);

	// Set up blogs
	useEffect(() => {
		if (blogsQuery.data) {
			setBlogs(blogsQuery.data.articles);
		}
	}, [blogsQuery.data]);

	if (blogsQuery.loading) return <Loading />;
	if (blogsQuery.error) return <p>Error</p>;

	return (
		<div className="blog-area ptb-100-70">
			<div className="container">
				<div className="col-12">
					<div className="wpo-section-title">
						<h2>Tin Nổi Bật</h2>
					</div>
				</div>
				<div className="row">
					{blogs.map((article, blg) => (
						<Article key={blg + article.slug} article={article} />
					))}
				</div>
			</div>
		</div>
	);
};

export default LatestNewsSection;
