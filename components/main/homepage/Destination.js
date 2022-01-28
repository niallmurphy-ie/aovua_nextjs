import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Loading from '../../../components/Loading';

const Destination = ({ locations }) => {
	console.log('locations', locations);
	return (
		<div className="destination-area section-padding">
			<div className="container">
				<div className="row">
					<div className="col-lg-4">
						<div className="destination-text">
							<div className="wpo-section-title">
								<h2>Ao Vua JSC.</h2>
							</div>
							<p>Discover Ba Vi in these locations</p>
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

const TileOutput = ({ location, firstImage }) => {
	const ClickHandler = () => {
		window.scrollTo(10, 0);
	};
	return (
		<div className="destination-item">
			<div className="destination-img">
				<Image
					src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${location.Thumbnail.url}`}
					alt={location.Name}
					height="600px"
					width="500px"
					objectFit="cover"
					priority={firstImage ? true : false}
					placeholder={<Loading />}
				/>
			</div>
			<div className="destination-content">
				<div className="content-left">
					<h5>
						<Link
							onClick={ClickHandler}
							href={`/${location.urlPrefix}`}
						>
							<a>{location.Name}</a>
						</Link>
					</h5>
					<small>Short Description</small>
				</div>
			</div>
		</div>
	);
};

export default Destination;
