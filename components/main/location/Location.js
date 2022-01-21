import React from 'react';
import PageTitle from '../PageTitle';
import Loading from '../../Loading';
import Description from './LocationDescription';
import LocationSideBar from './LocationSideBar';
// import ServiceSingle from '../../components/ServiceSingle';

const LocationPage = ({ location }) => {
	const breadcrumb = {
		url: '/diadiem',
		name: 'Địa điểm',
	};

	return (
		<>
			<PageTitle
				headerImage={location.WideHeaderImage}
				pageTitle={location.Name}
				breadcrumb={breadcrumb}
			/>
			<section className="service-single-section section-padding">
				<div className="container">
					<div className="row">
						<div className="col col-lg-8 col-12 order-lg-2">
							<div className="service-single-content">
								<Description serviceData={location} />
								{/* <WhyChoose />
									<Categorys /> */}
							</div>
						</div>
						<LocationSideBar location={location} />
					</div>
				</div>
			</section>
		</>
	);
};
export default LocationPage;
