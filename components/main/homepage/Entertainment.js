import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from 'next/link';
import Image from 'next/image';

const Entertainment = ({ entertainment }) => {
	const settings = {
		dots: false,
		arrows: false,
		speed: 3000,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2500,
		lazyLoad: 'progressive',
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
		<div className="entertainment-service section-padding">
			<div className="container">
				<div className="col-12">
					<div className="wpo-section-title text-center">
						<h2>Vui Chơi Giải Trí</h2>
					</div>
				</div>
				<div className="entertainment-carousel">
					<Slider {...settings}>
						{entertainment.map((ent, index) => (
							<div className="item" key={ent.Name}>
								<div className="entertainment-item">
									<div className="entertainment-img">
										<Image
											src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${ent.Thumbnail.url}`}
											alt=""
											height="600px"
											width="450px"
											objectFit="cover"
											priority={
												index === 0 ? true : false
											}
										/>
									</div>
									<div className="entertainment-content">
										<div className="content-left">
											<h5>
												<Link
													onClick={ClickHandler}
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
			</div>
		</div>
	);
};

export default Entertainment;
