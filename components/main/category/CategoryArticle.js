import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import CKTeaser from '../../utils/CKTeaser';

function CategoryArticle({ categoryURLPrefix, article }) {
	if (!article) return null;

	return (
		<div className="post format-standard-image">
			{article.Thumbnail && (
				<div className="entry-media">
					<Image
						src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${article.Thumbnail.url}`}
						alt=""
						height={600}
						width={800}
						objectFit={'cover'}
						placeholder="blur"
						blurDataURL={`/_next/image?url=${process.env.NEXT_PUBLIC_STRAPI_URL}${article.Thumbnail.url}&w=128&q=1`}
					/>
				</div>
			)}
			<ul className="entry-meta">
				<li>{article.Date && article.Date}</li>
			</ul>
			<h3>
				<Link href={`/${categoryURLPrefix}/${article.slug}`}>
					<a>{article.Title}</a>
				</Link>
			</h3>
			{article.Body && <CKTeaser content={article.Body} length={120} />}
			<div className="entry-bottom">
				<Link href={`/${categoryURLPrefix}/${article.slug}`}>
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
