import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import classNames from 'classnames';
import { FadeInWhenVisible } from '../../../components/utils/Animations';

function HomepageEvents({ locations }) {
	const [itemsToShow, setItemsToShow] = useState(3);

	// Put events from locations into a new array
	const events = locations.map((location) => location.events).flat();

	return (
		<div className="homepage-events">
			<div
				id="homepage-events-section"
				className="col-12 section-padding"
			>
				<div className="wpo-section-title text-center">
					<h2>Hội Thao Sự Kiện</h2>
				</div>
			</div>
			<div className="featured-area featured-sub">
				<div className="container-fluid">
					<div className="row grid ">
						{events.map((event, i) => (
							<div
								className={classNames(
									'col-lg-4 items col-md-6 col-sm-6 col-12',
									{
										hidden: i >= itemsToShow,
									}
								)}
								key={`events_${i}`}
							>
								<FadeInWhenVisible initialScale={0.95}>
									<div className="featured-wrap">
										<div className="featured-img">
											<div className="blog-thumb-badge">
												<div className="blog-thumb-text">
													<span>{event.locations[0].Name}</span>
												</div>
											</div>
											<Image
												src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${event.Thumbnail.url}`}
												alt=""
												height={350}
												width={700}
												objectFit="cover"
											/>
											<div className="featured-content">
												<Link
													href={`/${event.locations[0].urlPrefix}/hoi-thao-su-kien/${event.slug}`}
												>
													<a>{event.Name}</a>
												</Link>
											</div>
										</div>
									</div>
								</FadeInWhenVisible>
							</div>
						))}
					</div>
					{events.length > itemsToShow && (
						<div className="row view-more-entertainment">
							<div className="col-12 text-center">
								<button
									className="theme-btn-s2"
									onClick={() =>
										setItemsToShow(itemsToShow + 6)
									}
								>
									Xem Thêm
								</button>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

export default HomepageEvents;
