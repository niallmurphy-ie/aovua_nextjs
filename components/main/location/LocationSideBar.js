import React from 'react';
import Link from 'next/link';
import Loading from '../../Loading';
import { VietnameseMenu } from '../../../utils/menu';
import { useRouter } from 'next/router';

const LocationSidebar = ({ location }) => {
	const ClickHandler = () => {
		window.scrollTo(10, 0);
	};

	const router = useRouter();
	if (!location) return <Loading />;
	console.log('router', router);
	const menu = VietnameseMenu();
	console.log(
		'menu',
		menu.components[1].subMenu.map((item) => item.title)
	);
	console.log('location', location);

	return (
		<div className="col col-lg-4 col-12 order-lg-1">
			<div className="service-sidebar">
				<div className="widget service-list-widget">
					<h3>Tất cả địa điểm</h3>
					<ul>
						{menu.components[1].subMenu.map((item, index) => (
							<li
								className={
									item.link.includes(location.urlPrefix) ?
									'current' : undefined
								}
								key={router.route + index}
							>
								<Link onClick={ClickHandler} href={item.link}>
									<a>{item.title}</a>
								</Link>
							</li>
						))}
					</ul>
				</div>
				<div className="widget contact-widget">
					<div>
						<h4>Request a Call Back</h4>
						<h2>(523) 456-789</h2>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LocationSidebar;
