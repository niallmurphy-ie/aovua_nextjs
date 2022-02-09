import React from 'react';
import MessengerCustomerChat from 'react-messenger-customer-chat';

const FacebookMessenger = () => (
	<MessengerCustomerChat
		pageId="751126184998127"
		appId=""
		htmlRef="https://aovua.niallmurphy.dev"
		themeColor="#1c4c25"
		greetingDialogDisplay="fade"
		loggedInGreeting="loggedInGreeting"
		loggedOutGreeting="loggedOutGreeting"
		lang="vn_VN"
	/>
);

export default FacebookMessenger;
