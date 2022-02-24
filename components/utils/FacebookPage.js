import React, { useState, useEffect } from 'react';

const FacebookPage = ({ url, name }) => {
	const [facebookURL, facebookMapURL] = useState(null);

	useEffect(() => {
		facebookMapURL(url);
		// This fixes Facebook not loading on page change.
		if (typeof window.FB !== 'undefined') window.fbAsyncInit();
	}, [url]);

	if (!facebookURL) return null;

	return (
		<div
			className="fb-page widget"
			data-href={facebookURL}
			data-tabs="timeline"
			data-width="500"
			data-height="340"
			data-small-header="true"
			data-adapt-container-width="true"
			data-hide-cover="true"
			data-show-facepile="true"
			data-lazy="true"
		>
			<blockquote cite={facebookURL} className="fb-xfbml-parse-ignore">
				<a href={facebookURL}>{name}</a>
			</blockquote>
		</div>
	);
};

export default FacebookPage;
