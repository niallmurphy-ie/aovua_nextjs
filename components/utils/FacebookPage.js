import React, { useState, useEffect } from 'react';

const FacebookPage = ({ url, name }) => {
	const [facebookURL, facebookMapURL] = useState(null);

	useEffect(() => {
		facebookMapURL(url);
		window.document.dispatchEvent(
			new Event('DOMContentLoaded', {
				bubbles: true,
				cancelable: true,
			})
		);
	}, []);

	if (!facebookURL) return null;

	return (
		<div
			className="fb-page"
			data-href={facebookURL}
			data-tabs="timeline"
			data-width="500"
			data-height="400"
			data-small-header="true"
			data-adapt-container-width="true"
			data-hide-cover="true"
			data-show-facepile="true"
			data-lazy="false"
		>
			<blockquote cite={facebookURL} className="fb-xfbml-parse-ignore">
				<a href={facebookURL}>{name}</a>
			</blockquote>
		</div>
	);
};

export default FacebookPage;
