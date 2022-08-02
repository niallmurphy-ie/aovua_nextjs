import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
// import ArticleSideBar from './ArticleSideBar';
import Loading from '../../Loading';
import CKContent from '../../utils/CKContent';
import Share from '../../utils/Share';
import ServiceSidebar from './ServiceSidebar';
import PageTitle from '../PageTitle';
import LocationEmbeds from '../location/LocationEmbeds';

const Service = ({
	location,
	entertainment,
	accommodation,
	sightseeing,
	event,
	priceList,
	cemeterySample,
	cemeteryService,
	cemeterySamples,
	cemeteryServices,
	pageTitle,
	breadcrumb,
	product,
}) => {
	if (
		!location &&
		!entertainment &&
		!accommodation &&
		!sightseeing &&
		!event &&
		!cemeterySample &&
		!cemeteryService &&
		!priceList &&
		!product
	)
		return <Loading />;

	let type = null;
	let typeURL = null;
	if (entertainment) {
		type = 'Vui chơi giải trí';
		typeURL = 'vui-choi-giai-tri';
	}
	if (accommodation) {
		type = 'Khách sạn nhà hàng';
		typeURL = 'khach-san-nha-hang';
	}
	if (sightseeing) {
		type = 'Các điểm tham quan';
		typeURL = 'cac-diem-tham-quan';
	}
	if (event) {
		type = 'Hội thảo sự kiện';
		typeURL = 'hoi-thao-su-kien';
	}
	if (cemeterySample) {
		type = 'Mẫu mộ';
		typeURL = 'mau-mo';
	}
	if (cemeteryService) {
		type = 'Dịch vụ';
		typeURL = 'dich-vu';
	}
	if (priceList) {
		type = 'Bảng giá';
		typeURL = 'bang-gia';
	}
	if (product) {
		type = 'Sản phẩm';
		typeURL = 'san-pham';
	}

	const service =
		entertainment ||
		accommodation ||
		sightseeing ||
		event ||
		cemeterySample ||
		cemeteryService ||
		priceList ||
		product;

	return (
		<>
			<PageTitle
				headerImage={service?.WideHeaderImage?.url}
				thumbnail={service?.Thumbnail?.url}
				pageTitle={pageTitle}
				breadcrumb={breadcrumb}
			/>
			<section className="wpo-blog-single-section section-padding">
				<div className="container">
					<div className="row">
						<div className={`col col-lg-8 col-12`}>
							<div className="wpo-blog-content clearfix">
								<div className="post">
									{service && service.Body && (
										<CKContent content={service.Body} />
									)}
								</div>

								<div className="tag-share clearfix">
									<span className="share">
										<Share />
									</span>
								</div>
							</div>
						</div>
						{location && (
							<ServiceSidebar
								type={type}
								typeURL={typeURL}
								location={location}
								services={
									cemeterySample
										? cemeterySamples
										: cemeteryService
										? cemeteryServices
										: entertainment?.locations[0]
												.entertainments ||
										  accommodation?.locations[0]
												.accommodations ||
										  sightseeing?.locations[0]
												.sightseeings ||
										  event?.locations[0].events ||
										  location.priceList ||
										  null
								}
							/>
						)}
					</div>
				</div>
			</section>
			{location && <LocationEmbeds location={location} />}
		</>
	);
};

export default Service;
