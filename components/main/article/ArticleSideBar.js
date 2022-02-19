import React from 'react';
import ArticleSideBarCategories from './ArticleSideBarCategories';
import ArticleSideBarArticles from './ArticleSideBarArticles';

const ArticleSidebar = ({ articles, categories }) => {

	return (
		<div className={`col col-lg-4 col-12 `}>
			<div className="wpo-blog-sidebar">
				<ArticleSideBarCategories categories={categories} />
				<ArticleSideBarArticles articles={articles} />
			</div>
		</div>
	);
};

export default ArticleSidebar;
