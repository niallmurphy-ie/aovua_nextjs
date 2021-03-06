import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { articleUrl } from '../../../lib/articles';

const ArticlesPostsListing = ({ articles }) => {
	if (!articles) return null;
	return (
		<div className="widget recent-post-widget">
			<h3>Tin nổi bật</h3>
			<div className="posts">
				{articles.map((post, id) => (
					<div key={id + post.Title} className="post">
						<div className="img-holder">
							<Image
								src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${post.Thumbnail.formats.thumbnail.url}`}
								alt=""
								width="100%"
								height="100%"
								layout="responsive"
								objectFit="cover"
							/>
						</div>
						<div className="details">
							<h4>
								<Link href={articleUrl(post)}>
									<a>{post.Title}</a>
								</Link>
							</h4>
							<span className="date">{post.Date}</span>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default ArticlesPostsListing;
