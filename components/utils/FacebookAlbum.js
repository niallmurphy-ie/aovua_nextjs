import React, { useState } from 'react';
import Script from 'next/script';

const FacebookAlbum = ({ albumID }) => {
	const [album, setAlbum] = useState(null);

	return (
		<>
			<Script
				id="loadAlbum-js"
				//  src="/public/loadAlbum.js"
				onLoad={() => {
					(function (d, s, id) {
						var js,
							fjs = d.getElementsByTagName(s)[0];
						if (d.getElementById(id)) return;
						js = d.createElement(s);
						js.id = id;
						js.src = '//connect.facebook.net/en_US/all.js#xfbml=1';
						fjs.parentNode.insertBefore(js, fjs);
					})(document, 'script', 'facebook-jssdk');
				}}
			/>
			<div
				className="fb-post"
				data-href="https://www.facebook.com/media/set/?set=a.751127544997991"
			></div>
		</>
	);
};

export default FacebookAlbum;