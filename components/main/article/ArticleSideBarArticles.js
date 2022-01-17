import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useQuery } from '@apollo/client';
import { ARTICLES } from '../../../lib/queries';
import Loading from '../../Loading';
import { articleUrl } from '../../../lib/articles';

const ArticlesPostsListing = () => {
	const ClickHandler = () => {
		window.scrollTo(10, 0);
	};

	const [posts, setPosts] = useState([]);
	const { loading, error, data } = useQuery(ARTICLES);

	useEffect(() => {
		if (data) {
			setPosts(data.articles);
		}
	}, [data]);

	if (loading) return <Loading />;
	if (error) return <div>Error</div>;

	console.log(`posts`, posts);

	return (
		<div className="widget recent-post-widget">
			<h3>Tin Nổi Bật</h3>
			<div className="posts">
				{posts.map((post, id) => (
					<div key={id + post.Title} className="post">
						<div className="img-holder">
							<Image
								src={`http://localhost:1337${post.Thumbnail.formats.thumbnail.url}`}
								alt=""
								width="100%" height="100%" layout="responsive" objectFit="contain"
							/>
						</div>
						<div className="details">
							<h4>
								<Link
									onClick={ClickHandler}
									href={articleUrl(post)}
								>
									{post.Title}
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
