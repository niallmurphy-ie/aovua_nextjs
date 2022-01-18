import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import VideoModal from '../utils/ModalVideo';
import parse from 'html-react-parser'

const About = ({ greetingMessage, greetingImage, greetingVideo }) => {
	const ClickHandler = () => {
		window.scrollTo(10, 0);
	};

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
					<div className="col-lg-6 col-md-12 col-sm-12">
						<div className="banner-img">
							<Image
								src={`http://localhost:1337${greetingImage.url}`}
								alt={greetingImage.alternativeText}
								layout="fill"
								objectFit="contain"
							/>
							{videoModal ? (
								<ul className="banner-video">
									<li className="video-holder">
										{/* <VideoModal video={greetingVideo} /> */}
										<VideoModal />
									</li>
								</ul>
							) : null}
						</div>
					</div>
					<div className="col-lg-6 col-md-12 colsm-12">
						<div className="wpo-about-text">
							<div className="wpo-section-title">
								<span>About Us</span>
								{parse(greetingMessage)}
							</div>

							<div className="btns">
								<Link
									onClick={ClickHandler}
									href="/about"
									className="theme-btn-s2"
								>
									<a className="theme-btn-s2">
										More About Us
									</a>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
