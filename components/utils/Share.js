import React, { useState, useEffect } from 'react';
import { FacebookShareButton, FacebookIcon } from 'next-share';

const Share = () => {
	const [shareURL, setShareURL] = useState('');

	useEffect(() => {
		const shareURL = window.location.href;
		setShareURL(shareURL);
	}, []);

	return (
		<FacebookShareButton
			url={shareURL}
			quote=""
			hashtag={'#aovua'}
		>
			<FacebookIcon size={32} round />
		</FacebookShareButton>
	);
};

export default Share;
