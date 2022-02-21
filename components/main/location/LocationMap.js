import React from 'react';

const LocationMap = ({ mapURL }) => {
	if (!mapURL) return null;

	return (
		<div className="container contact-map">
			<iframe title="Map" src={mapURL} loading="lazy"></iframe>
		</div>
	);
};

export default LocationMap;
