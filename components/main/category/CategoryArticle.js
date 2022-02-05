import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import CKTeaser from '../../utils/CKTeaser';

function CategoryArticle({ categoryURLPrefix, article }) {
	if (!article) return null;

	console.log('article', article);
	console.log('categoryURLPrefix', categoryURLPrefix);
	const ClickHandler = () => {
		window.scrollTo(10, 0);
	};

	return (
		<div className="post format-standard-image">
			{article.Thumbnail && (
				<div className="entry-media">
					<Image
						src={`http://localhost:1337${article.Thumbnail.url}`}
						alt=""
						height={600}
						width={800}
						objectFit={'cover'}
					/>
				</div>
			)}
			<ul className="entry-meta">
				<li>{article.Date && article.Date}</li>
			</ul>
			<h3>
				<Link
					onClick={ClickHandler}
					href={`/${categoryURLPrefix}/${article.slug}`}
				>
					<a>{article.Title}</a>
				</Link>
			</h3>
			{article.Body && <CKTeaser content={article.Body} length={120} />}
			<div className="entry-bottom">
				<Link
					onClick={ClickHandler}
					href={`/${categoryURLPrefix}/${article.slug}`}
				>
					<a className="read-more">Xem Thêm...</a>
				</Link>
			</div>
			{article.Thumbnail && article.Thumbnail.caption && (
				<div className="blog-thumb-badge">
					<div className="blog-thumb-text">
						<span>{article.Thumbnail.caption}</span>
					</div>
				</div>
			)}
		</div>
	);
}

export default CategoryArticle;
