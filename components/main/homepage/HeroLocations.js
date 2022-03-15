import React, { useState, useEffect } from 'react';
import { FadeInWhenVisible } from '../../utils/Animations';

// Return Four locations as horizonatal bootstrap grid
const HeroLocations = ({ locationText, locations }) => {
	// Detect mobile
	const [width, setWidth] = useState(1920);
	function handleWindowSizeChange() {
		setWidth(window.innerWidth);
	}
	useEffect(() => {
		setWidth(window.innerWidth);
		window.addEventListener('resize', handleWindowSizeChange);
		return () => {
			window.removeEventListener('resize', handleWindowSizeChange);
		};
	}, []);
	const isMobile = width <= 768;
	// End detect mobile

	const handleScroll = (e) => {
		e.preventDefault();
		const yOffset = -150;
		const element = document.querySelector(
			e.target.getAttribute('scrolltolocation')
		);
		const y =
			element.getBoundingClientRect().top + window.pageYOffset + yOffset;

		window.scrollTo({ top: y, behavior: 'smooth', duration: 6000 });
	};

	return (
		<div className="hero-destinations-section container-fluid">
			<div className="row destination-wrap">
				{[{ Name: 'Ao Vua JSC.' }, ...locations].map(
					(location, index) => {
						return (
							<div key={`hero_location_${index}`} className="col-sm">
								<FadeInWhenVisible
									initialScale={0.95}
									delay={isMobile ? 0 : 1.5}
								>
									<div className="destination-item">
										{/* <div className="destination-img">
										<Image
											src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${location.Thumbnail.url}`}
											alt={`Hình ảnh của ${location.Name}`}
											height={400}
											width={500}
											objectFit="cover"
											loading={
												index === 0 ? 'eager' : 'lazy'
											}
										/>
									</div> */}
										<div className="destination-content">
											<div
												style={{ width: '100%' }}
												className="content-left"
											>
												<h5>
													<a
														style={{
															textAlign: 'center',
														}}
														href="#"
														scrolltolocation={`#location_${index}`}
														onClick={handleScroll}
													>
														{location.Name}
													</a>
												</h5>
											</div>
										</div>
									</div>
								</FadeInWhenVisible>
							</div>
						);
					}
				)}
			</div>
		</div>
	);
};

export default HeroLocations;
