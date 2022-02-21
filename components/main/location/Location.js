import React from 'react';
import PageTitle from '../PageTitle';
import Loading from '../../Loading';
import Description from './LocationDescription';
import LocationSideBar from './LocationSideBar';
import LocationEntertainment from './LocationEntertainment';
import LocationHotelRestaurant from './LocationHotelRestaurant';
import LocationMap from './LocationMap';
import FacebookAlbum from '../../utils/FacebookPage';

const LocationPage = ({ location }) => {
	console.log('location :>> ', location);
	return (
		<>
			<PageTitle
				headerImage={location.WideHeaderImage}
				pageTitle={location.Name}
			/>
			<section className="service-single-section section-padding">
				<div className="container">
					<div className="row">
						<div className="col col-lg-8 col-12 order-lg-2">
							<div className="service-single-content">
								<Description serviceData={location} />
								{/* <WhyChoose />
									<Categorys /> */}
							</div>
						</div>
						<LocationSideBar location={location} />
					</div>
					<div className="row"></div>
				</div>
				{location.entertainments.length > 0 && (
					<LocationEntertainment location={location} />
				)}
				{location.accommodations.length > 0 && (
					<LocationHotelRestaurant location={location} />
				)}
				<div style={{ backgroundColor: '#f5f5f5' }}>
					<div className="container location-embeds">
						<div className="row">
							<div className="col col-lg-6 col-12 order-lg-2">
								{location.FacebookPageURL && (
									<FacebookAlbum
										url={location.FacebookPageURL}
										name={location.Name}
									/>
								)}
							</div>
							<div className="col col-lg-6 col-12 order-lg-2">
								{location.GoogleMapsURL && (
									<LocationMap
										mapURL={location.GoogleMapsURL}
									/>
								)}
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
export default LocationPage;
