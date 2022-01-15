import React from 'react';
import PageTitle from '../main/PageTitle';
import Loading from '../Loading';
// import ServiceSingle from '../../components/ServiceSingle';

const LocationPage = ({ locationData, breadcrumb }) => {
	if (!locationData) return <Loading />;

	return (
		<>
			<PageTitle
				headerImage={locationData.headerImage}
				pageTitle={locationData.name}
				breadcrumb={breadcrumb}
			/>
			{/* <ServiceSingle locationData={locationData} /> */}
		</>
	);
};
export default LocationPage;
