import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { articleUrl } from '../../../lib/articles';
import Loading from '../../../components/Loading';

function Article({ article, index }) {
	const ClickHandler = () => {
		window.scrollTo(10, 0);
	};

	return (
		<div className="col-lg-4 col-md-6 col-12">
			<div className="blog-item">
				<div className="blog-img">
					<Link onClick={ClickHandler} href={articleUrl(article)}>
						<a>
							<Image
								src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${article.Thumbnail.url}`}
								alt=""
								// width={600}
								// height={400}
								// layout="responsive"
								// objectFit="contain"
								width={600}
								height={400}
								objectFit="cover"
								priority={index === 0 ? true : false}
								placeholder={<Loading />}
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
