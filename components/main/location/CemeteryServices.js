import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FadeInWhenVisible } from '../../../components/utils/Animations';

const CemeteryServices = ({ location, cemeteryServices }) => {
	return (
		<div className="container-fluid section-padding">
			<div className="row gallery-wrap">
				<div className="col-12">
					<div className="wpo-section-title text-center">
						<h2>Dịch vụ tại {location.Name}</h2>
					</div>
				</div>
				{cemeteryServices &&
					cemeteryServices.map((cont, index) => {
						return (
							<div
								key={`hero_location_${index}`}
								className="col-md-2"
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
														href={`/${location.urlPrefix}/dich-vu/${cont.slug}`}
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
			<div className="row view-more-services">
				<div className="col-12 btns text-center">
					<Link href="/cong-vien-vinh-hang/dich-vu">
						<a className="theme-btn-s2">Xem tất cả dịch vụ</a>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default CemeteryServices;
