import React from 'react';
import ArticleSidebar from '../article/ArticleSideBar';
import LocationSidebarContact from './LocationSidebarContact';
import LocationSidebarPrices from './LocationSidebarPrices';
import Link from 'next/link';

const LocationSidebar = ({ location }) => {
	console.log('location :>> ', location);
	return (
		<>
			<LocationSidebarContact location={location} />
			{location.PriceList.length > 0 && (
				<LocationSidebarPrices location={location} />
			)}
			<ArticleSidebar articles={location.articles} />
		</>
	);
};

export default LocationSidebar;
