import React from 'react';
import { FadeInWhenVisible } from '../../utils/Animations';
import Article from '../homepage/ArticleInLatestNews';
import Link from 'next/link';

const LocationNews = ({ location }) => {
	const articles = location.articles;

	return (
		<div className="blog-area ptb-0-70 section-padding">
			<FadeInWhenVisible delay={0} speed={0.5} initialScale={0.85}>
				<div className="container">
					<div className="col-12">
						<div className="wpo-section-title text-center">
							<h2>Tin nổi bật tại {location.Name}</h2>
						</div>
					</div>
					<div className="row">
						{articles.map((article, index) => (
							<Article
								key={index + article.slug}
								article={article}
								index={index}
							/>
						))}
					</div>
					<div className="row view-more-news">
						<div className="col-12 text-center">
							<Link href="/tin-tuc-tong-hop">
								<a className="theme-btn-s2">
									Xem tất cả tin tức
								</a>
							</Link>
						</div>
					</div>
				</div>
			</FadeInWhenVisible>
		</div>
	);
};

export default LocationNews;
