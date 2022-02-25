import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CKContent from '../../utils/CKContent';
import { FadeInWhenVisible } from '../../utils/Animations';

// Return Four locations as horizonatal bootstrap grid
const HeroLocations = ({ locationText, locations }) => {
	console.log('locations Hero :>> ', locations);
	return (
		<div className="hero-destinations-section container-fluid">
			<div className="row destination-wrap">
				{locations.map((location, index) => {
					return (
						<div
							key={`hero_location_${index}`}
							className="col-md-3"
						>
							<FadeInWhenVisible initialScale={0.95} delay={1.5}>
								<div className="destination-item">
									<div className="destination-img">
										<Image
											src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${location.Thumbnail.url}`}
											alt={`Hình ảnh của ${location.Name}`}
											height={500}
											width={500}
											objectFit="cover"
											loading={
												index === 0 ? 'eager' : 'lazy'
											}
										/>
									</div>
									<div className="destination-content">
										<div className="content-left">
											<h5>
												<Link
													href={`/${location.urlPrefix}`}
												>
													<a>{location.Name}</a>
												</Link>
											</h5>
										</div>
									</div>
								</div>
							</FadeInWhenVisible>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default HeroLocations;
