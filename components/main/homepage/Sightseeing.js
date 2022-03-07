import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from 'next/link';
import Image from 'next/image';
import CKContent from '../../utils/CKContent';
import { FadeInWhenVisible } from '../../utils/Animations';

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
							{/* {sightseeingText && (
								<CKContent content={sightseeingText} />
							)} */}
							<SightseeingViewMore />
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

const SightseeingViewMore = () => {
	const [showButtonLocations, setShowButtonLocations] = useState(false);

	const buttonLocations = [
		{
			title: 'Ao Vua',
			link: '/ao-vua-xanh/cac-diem-tham-quan',
		},
		{
			title: 'Đảo Ngọc Xanh',
			link: '/dao-ngoc-xanh/cac-diem-tham-quan',
		},
		{
			title: 'Đầm Long',
			link: '/dam-long/cac-diem-tham-quan',
		},
	];

	return (
		<div
			style={{
				display: 'block',
			}}
			className="row "
		>
			<div id="sightseeing-view-more" className="col-12 ">
				{!showButtonLocations && (
					<button
						onClick={() => {
							setShowButtonLocations(!showButtonLocations);
						}}
						className="theme-btn-s2"
					>
						Xem Thêm
					</button>
				)}
				{showButtonLocations && (
					<div className="row">
						<div className="col-12 ">
							<FadeInWhenVisible initialScale={0.9}>
								<h3 className="view-more-description">
									Xem thêm các điểm tham quan tại:
								</h3>
							</FadeInWhenVisible>
						</div>
						{buttonLocations.map((buttonLocation, index) => (
							<div
								key={`buttonLocation_${index}`}
								className="col-md-12 col-xs-12"
							>
								<FadeInWhenVisible initialScale={1.1}>
									<div>
										<Link href={buttonLocation.link}>
											<a className="theme-btn-s2">
												{buttonLocation.title}
											</a>
										</Link>
									</div>
								</FadeInWhenVisible>
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	);
};
