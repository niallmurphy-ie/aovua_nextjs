import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
// import ArticleSideBar from './ArticleSideBar';
import Loading from '../../Loading';
import CKContent from '../../utils/CKContent';
import Share from '../../utils/Share';
import ServiceSidebar from './ServiceSidebar';

const Service = ({ location, entertainment, accommodation, sightseeing }) => {
	if (!location && !entertainment && !accommodation && !sightseeing)
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

	const service = entertainment || accommodation || sightseeing;

	const ClickHandler = () => {
		window.scrollTo(10, 0);
	};

	console.log('service', service);

	return (
		<section className="wpo-blog-single-section section-padding">
			<div className="container">
				<div className="row">
					<div className={`col col-lg-8 col-12`}>
						<div className="wpo-blog-content clearfix">
							<div className="post">
								{service.Body && (
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
					<ServiceSidebar
						ClickHandler={ClickHandler}
						type={type}
						typeURL={typeURL}
						location={location}
						services={
							entertainment?.locations[0].entertainments ||
							accommodation?.locations[0].accommodations ||
							sightseeing?.locations[0].sightseeings ||
							null
						}
					/>
				</div>
			</div>
		</section>
	);
};

export default Service;
