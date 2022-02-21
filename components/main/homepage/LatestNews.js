import React, { useState, useEffect } from 'react';
import Loading from '../../Loading';
import Article from './ArticleInLatestNews';
import Link from 'next/link';

const LatestNewsSection = ({ articles }) => {
	if (!articles) return <Loading />;

	return (
		<div className="blog-area ptb-0-70 section-padding">
			<div className="container">
				<div className="col-12">
					<div className="wpo-section-title">
						<h2>Tin Nổi Bật</h2>
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
						<Link href="/tin-tuc-tong-hop" >
							<a className="theme-btn-s2">Xem tất cả tin tức</a>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LatestNewsSection;
