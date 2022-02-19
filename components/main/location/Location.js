import React from 'react';
import PageTitle from '../PageTitle';
import Loading from '../../Loading';
import Description from './LocationDescription';
import LocationSideBar from './LocationSideBar';
import LocationEntertainment from './LocationEntertainment';
import LocationHotelRestaurant from './LocationHotelRestaurant';

const LocationPage = ({ location }) => {
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
			</section>
		</>
	);
};
export default LocationPage;
