import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { CATEGORIES } from '../../../lib/queries';
import Link from 'next/link';

const CategoriesListing = () => {
	const ClickHandler = () => {
		window.scrollTo(10, 0);
	};

	const [categories, setCategories] = useState([]);
	const categoriesQuery = useQuery(CATEGORIES);

	useEffect(() => {
		if (categoriesQuery.data) {
			setCategories(categoriesQuery.data.categories);
		}
	}, [categoriesQuery.data]);

	return (
		<div className="widget category-widget">
			<h3>Chuyên Mục Tin Tức</h3>
			<ul>
				{categories.map((category, cat) => (
					<li key={cat}>
						<Link onClick={ClickHandler} href={category.urlPrefix}>
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
