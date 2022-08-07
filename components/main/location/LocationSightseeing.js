import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FadeInWhenVisible } from '../../../components/utils/Animations';

const LocationSightseeing = ({ location }) => {
	return (
		<div className="container-fluid section-padding">
			<div className="row gallery-wrap">
				<div className="col-12">
					<div className="wpo-section-title text-center">
						<h2>Các điểm tham quan tại {location.Name}</h2>
					</div>
				</div>
				{location.sightseeings &&
					location.sightseeings.map((cont, index) => {
						return (
							index < 4 && (
								<div
									key={`location_sightseeing_${index}`}
									className="col-md-3 col-sm-6 col-12"
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
													placeholder="blur"
													blurDataURL={`/_next/image?url=${process.env.NEXT_PUBLIC_STRAPI_URL}${cont.Thumbnail.url}?w=128&q=1`}
												/>
											</div>
											<div className="gallery-content">
												<div className="content-left">
													<h5>
														<Link
															href={`/${location.urlPrefix}/cac-diem-tham-quan/${cont.slug}`}
														>
															<a>{cont.Name}</a>
														</Link>
													</h5>
												</div>
											</div>
										</div>
									</FadeInWhenVisible>
								</div>
							)
						);
					})}
			</div>
			{location.sightseeings && location.sightseeings.length > 4 && (
				<div className="row view-more-sightseeings">
					<div className="col-12 btns text-center">
						<Link
							href={`/${location.urlPrefix}/cac-diem-tham-quan`}
						>
							<a className="theme-btn-s2">
								Xem tất cả các điểm tham quan
							</a>
						</Link>
					</div>
				</div>
			)}
		</div>
	);
};

export default LocationSightseeing;
