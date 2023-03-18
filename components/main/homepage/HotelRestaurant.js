import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';
import AccommodationTile from '../service/AccommodationTile';
import { FadeInWhenVisible } from '../../utils/Animations';
import Link from 'next/link';

const HotelRestaurant = ({ locations, limit = null }) => {
	const [activeTab, setActiveTab] = useState(1);

	const toggle = (tab) => {
		if (activeTab !== tab) setActiveTab(tab);
	};

	const locationsWithAccommodation = locations.filter(
		(location) => location.accommodations.length > 0
	);

	return (
		<section className={`Room-area section-padding Room-area-2`}>
			<FadeInWhenVisible initialScale={1.05}>
				<div className="Room-section">
					<div className="container">
						<div className="col-12">
							<div className="wpo-section-title">
								<h2>Dịch vụ</h2>
							</div>
						</div>
						<div className="row">
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
														) => {
															if (limit) {
																if (
																	jindex <
																	limit
																) {
																	return (
																		<AccommodationTile
																			firstImage={
																				jindex ===
																				0
																			}
																			key={`hotel_restautant_${index}_${jindex}`}
																			accommodation={
																				accommodation
																			}
																			location={
																				location
																			}
																		/>
																	);
																}
															} else {
																return (
																	<AccommodationTile
																		firstImage={
																			jindex ===
																			0
																		}
																		key={`hotel_restautant_${index}_${jindex}`}
																		accommodation={
																			accommodation
																		}
																		location={
																			location
																		}
																	/>
																);
															}
														}
													)}
													<div
														style={{
															display: 'block',
														}}
														className="row "
													>
														<div className="col-12 text-center">
															<Link
																href={`/${location.urlPrefix}/khach-san-nha-hang`}
															>
																<a className="view-more-accommodation theme-btn-s2">
																	{`Xem tất cả dịch vụ tại ${location.Name}`}
																</a>
															</Link>
														</div>
													</div>
												</TabPane>
											)
										)}
									</TabContent>
								</div>
							</div>
						</div>
					</div>
				</div>
			</FadeInWhenVisible>
		</section>
	);
};

export default HotelRestaurant;
