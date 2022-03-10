import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FadeInWhenVisible } from '../utils/Animations';

const LocationServicePage = ({ location, entertainments, sightseeings, events, cemeterySamples, cemeteryServices }) => {

	// Columns 3 wide
	let content;
	let urlFragement;
	if (entertainments) {
		content = entertainments;
		urlFragement = 'vui-choi-giai-tri';
	}
	if (sightseeings) {
		content = sightseeings;
		urlFragement = 'cac-diem-tham-quan';
	}
	if (events) {
		content = events;
		urlFragement = 'hoi-thao-su-kien';
	}
	if (cemeterySamples) {
		content = cemeterySamples;
		urlFragement = 'mau-mo';
	}
	if (cemeteryServices) {
		content = cemeteryServices;
		urlFragement = 'dich-vu';
	}
	return (
		<div className="container-fluid">
			<div className="row gallery-wrap">
				{content &&
					content.map((cont, index) => {
						return (
							<div
								key={`hero_location_${index}`}
								className="col-md-3"
							>
								<FadeInWhenVisible initialScale={0.95}>
									<div className="gallery-item">
										<div className="gallery-img">
											<Image
												src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${cont.Thumbnail.url}`}
												alt={`Hình ảnh của ${cont.Name}`}
												height={400}
												width={500}
												objectFit="cover"
												loading={
													index === 0
														? 'eager'
														: 'lazy'
												}
											/>
										</div>
										<div className="gallery-content">
											<div className="content-left">
												<h5>
													<Link
														href={`/${location.urlPrefix}/${urlFragement}/${cont.slug}`}
													>
														<a>{cont.Name}</a>
													</Link>
												</h5>
											</div>
										</div>
									</div>
								</FadeInWhenVisible>
							</div>
						);
					})}
			</div>
		</div>
	);
};

export default LocationServicePage;
