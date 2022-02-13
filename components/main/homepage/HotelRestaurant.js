import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';
import Link from 'next/link';
import Image from 'next/image';
import CKContent from '../../utils/CKContent';

const HotelRestaurant = ({ locations }) => {
	const [activeTab, setActiveTab] = useState(1);

	const toggle = (tab) => {
		if (activeTab !== tab) setActiveTab(tab);
	};

	const locationsWithAccommodation = locations.filter(
		(location) => location.accommodations.length > 0
	);

	console.log('locationsWithAccommodation', locationsWithAccommodation);

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
													(accommodation, jindex) => (
														<Element
															firstImage={
																jindex === 0
															}
															key={`room_${jindex}`}
															accommodation={
																accommodation
															}
															location={location}
														/>
													)
												)}
											</TabPane>
										)
									)}
								</TabContent>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

const Element = ({ location, accommodation, firstImage }) => {
	console.log('accommodation', accommodation);
	return (
		<div className="grid">
			<div className="room-item">
				<Image
					src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${accommodation.Thumbnail.url}`}
					alt=""
					// className="img img-responsive"
					priority={firstImage ? true : false}
					height={500}
					width={400}
					objectFit={'cover'}
				/>
				<div className="room-text-show">
					<h2>{accommodation.Name}</h2>
				</div>
				<div className="room-text-hide">
					<h2>{accommodation.Name}</h2>
					{/* <span>{accommodation.RoomCount}</span> */}
					<CKContent content={accommodation.ShortDescription} />
					{accommodation.Price && (
						<small>
							<span>{accommodation.Price}</span>
						</small>
					)}
					{
						<Link
							href={`/${location.urlPrefix}/khach-san-nha-hang/${accommodation.slug}`}
						>
							<a className="theme-btn-s2">Xem Thêm</a>
						</Link>
					}
				</div>
			</div>
		</div>
	);
};

export default HotelRestaurant;
