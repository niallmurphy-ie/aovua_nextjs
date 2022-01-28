import React, { useState, useEffect } from 'react';
import Loading from '../../Loading';
import Article from './ArticleInLatestNews';

const LatestNewsSection = ({ articles }) => {
	if (!articles) return <Loading />;

	return (
		<div className="blog-area ptb-0-70">
			<div className="container">
				<div className="col-12">
					<div className="wpo-section-title">
						<h2>Tin Nổi Bật</h2>
					</div>
				</div>
				<div className="row">
					{articles.map((article, index) => (
						<Article
							key={index+article.slug}
							article={article}
							index={index}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default LatestNewsSection;
