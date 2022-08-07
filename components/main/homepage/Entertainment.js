import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from 'next/link';
import Image from 'next/image';
import { ScrollWhenVisible, FadeInWhenVisible } from '../../utils/Animations';

const Entertainment = ({ entertainment }) => {
	const settings = {
		dots: false,
		arrows: true,
		speed: 800,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		initialSlide: 5,
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
						<h2>Vui Chơi Giải Trí</h2>
					</div>
				</div>
				<ScrollWhenVisible delay={0.5} direction="right">
					<div className="entertainment-carousel">
						<Slider {...settings}>
							{entertainment.map((ent, index) => (
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
												blurDataURL={`/_next/image?url=${process.env.NEXT_PUBLIC_STRAPI_URL}${ent.Thumbnail.url}?w=128&q=1`}
											/>
										</div>
										<div className="entertainment-content">
											<div className="content-left">
												<h5>
													<Link
														href={`/${ent.locations[0].urlPrefix}/vui-choi-giai-tri/${ent.slug}`}
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
				</ScrollWhenVisible>
				<EntertainmentViewMore />
			</div>
		</div>
	);
};

export default Entertainment;

const EntertainmentViewMore = () => {
	const [showButtonLocations, setShowButtonLocations] = useState(false);

	const buttonLocations = [
		{
			title: 'Khu du lịch Ao Vua',
			link: '/ao-vua-xanh/vui-choi-giai-tri',
		},
		{
			title: 'Khu du lịch Đảo Ngọc Xanh',
			link: '/dao-ngoc-xanh/vui-choi-giai-tri',
		},
		{
			title: 'Khu du lịch Đầm Long',
			link: '/dam-long/vui-choi-giai-tri',
		},
	];

	return (
		<div
			style={{
				display: 'block',
			}}
			className="row "
		>
			<div id="entertainment-view-more" className="col-12 text-center">
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
						<div className="col-12 text-center">
							<FadeInWhenVisible initialScale={0.9}>
								<h3 className="view-more-description">
									Xem thêm vui chơi giải trí tại:
								</h3>
							</FadeInWhenVisible>
						</div>
						{buttonLocations.map((buttonLocation, index) => (
							<div
								key={`buttonLocation_${index}`}
								className="col-md-4 col-xs-12"
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
