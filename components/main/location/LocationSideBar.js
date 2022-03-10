import React from 'react';
import Link from 'next/link';
import Loading from '../../Loading';
import { VietnameseMenu } from '../../../utils/menu';
import { useRouter } from 'next/router';
import ArticleSidebar from '../article/ArticleSideBar';

const LocationSidebar = ({ location }) => {

	return (
		<ArticleSidebar articles={location.articles} />
	);
};

export default LocationSidebar;
