import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import LocationSidebarContact from '../location/LocationSidebarContact';

const ServiceSidebar = ({ location, type, typeURL, services }) => {
	if (!services) return null;

	return (
		<div className={`col col-lg-4 col-12 `}>
			<LocationSidebarContact location={location} />
			<div className="wpo-blog-sidebar">
				<div className="widget recent-post-widget">
					<h3>{`${type} tại ${location.Name}`}</h3>
					<div className="posts">
						{services.map((service, index) => {
							const imageURL = service.Thumbnail.formats
								? service.Thumbnail.formats.thumbnail.url
								: service.Thumbnail.url;
							return index < 5 ? (
								<div
									key={index + service.Title}
									className="post"
								>
									<div className="img-holder">
										<Image
											src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${imageURL}`}
											alt=""
											width="100%"
											height="100%"
											layout="responsive"
											objectFit="cover"
										/>
									</div>
									<div className="details">
										<h4>
											<Link
												href={`/${location.urlPrefix}/${typeURL}/${service.slug}`}
											>
												<a>{service.Name}</a>
											</Link>
										</h4>
									</div>
								</div>
							) : null;
						})}
						{services.length > 5 && (
							<div className="view-all blog-content">
								<Link
									href={`/${location.urlPrefix}/${typeURL}`}
								>
									<a>Xem tất cả</a>
								</Link>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ServiceSidebar;
