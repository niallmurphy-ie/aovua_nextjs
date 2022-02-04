import React from 'react';
import Link from 'next/link';

const CategoriesListing = ({ categories }) => {
	const ClickHandler = () => {
		window.scrollTo(10, 0);
	};

	return (
		<div className="widget category-widget">
			<h3>Chuyên Mục Tin Tức</h3>
			<ul>
				{categories.map((category, cat) => (
					<li key={cat}>
						<Link
							onClick={ClickHandler}
							href={`/${category.urlPrefix}`}
						>
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
