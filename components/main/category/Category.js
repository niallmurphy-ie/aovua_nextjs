import React from 'react';

// import ArticleSideBar from '../ArticleSideBar';
import CategoryArticle from './CategoryArticle';
import ArticleSidebar from '../article/ArticleSideBar';

// Category contains articles
const ArticleList = ({ category, categories }) => {
	if (!category) return null;

	return (
		<section className="wpo-blog-pg-section section-padding">
			<div className="container">
				<div className="row">
					<div className={`col col-lg-8 col-12 `}>
						<div className="wpo-blog-content">
							{category.articles.map((article) => (
								<CategoryArticle
									key={article.slug}
									article={article}
									categoryURLPrefix={category.urlPrefix}
								/>
							))}
						</div>
					</div>
					<div className={`col col-lg-4 col-12 `}>
						<ArticleSidebar
							articles={category.articles}
							categories={categories}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ArticleList;
