import React from 'react';
import parse from 'html-react-parser';
import Loading from '../../Loading';
import { recallCache } from '@apollo/client/cache/inmemory/reactiveVars';
import CKContent from '../../utils/CKContent';

const Description = ({ serviceData }) => {

	return (
		<div className="service-single-des">
			<h2>{serviceData.Name}</h2>
			<CKContent content={serviceData.LocationDescription} />
		</div>
	);
};

export default Description;
