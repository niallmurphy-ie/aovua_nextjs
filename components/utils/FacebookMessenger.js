import React, { useState } from 'react';
import MessengerCustomerChat from 'react-messenger-customer-chat';

const FacebookMessenger = () => {
	const locations = [
		{
			name: 'Ao Vua',
			pageID: '751126184998127',
		},
		{
			name: 'Đảo Ngọc Xanh',
			pageID: '1608577759385364',
		},
	];

	const [isOpen, setIsOpen] = useState(false);
	const [location, setLocation] = useState(locations[0].pageID);

	return (
		<>
			<div className="messenger-locations">
				{locations.map((item, index) => (
					<button
						key={`messengerLocation_${index}`}
						className={`messenger-location ${
							location === item.pageID ? 'active' : ''
						}`}
						onClick={() => {
							setLocation(item.pageID);
						}}
					>
						{item.name}
					</button>
				))}
			</div>
			<MessengerCustomerChat
				pageId={location}
				appId=""
				htmlRef="https://aovua.niallmurphy.dev"
				themeColor="#1c4c25"
				greetingDialogDisplay="fade"
				// loggedInGreeting="loggedInGreeting"
				// loggedOutGreeting="loggedOutGreeting"
				language="vn_VN"
				onCustomerChatDialogShow={() => {
					setIsOpen(true);
					console.log('onCustomerChatDialogShow');
				}}
				onCustomerChatDialogHide={() => {
					setIsOpen(false);
					console.log('onCustomerChatDialogHide');
				}}
			/>
		</>
	);
};

export default FacebookMessenger;
