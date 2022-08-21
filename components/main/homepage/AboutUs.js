import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import VideoModal from '../../utils/ModalVideo';
import parse from 'html-react-parser';
import CKContent from '../../utils/CKContent';
import { FadeInWhenVisible } from '../../utils/Animations';

const About = ({ greetingMessage, greetingImage, greetingYoutubeURL }) => {
	// Fix hydration error caused by window not existing in node.
	// useEffect only runs in the browser.
	// This is nextjs specific.
	const [videoModal, setVideoModal] = useState(false);
	useEffect(() => {
		setVideoModal(true);
	}, []);

	if (!greetingMessage || !greetingImage) return null;

	return (
		<div className="wpo-about-area-2 section-padding">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-6 col-md-12 colsm-12">
						<div className="wpo-about-text">
							<div className="wpo-section-title">
								<CKContent content={greetingMessage} />
							</div>

							<div className="btns view-more-about">
								<Link
									href="/gioi-thieu/ve-cong-ty"
									className="theme-btn-s2"
								>
									<a className="view-more-about theme-btn-s2">
										Đọc thêm
									</a>
								</Link>
							</div>
						</div>
					</div>
					<div className="col-lg-6 col-md-12 col-sm-12">
						<FadeInWhenVisible
							speed={0.75}
							initialScale={1.05}
						>
							<div className="banner-img">
								<Image
									src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${greetingImage.url}`}
									alt={greetingImage.alternativeText}
									layout="responsive"
									width="100%"
									height="75%"
									objectFit="cover"
									// loading="eager"
									placeholder="blur"
									blurDataURL={`/_next/image?url=${process.env.NEXT_PUBLIC_STRAPI_URL}${greetingImage.url}?w=32&q=1`}
								/>
								{videoModal ? (
									<ul className="banner-video">
										<li className="video-holder">
											<VideoModal
												greetingYoutubeURL={
													greetingYoutubeURL
												}
											/>
										</li>
									</ul>
								) : null}
							</div>
						</FadeInWhenVisible>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
