import React from 'react';
import Link from 'next/link';

const CategoriesListing = ({ categories }) => {
	if (!categories) return null;
	return (
		<div className="widget category-widget">
			<h3>Chuyên mục tin tức</h3>
			<ul>
				{categories.map((category, cat) => (
					<li key={cat}>
						<Link href={`/${category.urlPrefix}`}>
							<a>
								{category.CategoryName}{' '}
								<span>({category.articles.length})</span>
							</a>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default CategoriesListing;
