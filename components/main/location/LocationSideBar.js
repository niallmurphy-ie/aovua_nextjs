import React from 'react';
import Link from 'next/link';
import Loading from '../../Loading';
import { VietnameseMenu } from '../../../utils/menu';
import { useRouter } from 'next/router';

const LocationSidebar = ({ location }) => {
	const router = useRouter();
	if (!location) return <Loading />;
	const menu = VietnameseMenu();

	const handleScroll = (e) => {
		e.preventDefault();
		const yOffset = -150;
		const element = document.querySelector(
			e.target.getAttribute('scrollTo')
		);
		const y =
			element.getBoundingClientRect().top + window.pageYOffset + yOffset;

		window.scrollTo({ top: y, behavior: 'smooth' });
	};

	return (
		<div className="col col-lg-4 col-12 order-lg-1">
			<div className="service-sidebar">
				<div className="widget service-list-widget">
					<h3>{location.Name}</h3>
					<ul>
						<li>
							<a
								href="#"
								scrollTo="#location-entertainment-section"
								onClick={handleScroll}
							>
								Vui chơi giải trí
							</a>
						</li>
						<li>
							<a
								href="#"
								scrollTo="#location-accommodation-section"
								onClick={handleScroll}
							>
								Khách sạn nhà hàng
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default LocationSidebar;
