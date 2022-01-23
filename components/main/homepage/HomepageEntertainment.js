import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from 'next/link';
import Image from 'next/image';
import dsn1 from '../../../public/images/images/destination/img-6.jpg';
import dsn2 from '../../../public/images/images/destination/img-5.jpg';
import dsn3 from '../../../public/images/images/destination/img-9.jpg';
import dsn4 from '../../../public/images/images/destination/img-7.jpg';
import dsn5 from '../../../public/images/images/destination/img-8.jpg';

const Entertainment = ({ entertainment}) => {
	const settings = {
		dots: false,
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

	const ClickHandler = () => {
		window.scrollTo(10, 0);
	};

	console.log('entertainment', entertainment);

	return (
		<div className="entertainment-area-2 section-padding">
			<div className="container-fluid">
				<div className="row align-items-center">
					<div className="col-lg-5">
						<div className="entertainment-text">
							<div className="wpo-section-title">
								<h2>Vui Chơi Giải Trí</h2>
							</div>
							<p>
								Hey baby x
							</p>
							<div className="btns">
								<Link
									onClick={ClickHandler}
									href="/destination"
									className="theme-btn-s2"
								>
									<a className='theme-btn-s2'>Xem tất cả</a>
								</Link>
							</div>
						</div>
					</div>
					<div className="col-lg-7">
						<div className="entertainment-r">
							<div className="entertainment-carousel">
								<Slider {...settings}>
									{entertainment.map((ent, index) => (
										<div className="item" key={ent.Name}>
											<div className="entertainment-item">
												<div className="entertainment-img">
													<Image
														src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${ent.Thumbnail.url}`}
														alt=""
														height={400}
														width={300}
														layout="responsive"
														objectFit="cover"

													/>
												</div>
												<div className="entertainment-content">
													<div className="content-left">
														<h5>
															<Link
																onClick={
																	ClickHandler
																}
																href="/"
															>
																{ent.Name}
															</Link>
														</h5>
														<small>
															{ent.locations[0].Name}
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

export default Entertainment;
