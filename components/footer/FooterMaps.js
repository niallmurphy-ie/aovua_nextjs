import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import { FadeInWhenVisible } from '../utils/Animations';
import { motion } from 'framer-motion';

const FooterMaps = ({ mapsData }) => {
	const [mapShown, setMapShown] = useState(0);
	const [map, setMap] = useState(mapsData[mapShown].GoogleMapsURL);

	useEffect(() => {
		setMap(mapsData[mapShown].GoogleMapsURL);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [mapShown]);

	return (
		<div className="footer-maps-section" style={{ marginTop: '20px' }}>
			<div
				className="footer-maps-container"
				style={{
					display: 'Grid',
					gridTemplateColumns: '2fr 2fr',
				}}
			>
				{mapsData.map((map, index) => (
					<div className="footer-maps-box" key={index}>
						<button
							className={classnames(
								'theme-btn',
								'footer-map-button',
								{
									'theme-btn-s2': mapShown === index,
								}
							)}
							onClick={() => setMapShown(index)}
						>
							{map.Name}
						</button>
					</div>
				))}
			</div>
			<div className="maps-container">
				<motion.iframe
					key={map}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					transition={{ duration: 1.25 }}
					variants={{
						visible: { opacity: 1, scale: 1 },
						hidden: {
							opacity: 0,
							scale: 0.85,
						},
					}}
					title="map"
					src={map}
					width="100%"
					height="350"
					frameBorder="0"
					style={{ border: 0 }}
					allowFullScreen
				/>
			</div>
		</div>
	);
};

export default FooterMaps;
