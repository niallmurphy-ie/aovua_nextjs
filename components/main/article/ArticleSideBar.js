import React from 'react';
import ArticleSideBarCategories from './ArticleSideBarCategories';
import ArticleSideBarArticles from './ArticleSideBarArticles';

const ArticleSidebar = ({ articles, categories }) => {
	return (
		<div className="wpo-blog-sidebar">
			<ArticleSideBarCategories categories={categories} />
			<ArticleSideBarArticles articles={articles} />
		</div>
	);
};

export default ArticleSidebar;
