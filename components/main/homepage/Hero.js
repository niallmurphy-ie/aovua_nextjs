import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import Link from 'next/link';
import Loading from '../../Loading';
import CKContent from '../../utils/CKContent';
import { FadeInWhenVisible } from '../../utils/Animations';

const Hero = ({ heroImages }) => {
	if (!heroImages) return <Loading />;

	// console.log('TiArrowRight', TiArrowRight);
	// Slideshow Settings
	const settings = {
		dots: false,
		arrows: true,
		speed: 2200,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 6000,
		fade: true,
		lazyLoad: 'progressive',
		pauseOnHover: true,
	};
	return (
		<section className={`hero hero-style-2`}>
			<FadeInWhenVisible speed={1} delay={0.25} initialScale={1.05}>
				<div className="hero-slider">
					<Slider {...settings}>
						{heroImages.map((hero, index) => (
							<div key={`hero_${index}`} className="slide">
								<div className="slide-inner">
									<Image
										src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${hero.HeroImage.url}`}
										alt={hero.Name}
										layout="fill"
										objectFit="cover"
										priority={index === 0 ? true : false}
										loading={index === 0 ? 'eager' : 'lazy'}
									/>
									<div className="container">
										<div className="row">
											<FadeInWhenVisible
												speed={1}
												delay={0.25}
												initialScale={0.8}
											>
												<div className="col col-lg-9 col-md-12 col-12 slide-caption">
													<div className="slide-title">
														<h2>{hero.Name}</h2>
													</div>
													<div className="slide-subtitle">
														<CKContent
															content={
																hero.Description
															}
														/>
													</div>
													{hero.Link && (
														<div className="btns">
															<Link
																href={hero.Link}
															>
																<a className="theme-btn">
																	Xem Thêm{' '}
																</a>
															</Link>
														</div>
													)}
												</div>
											</FadeInWhenVisible>
										</div>
									</div>
								</div>
							</div>
						))}
					</Slider>
				</div>
			</FadeInWhenVisible>
		</section>
	);
};

export default Hero;

