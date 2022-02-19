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
			quote={
				'next-share is a social share buttons for your next React apps.'
			}
			hashtag={'#nextshare'}
		>
			<FacebookIcon size={32} round />
		</FacebookShareButton>
	);
};

export default Share;
