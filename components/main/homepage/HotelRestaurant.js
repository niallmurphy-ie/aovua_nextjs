import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';
import AccommodationTile from '../service/AccommodationTile';
import { FadeInWhenVisible } from '../../utils/Animations';

const HotelRestaurant = ({ locations }) => {
	const [activeTab, setActiveTab] = useState(1);

	const toggle = (tab) => {
		if (activeTab !== tab) setActiveTab(tab);
	};

	const locationsWithAccommodation = locations.filter(
		(location) => location.accommodations.length > 0
	);

	return (
		<section className={`Room-area section-padding Room-area-2`}>
			<div className="Room-section">
				<div className="container">
					<div className="col-12">
						<div className="wpo-section-title">
							<h2>Khách Sạn Nhà Hàng</h2>
						</div>
					</div>
					<div className="row">
						<FadeInWhenVisible initialScale={0.5}>
							<div className="col col-xs-12 sortable-gallery">
								<div className="gallery-filters">
									<Nav tabs>
										{locationsWithAccommodation.map(
											(location, index) => (
												<NavItem
													key={`accomm_location_${index}`}
												>
													<NavLink
														className={classnames({
															active:
																activeTab ===
																index + 1,
														})}
														onClick={() => {
															toggle(index + 1);
														}}
													>
														{location.Name}
													</NavLink>
												</NavItem>
											)
										)}
									</Nav>
								</div>
								<div className="gallery-container">
									<TabContent activeTab={activeTab}>
										{locationsWithAccommodation.map(
											(location, index) => (
												<TabPane
													key={`accomm_tab_${index}`}
													tabId={index + 1}
												>
													{location.accommodations.map(
														(
															accommodation,
															jindex
														) => (
															<AccommodationTile
																firstImage={
																	jindex === 0
																}
																key={`room_${jindex}`}
																accommodation={
																	accommodation
																}
																location={
																	location
																}
															/>
														)
													)}
												</TabPane>
											)
										)}
									</TabContent>
								</div>
							</div>
						</FadeInWhenVisible>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HotelRestaurant;
