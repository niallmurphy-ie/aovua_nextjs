import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ArticleSideBarCategories from './ArticleSideBarCategories';
import ArticleSideBarArticles from './ArticleSideBarArticles';
import Loading from '../../Loading';

import inst1 from '../../../public/images/images/instragram/1.jpg';
import inst2 from '../../../public/images/images/instragram/2.jpg';
import inst3 from '../../../public/images/images/instragram/3.jpg';
import inst4 from '../../../public/images/images/instragram/4.jpg';
import inst5 from '../../../public/images/images/instragram/5.jpg';
import inst6 from '../../../public/images/images/instragram/6.jpg';

import about from '../../../public/images/images/blog/profile.png';
import bicon from '../../../public/images/images/blog/icon.png';

const ArticleSidebar = ({ articles, categories }) => {


	const ClickHandler = () => {
		window.scrollTo(10, 0);
	};

	return (
		<div className={`col col-lg-4 col-12 `}>
			<div className="wpo-blog-sidebar">
				<ArticleSideBarCategories categories={categories} />
				<ArticleSideBarArticles articles={articles} />
				<div className="widget instagram">
					<h3>Service</h3>
					<ul className="d-flex">
						<li>
							<Link onClick={ClickHandler} href="/service-single">
								<a>
									<Image
										src={inst1}
										alt=""
										width="100%"
										height="100%"
										layout="responsive"
										objectFit="contain"
									/>
								</a>
							</Link>
						</li>
					</ul>
				</div>
				<div className="widget tag-widget">
					<h3>Tags</h3>
					<ul>
						<li>
							<Link
								onClick={ClickHandler}
								href="/blog-details-left"
							>
								<a>Travelling</a>
							</Link>
						</li>
					</ul>
				</div>
				<div className="widget get-intouch">
					<div className="get-item">
						<Image
							src={bicon}
							alt=""
							width="100%"
							height="100%"
							layout="responsive"
							objectFit="contain"
						/>
						<h2>Let’s start your dreamy journey</h2>
						<Link
							onClick={ClickHandler}
							className="theme-btn"
							href="/contact"
						>
							Get in touch
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ArticleSidebar;
