import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
// import ArticleSideBar from './ArticleSideBar';
import Loading from '../../Loading';
import parse from 'html-react-parser';
import CKContent from '../../utils/CKContent';

const Service = ({ service, services }) => {
	if (!service) return <Loading />;

	const ClickHandler = () => {
		window.scrollTo(10, 0);
	};

	return (
		<section className="wpo-blog-single-section section-padding">
			<div className="container">
				<div className="row">
					<div className={`col col-lg-8 col-12`}>
						<div className="wpo-blog-content clearfix">
							<div className="post">
								{service.Thumbnail ? (
									<div className="entry-media">
										<Image
											src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${service.Thumbnail.url}`}
											alt={
												service.Thumbnail
													.alternativeText
											}
											width="100%"
											height="80%"
											layout="responsive"
											objectFit="contain"
										/>
									</div>
								) : null}

								{service.Body ? (
									<CKContent content={service.Body} />
								) : null}
							</div>

							<div className="tag-share clearfix">
								{/* <div className="share">
									<ul>
										<li>
											<Link
												onClick={ClickHandler}
												href="/blog-details"
											>
												<i className="ti-facebook"></i>
											</Link>
										</li>
										<li>
											<Link
												onClick={ClickHandler}
												href="/blog-details"
											>
												<i className="ti-twitter-alt"></i>
											</Link>
										</li>
										<li>
											<Link
												onClick={ClickHandler}
												href="/blog-details"
											>
												<i className="ti-instagram"></i>
											</Link>
										</li>
									</ul>
								</div> */}
							</div>
						</div>
					</div>
					{/* <ArticleSideBar
						articles={articles}
						categories={categories}
					/> */}
				</div>
			</div>
		</section>
	);
};

export default Service;
