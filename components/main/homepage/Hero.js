import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';

const Hero = (props) => {
	if (!props.heroImages) return null;

	// Slideshow Settings
	const settings = {
		dots: true,
		arrows: true,
		speed: 2200,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 7500,
		fade: true,
		// lazyLoad: true,
	};
	return (
		<section className={`hero ${props.heroClass}`}>
			<div className="hero-slider">
				<Slider {...settings}>
					{props.heroImages.map((image, index) => (
						// <div key={index} className="slide">
						// 	<div
						// 		className="slide-inner"
						// 		style={{
						// 			backgroundImage: `url(${process.env.NEXT_PUBLIC_STRAPI_URL}${image.url})`,
						// 		}}
						// 	>
						// 		<div className="container">
						// 			<div className="row">
						// 				<div className="col col-lg-8 col-md-12 col-12 slide-caption">
						// 					<div className="slide-title">
						// 						<h2>{image.alternativeText}</h2>
						// 					</div>
						// 					<div className="slide-subtitle">
						// 						<p>{image.caption}</p>
						// 					</div>
						// 				</div>
						// 			</div>
						// 		</div>
						// 	</div>
						// </div>
						<div key={`hero_${index}`} className="slide">
							<div className="slide-inner">
								<Image
									src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${image.url}`}
									alt={image.alternativeText}
									layout="fill"
									objectFit="cover"
									priority={true}
								/>
								<div className="container">
									<div className="row">
										<div className="col col-lg-8 col-md-12 col-12 slide-caption">
											<div className="slide-title">
												<h2>{image.alternativeText}</h2>
											</div>
											<div className="slide-subtitle">
												<p>{image.caption}</p>
											</div>
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
