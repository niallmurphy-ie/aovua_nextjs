import React, { useState, useEffect } from 'react';
import Loading from '../../Loading';
import Article from './ArticleInNews';
import CategoriesListing from '../article/ArticleSideBarCategories';

const News = ({ articles, categories }) => {
	if (!articles) return <Loading />;

	return (
		<div className="blog-area ptb-0-70" style={{ marginTop: '60px' }}>
			<div className="container-fluid">
				<div className="row">
					<div className={`col col-lg-9 col-12`}>
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
					<div className={`col col-lg-3 col-12`}>
						<div className="wpo-blog-sidebar">
							<div className="widget category-widget">
								<CategoriesListing categories={categories} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default News;
