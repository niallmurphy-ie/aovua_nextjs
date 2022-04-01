import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from 'next/link';
import Image from 'next/image';
import { ScrollWhenVisible, FadeInWhenVisible } from '../../utils/Animations';

const LocationEvents = ({ location }) => {
	const settings = {
		dots: false,
		arrows: true,
		speed: 800,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		initialSlide: 1,
		autoplaySpeed: 102500,
		lazyLoad: 'progressive',
		infinite: true,
		responsive: [
			{
				breakpoint: 1440,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
				},
			},
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
				},
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	return (
		<div className="full-width-carousel entertainment-service section-padding">
			<div className="container">
				<div className="col-12">
					<div className="wpo-section-title text-center">
						<h2>Hội Thảo Sự Kiện</h2>
					</div>
				</div>
				<ScrollWhenVisible delay={0.5} direction="right">
					<div className="entertainment-carousel">
						<Slider {...settings}>
							{location.events.map((ent, index) => (
								<div className="item" key={ent.Name}>
									<div className="entertainment-item">
										<div className="entertainment-img">
											<Image
												src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${ent.Thumbnail.url}`}
												alt=""
												height="400px"
												width="350px"
												objectFit="cover"
												loading={
													index === 0
														? 'eager'
														: 'lazy'
												}
												lazyBoundary="500px"
												placeholder="blur"
												blurDataURL={`/_next/image?url=${process.env.NEXT_PUBLIC_STRAPI_URL}${ent.Thumbnail.url}&w=128&q=1`}
											/>
										</div>
										<div className="entertainment-content">
											<div className="content-left">
												<h5>
													<Link
														href={`/${location.urlPrefix}/hoi-thao-su-kien/${ent.slug}`}
													>
														{ent.Name}
													</Link>
												</h5>
												<small>{location.Name}</small>
											</div>
											{/* <div className="content-right">
														<h5>{dest.price}</h5>
														<span>{dest.per}</span>
													</div> */}
										</div>
									</div>
								</div>
							))}
						</Slider>
					</div>
				</ScrollWhenVisible>
				{location.events && (
					<div className="row view-more-events">
						<div className="col-12 btns text-center">
							<Link
								href={`/${location.urlPrefix}/hoi-thao-su-kien`}
							>
								<a className="theme-btn-s2">
									Xem tất cả hội thảo sự kiện
								</a>
							</Link>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default LocationEvents;
