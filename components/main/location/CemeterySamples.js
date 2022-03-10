import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FadeInWhenVisible } from '../../../components/utils/Animations';

const CemeterySamples = ({ location, cemeterySamples }) => {
	return (
		<div className="container-fluid section-padding">
			<div className="row gallery-wrap">
				<div className="col-12">
					<div className="wpo-section-title text-center">
						<h2>Mẫu mộ</h2>
					</div>
				</div>
				{cemeterySamples &&
					cemeterySamples.map((cont, index) => {
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
												placeholder="blur"
												blurDataURL={`/_next/image?url=${process.env.NEXT_PUBLIC_STRAPI_URL}${cont.Thumbnail.url}&w=128&q=1`}
											/>
										</div>
										<div className="gallery-content">
											<div className="content-left">
												<h5>
													<Link
														href={`/${location.urlPrefix}/mau-mo/${cont.slug}`}
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

export default CemeterySamples;
