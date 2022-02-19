import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
// import ArticleSideBar from './ArticleSideBar';
import Loading from '../../Loading';
import CKContent from '../../utils/CKContent';
import Share from '../../utils/Share';

const Service = ({ location, entertainment, accommodation, sightseeing }) => {
	if (!location && !entertainment && !accommodation && !sightseeing)
		return <Loading />;

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
					{/* <ArticleSideBar
						articles={articles}
						categories={categories}
					/> */}
				</div>
			</div>
		</section>
	);
};

export default Service;
