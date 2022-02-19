import React, { useState, useEffect } from 'react';
import Loading from '../../Loading';
import Article from './ArticleInNews';

const News = ({ articles }) => {
	if (!articles) return <Loading />;

	return (
		<div className="blog-area ptb-0-70" style={{ marginTop: '60px' }}>
			<div className="container">
				<div className="row">
					{articles.map((article, index) => (
						<Article
							key={index + article.slug}
							article={article}
							index={index}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default News;
