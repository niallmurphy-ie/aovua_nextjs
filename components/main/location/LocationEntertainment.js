import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import classNames from 'classnames';

function LocationEntertainment({ location }) {
	const [itemsToShow, setItemsToShow] = useState(3);

	const ClickHandler = () => {
		window.scrollTo(10, 0);
	};

	return (
		<>
			<div className="col-12">
				<div className="wpo-section-title text-center">
					<h2>Khách Sạn Nhà Hàng</h2>
				</div>
			</div>
			<div className="featured-area featured-sub">
				<div className="container-fluid">
					<div className="row grid ">
						{location.entertainments.map((feature, i) => (
							<div
								className={classNames(
									'col-lg-4 items col-md-6 col-sm-6 col-12',
									{
										hidden: i >= itemsToShow,
									}
								)}
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
										/>
										<div className="featured-content">
											<Link
												onClick={ClickHandler}
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
					{location.entertainments.length > itemsToShow && (
						<div className="row view-more-entertainment">
							<div className="col-12 text-center">
								<button
									className="theme-btn-s2"
									onClick={() =>
										setItemsToShow(itemsToShow + 3)
									}
								>
									Xem Thêm
								</button>
							</div>
						</div>
					)}
				</div>
			</div>
		</>
	);
}

export default LocationEntertainment;
