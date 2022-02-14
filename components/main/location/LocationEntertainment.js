import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

function LocationEntertainment({ location }) {
	console.log('entertainments :>> ', location.entertainments);
	const ClickHandler = () => {
		window.scrollTo(10, 0);
	};
	return (
		<>
			<div className="col-12">
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
								key={i}
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
				</div>
			</div>
		</>
	);
}

export default LocationEntertainment;
