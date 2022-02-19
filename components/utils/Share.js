import React, { useState, useEffect } from 'react';
import {
	FacebookShareButton,
	FacebookIcon,
	TwitterShareButton,
	TwitterIcon,
} from 'next-share';

const Share = () => {
	const [shareURL, setShareURL] = useState('');

	useEffect(() => {
		const shareURL = window.location.href;
		setShareURL(shareURL);
	}, []);

	return (
		<>
			Chia sẻ:{' '}
			<span>
				<FacebookShareButton url={shareURL} quote="" hashtag={'#aovua'}>
					<FacebookIcon size={32} round />
				</FacebookShareButton>
				{''}
				<TwitterShareButton url={shareURL}>
					<TwitterIcon size={32} round />
				</TwitterShareButton>
			</span>
		</>
	);
};

export default Share;
