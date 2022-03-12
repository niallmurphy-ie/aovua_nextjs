import React from 'react';
import ArticleSidebar from '../article/ArticleSideBar';
import LocationSidebarContact from './LocationSidebarContact';

const LocationSidebar = ({ location }) => {
	return (
		<>
			<LocationSidebarContact location={location} />
			<ArticleSidebar articles={location.articles} />
		</>
	);
};

export default LocationSidebar;
