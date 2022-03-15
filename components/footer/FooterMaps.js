import React, { Fragment, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Select from 'react-select';
import { FaMapMarker } from 'react-icons/fa';

const FooterMaps = ({ mapsData }) => {
	const options = mapsData.map((m, index) => ({
		value: index,
		label: (
			<Fragment>
				<FaMapMarker /> {m.Name}
			</Fragment>
		),
		...m,
	}));
	const [mapShown, setMapShown] = useState(options[0]);

	return (
		<div className="footer-maps-section" style={{ marginTop: '20px' }}>
			<div className="footer-maps-container">
				{
					<MapsSelect
						options={options}
						onChange={(e) => setMapShown(e.value)}
						mapShown={mapShown}
						setMapShown={setMapShown}
					/>
				}
			</div>
			<div className="maps-container">
				<motion.iframe
					key={mapShown.Name}
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
					src={mapShown.GoogleMapsURL}
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

const MapsSelect = ({ options, mapShown, setMapShown }) => {
	const customStyles = {
		option: (provided, state) => ({
			...provided,
			backgroundColor: state.isSelected ? '#00d690' : '#fff',
			fontSize: '15px',
		}),

		singleValue: (provided, state) => {
			const opacity = state.isDisabled ? 0.5 : 1;
			const transition = 'opacity 300ms';

			return { ...provided, opacity, transition };
		},
	};

	return (
		<Select
			styles={customStyles}
			options={options}
			value={mapShown}
			isSearchable={false}
			onChange={(e) => setMapShown(e)}
		/>
	);
};
export default FooterMaps;
