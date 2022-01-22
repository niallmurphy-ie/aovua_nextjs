import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { articleUrl } from '../../../lib/articles';

function Article({ article, blg }) {
	const ClickHandler = () => {
		window.scrollTo(10, 0);
	};

	return (
		<div className="col-lg-4 col-md-6 col-12" key={blg}>
			<div className="blog-item">
				<div className="blog-img">
					<Link onClick={ClickHandler} href={articleUrl(article)}>
						<a>
							<Image
								src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${article.Thumbnail.url}`}
								alt=""
								width="100%"
								height="100%"
								layout="responsive"
								objectFit="contain"
							/>
						</a>
					</Link>
				</div>
				<div className="blog-content">
					<ul className="post-meta">
						<li>
							{article.categories.map((b) => (
								<Link
									key={`article_category_${b.urlPrefix}`}
									onClick={ClickHandler}
									href={`/${b.urlPrefix}`}
								>
									<a>{b.CategoryName}</a>
								</Link>
							))}{' '}
						</li>
						<li>{article.date}</li>
					</ul>
					<h3>
						<Link onClick={ClickHandler} href={articleUrl(article)}>
							<a>{article.Title}</a>
						</Link>
					</h3>
					<Link onClick={ClickHandler} href={articleUrl(article)}>
						<a>Xem Thêm</a>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Article;
