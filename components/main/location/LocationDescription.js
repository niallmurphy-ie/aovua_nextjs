import React from 'react';
import parse from 'html-react-parser';
import Loading from '../../Loading';
import { recallCache } from '@apollo/client/cache/inmemory/reactiveVars';

const Description = ({ serviceData }) => {
	const [description, setDescription] = React.useState('');

	React.useEffect(() => {
		setDescription(parse(serviceData.LocationDescription));
	}, [serviceData]);

	if (!serviceData) return <Loading />;

	return (
		<div className="service-single-des">
			<h2>{serviceData.Name}</h2>
			<p>{description}</p>
		</div>
	);
};

export default Description;
