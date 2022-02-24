import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from 'next/link';
import Image from 'next/image';
import CKContent from '../../utils/CKContent';

const Sightseeing = ({ sightseeingText, sightseeings }) => {
	const settings = {
		dots: true,
		arrows: false,
		speed: 3000,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2500,
		responsive: [
			{
				breakpoint: 1440,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
				},
			},
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
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
		<div className="destination-area-2 section-padding">
			<div className="container-fluid">
				<div className="row align-items-center">
					<div className="col-lg-5">
						<div className="destination-text">
							<div className="wpo-section-title">
								<h2>Các Điểm Tham Quan</h2>
							</div>
							{sightseeingText && (
								<CKContent content={sightseeingText} />
							)}
							<div className="btns">
								<Link
									href="/destination"
									className="theme-btn-s2"
								>
									<a>Khu du lịch Ao Vua</a>
								</Link>
							</div>
						</div>
					</div>
					<div className="col-lg-7">
						<div className="country-r">
							<div className="country-carousel">
								<Slider {...settings}>
									{sightseeings.map((destination, index) => (
										<div
											className="item"
											key={`sightseeing_${index}`}
										>
											<div className="destination-item">
												<div className="destination-img">
													<Image
														src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${destination.Thumbnail.url}`}
														alt=""
														height={500}
														width={400}
														objectFit={'cover'}
													/>
												</div>
												<div className="destination-content">
													<div className="content-left">
														<h5>
															<Link
																href={`/${destination.locations[0].urlPrefix}/cac-diem-tham-quan/${destination.slug}`}
															>
																<a>
																	{
																		destination.Name
																	}
																</a>
															</Link>
														</h5>
														<small>
															{
																destination
																	.locations[0]
																	.Name
															}
														</small>
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
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Sightseeing;
