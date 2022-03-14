import React, { useState, useEffect } from 'react';
import MessengerCustomerChat from 'react-messenger-customer-chat';

const FacebookMessenger = () => {
	const locations = [
		{
			name: 'Ao Vua',
			pageID: '751126184998127',
			color: '#1c4c25',
		},
		{
			name: 'Đảo Ngọc Xanh',
			pageID: '1608577759385364',
			color: '#f4b800',
		},
	];

	const [isOpen, setIsOpen] = useState(false);
	const [location, setLocation] = useState(locations[0]);

	return (
		<>
			<div
				className={`messenger-locations ${isOpen ? 'open' : 'closed'}`}
			>
				{locations.map((item, index) => (
					<button
						key={`messengerLocation_${index}`}
						className={`messenger-location theme-btn ${
							location.pageID === item.pageID ? 'active' : ''
						}`}
						onClick={() => {
							setLocation(item);
						}}
					>
						{item.name}
					</button>
				))}
			</div>

			<MessengerCustomerChat
				pageId={location.pageID}
				appId=""
				htmlRef="https://aovua.niallmurphy.dev"
				themeColor={location.color}
				greetingDialogDisplay="fade"
				// loggedInGreeting="loggedInGreeting"
				// loggedOutGreeting="loggedOutGreeting"
				language="vi_VN"
			/>

			<div className="fb-loader"></div>
		</>
	);
};

export default FacebookMessenger;
