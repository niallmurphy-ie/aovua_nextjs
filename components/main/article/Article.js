import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ArticleSideBar from './ArticleSideBar';
import Loading from '../../Loading';
import parse from 'html-react-parser';
import CKContent from '../../utils/CKContent';

const Article = ({ article, articles, categories }) => {
	if (!article) return <Loading />;

	return (
		<section className="wpo-blog-single-section section-padding">
			<div className="container">
				<div className="row">
					{/* <div className={`col col-lg-8 col-12 ${props.blRight}`}> */}
					<div className={`col col-lg-8 col-12`}>
						<div className="wpo-blog-content clearfix">
							<div className="post">
								<ul className="entry-meta">
									<li>{article.Date}</li>
								</ul>
								<h2>{article.Title}</h2>
								<CKContent content={article.Body} />
							</div>

							<div className="tag-share clearfix">
								<div className="tag">
									{article.categories && (
										<ul>
											{article.categories.map(
												(category) => (
													<li
														key={
															category.CategoryName
														}
													>
														<Link
															href={
																category.urlPrefix
															}
														>
															<a>
																{
																	category.CategoryName
																}
															</a>
														</Link>
													</li>
												)
											)}
										</ul>
									)}
								</div>
								{/* <div className="share">
									<ul>
										<li>
											<Link
												href="/blog-details"
											>
												<i className="ti-facebook"></i>
											</Link>
										</li>
										<li>
											<Link
												href="/blog-details"
											>
												<i className="ti-twitter-alt"></i>
											</Link>
										</li>
										<li>
											<Link
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
					<ArticleSideBar
						articles={articles}
						categories={categories}
					/>
				</div>
			</div>
		</section>
	);
};

export default Article;
