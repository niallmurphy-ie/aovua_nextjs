import React from 'react';
import FacebookAlbum from '../../utils/FacebookPage';
import LocationMap from './LocationMap';

const LocationEmbeds = ({ location }) => {
	return (
		<div className="div-embeds">
			<div className="container location-embeds">
				<div className="row">
					<div className="col col-lg-6 col-12 order-lg-2">
						{location.FacebookPageURL && (
							<FacebookAlbum
								url={location.FacebookPageURL}
								name={location.Name}
							/>
						)}
					</div>
					<div className="col col-lg-6 col-12 order-lg-2">
						{location.GoogleMapsURL && (
							<LocationMap mapURL={location.GoogleMapsURL} />
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default LocationEmbeds;