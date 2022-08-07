import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import classNames from 'classnames';

function LocationEntertainment({ location }) {
	return (
		<>
			<div
				id="location-entertainment-section"
				className="col-12 section-padding"
			>
				<div className="wpo-section-title text-center">
					<h2>{`Vui chơi giải trí tại ${location.Name}`}</h2>
				</div>
			</div>
			<div className="featured-area featured-sub">
				<div className="container-fluid">
					<div className="row grid ">
						{location.entertainments.map((feature, i) => (
							<div
								className="col-lg-4 items col-md-6 col-sm-6 col-12"
								key={`entertainment_${i}`}
							>
								<div className="featured-wrap">
									<div className="featured-img">
										<Image
											src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${feature.Thumbnail.url}`}
											alt=""
											width="100%"
											height="50%"
											layout="responsive"
											objectFit="cover"
											placeholder="blur"
											blurDataURL={`/_next/image?url=${process.env.NEXT_PUBLIC_STRAPI_URL}${feature.Thumbnail.url}?w=128&q=1`}
										/>
										<div className="featured-content">
											<Link
												href={`/${location.urlPrefix}/vui-choi-giai-tri/${feature.slug}`}
											>
												<a>{feature.Name}</a>
											</Link>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
					{location.entertainments && (
						<div className="row view-more-entertainment">
							<div className="col-12 text-center">
								<Link
									href={`/${location.urlPrefix}/vui-choi-giai-tri`}
								>
									<a className="theme-btn-s2">Xem Thêm</a>
								</Link>
							</div>
						</div>
					)}
				</div>
			</div>
		</>
	);
}

export default LocationEntertainment;
