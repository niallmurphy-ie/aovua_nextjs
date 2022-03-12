import React from 'react';
import ArticleSidebar from '../article/ArticleSideBar';
import LocationSidebarContact from './LocationSidebarContact';

const LocationSidebar = ({ location }) => {
	return (
		<>
			<ArticleSidebar articles={location.articles} />
			<LocationSidebarContact location={location} />
		</>
	);
};

export default LocationSidebar;
