import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import Link from 'next/link';
import Loading from '../../Loading';
import CKContent from '../../utils/CKContent';

const Hero = ({ heroImages }) => {
	if (!heroImages) return <Loading />;

	// Slideshow Settings
	const settings = {
		dots: true,
		arrows: true,
		speed: 2200,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 4500,
		fade: true,
		lazyLoad: 'progressive',
	};
	return (
		<section className={`hero hero-style-2`}>
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
										<div className="col col-lg-8 col-md-12 col-12 slide-caption">
											<div className="slide-title">
												<h2>{hero.Name}</h2>
											</div>
											<div className="slide-subtitle">
												<CKContent
													content={hero.Description}
												/>
											</div>
											{hero.Link && (
												<div className="btns">
													<Link href={hero.Link}>
														<a className="theme-btn">
															Xem Thêm
														</a>
													</Link>
												</div>
											)}
										</div>
									</div>
								</div>
							</div>
						</div>
					))}
				</Slider>
			</div>
		</section>
	);
};

export default Hero;
