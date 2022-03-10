import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Loading from '../../Loading';
import { FadeInWhenVisible } from '../../utils/Animations';
import CKContent from '../../utils/CKContent';

const Locations = ({ locationText, locations }) => {
	return (
		<div className="destination-area section-padding">
			<div className="container">
				<div className="row">
					<div id="location_0" className="col-lg-4">
						<div className="destination-text">
							<div className="wpo-section-title">
								<h2>Ao Vua JSC.</h2>
							</div>
							{locationText && (
								<CKContent content={locationText} />
							)}
						</div>
					</div>
					<div className="col-lg-8">
						<div className="destination-wrap">
							<div className="row">
								<div className="col-md-6 col-sm-6 custom-grid">
									<div className="destination-left">
										{/* Start destination left */}
										{[locations[0], locations[1]].map(
											(location, index) => (
												<TileOutput
													id={`location_${index + 1}`}
													location={location}
													key={location.Name + index}
													firstImage={index === 0}
												/>
											)
										)}
										{/* End destination left */}
									</div>
								</div>
								<div className="col-md-6 col-sm-6 custom-grid">
									<div className="destination-right">
										{/* Start destination right */}
										{[locations[2], locations[3]].map(
											(location, index) => (
												<TileOutput
													id={`location_${index + 3}`}
													location={location}
													key={location.Name + index}
												/>
											)
										)}
										{/* End destination right */}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

const TileOutput = ({ id, location, firstImage }) => {
	return (
		<FadeInWhenVisible initialScale={0.5}>
			<div id={id} className="destination-item">
				<div className="destination-img">
					<Image
						src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${location.Thumbnail.url}`}
						alt={`Hình ảnh của ${location.Name}`}
						height="600px"
						width="500px"
						objectFit="cover"
						loading={firstImage ? 'eager' : 'lazy'}
						placeholder="blur"
						blurDataURL={`/_next/image?url=${process.env.NEXT_PUBLIC_STRAPI_URL}${location.Thumbnail.url}&w=128&q=1`}
					/>
				</div>
				<div className="destination-content">
					<div className="content-left">
						<h5>
							<Link href={`/${location.urlPrefix}`}>
								<a>{location.Name}</a>
							</Link>
						</h5>
						{location.ShortDescription && (
							<small>{location.ShortDescription}</small>
						)}
					</div>
				</div>
			</div>
		</FadeInWhenVisible>
	);
};

export default Locations;
