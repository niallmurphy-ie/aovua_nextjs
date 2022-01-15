import React from 'react';
import PageTitle from '../main/PageTitle';
import Loading from '../Loading';
// import ServiceSingle from '../../components/ServiceSingle';

const LocationPage = ({ locationData }) => {

	if (!locationData) return <Loading />;

	return (
		<>
			<PageTitle
				headerImage={locationData.headerImage}
				pageTitle={locationData.name}
				pagesub={locationData.name}
			/>
			{/* <ServiceSingle locationData={locationData} /> */}
		</>
	);
};
export default LocationPage;
