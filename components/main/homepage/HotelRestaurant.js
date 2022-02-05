import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';
import Link from 'next/link';
import Image from 'next/image';
import rm1 from '../../../public/images/images/room/img-1.jpg';

const HotelRestaurant = () => {
	const [activeTab, setActiveTab] = useState('1');

	const toggle = (tab) => {
		if (activeTab !== tab) setActiveTab(tab);
	};

	const Room = [
		{
			RoomImg: rm1,
			RoomHeading: 'Lake view Room',
			RoomCount: 'Twin Room',
			Des: "If you are going to use a passage Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
			Price: '$142',
			Link: '/room-single',
		},
	];

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
									<NavItem>
										<NavLink
											className={classnames({
												active: activeTab === '1',
											})}
											onClick={() => {
												toggle('1');
											}}
										>
											Classic
										</NavLink>
									</NavItem>
									<NavItem>
										<NavLink
											className={classnames({
												active: activeTab === '2',
											})}
											onClick={() => {
												toggle('2');
											}}
										>
											Budget
										</NavLink>
									</NavItem>
								</Nav>
							</div>
							<div className="gallery-container">
								<TabContent activeTab={activeTab}>
									<TabPane tabId="1">
										{Room.map((room, rm) => (
											<Element
												key={`room_${rm}`}
												room={room}
											/>
										))}
									</TabPane>
									<TabPane tabId="2"></TabPane>
								</TabContent>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

const Element = ({ room }) => {
	return (
		<div className="grid">
			<div className="room-item">
				<Image
					src={room.RoomImg}
					alt=""
					// className="img img-responsive"
					height={500}
					width={400}
					objectFit={'cover'}
				/>
				<div className="room-text-show">
					<h2>{room.RoomHeading}</h2>
				</div>
				<div className="room-text-hide">
					<h2>{room.RoomHeading}</h2>
					<span>{room.RoomCount}</span>
					<p>{room.Des}</p>
					<small>
						From: <span>{room.Price}</span> / Night
					</small>
					<Link className="theme-btn-s2" href={room.Link}>
						<a>Check Availability</a>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default HotelRestaurant;
