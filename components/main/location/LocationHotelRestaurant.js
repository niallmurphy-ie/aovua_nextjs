import React from 'react';
import AccommodationTile from '../service/AccommodationTile';

const LocationHotelRestaurant = ({ location }) => {
	return (
		<section className={`Room-area section-padding Room-area-2`}>
			<div className="Room-section">
				<div className="container">
					<div className="col-12">
						<div className="wpo-section-title text-center">
							<h2>Khách Sạn Nhà Hàng</h2>
						</div>
					</div>
					<div className="row">
						<div className="gallery-container">
							{location.accommodations.map(
								(accommodation, index) => (
									<AccommodationTile
										firstImage={index === 0}
										key={`room_${index}`}
										accommodation={accommodation}
										location={location}
									/>
								)
							)}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default LocationHotelRestaurant;
