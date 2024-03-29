import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { articleUrl } from '../../../lib/articles';
import Loading from '../../../components/Loading';
import { ScrollWhenVisible } from '../../../components/utils/Animations';

function Article({ article, index }) {
	return (
		<div className="col-lg-4 col-md-6 col-12">
			<ScrollWhenVisible speed={1} delay={0} direction="up">
				<div className="blog-item">
					<div className="blog-img">
						<Link href={articleUrl(article)}>
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
									// loading={index === 0 ? 'eager' : 'lazy'}
									placeholder="blur"
									blurDataURL={`/_next/image?url=${process.env.NEXT_PUBLIC_STRAPI_URL}${article.Thumbnail.url}?w=128&q=1`}
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
										href={`/${b.urlPrefix}`}
									>
										<a>{b.CategoryName}</a>
									</Link>
								))}{' '}
							</li>
							<li>{article.date}</li>
						</ul>
						<h3>
							<Link href={articleUrl(article)}>
								<a>{article.Title}</a>
							</Link>
						</h3>
						<Link href={articleUrl(article)}>
							<a>Xem Thêm</a>
						</Link>
					</div>
				</div>
			</ScrollWhenVisible>
		</div>
	);
}

export default Article;
