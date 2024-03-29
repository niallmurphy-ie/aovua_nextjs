import React from 'react';
import AccommodationTile from '../service/AccommodationTile';
import Link from 'next/link';

const LocationHotelRestaurant = ({
	location,
	addLocationName = false,
	addTitle = true,
	limit = null,
}) => {
	return (
		<section
			id="location-accommodation-section"
			className="Room-area section-padding Room-area-2"
		>
			<div className="Room-section">
				<div className="container">
					<div className="col-12">
						{addTitle && (
							<div className="wpo-section-title text-center">
								{addLocationName ? (
									<h2>{`Dịch vụ tại ${location.Name}`}</h2>
								) : (
									<h2>Dịch vụ</h2>
								)}
							</div>
						)}
					</div>
					<div className="row">
						<div className="gallery-container">
							{location.accommodations.map(
								(accommodation, index) => {

									if (limit) {
										if (index < limit) {
											return (
												<AccommodationTile
													firstImage={index === 0}
													key={`room_${index}`}
													accommodation={
														accommodation
													}
													location={location}
												/>
											);
										}
									} else {
										return (
											<AccommodationTile
												firstImage={index === 0}
												key={`room_${index}`}
												accommodation={accommodation}
												location={location}
											/>
										);
									}
								}
							)}
						</div>
					</div>
					<div className="row view-more-accommodation">
						<div className="col-12 text-center">
							<Link
								href={`/${location.urlPrefix}/khach-san-nha-hang`}
							>
								<a className="theme-btn-s2">Xem Thêm</a>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default LocationHotelRestaurant;
