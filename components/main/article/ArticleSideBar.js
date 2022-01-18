import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ArticleSideBarCategories from './ArticleSideBarCategories';
import ArticleSideBarArticles from './ArticleSideBarArticles';
import Loading from '../../Loading';

import inst1 from '../../../public/images/images/instragram/1.jpg';
import inst2 from '../../../public/images/images/instragram/2.jpg';
import inst3 from '../../../public/images/images/instragram/3.jpg';
import inst4 from '../../../public/images/images/instragram/4.jpg';
import inst5 from '../../../public/images/images/instragram/5.jpg';
import inst6 from '../../../public/images/images/instragram/6.jpg';

import about from '../../../public/images/images/blog/profile.png';
import bicon from '../../../public/images/images/blog/icon.png';

const ArticleSidebar = ({ articles, categories }) => {

	return (
		<div className={`col col-lg-4 col-12 `}>
			<div className="wpo-blog-sidebar">
				<ArticleSideBarCategories categories={categories} />
				<ArticleSideBarArticles articles={articles} />
			</div>
		</div>
	);
};

export default ArticleSidebar;
