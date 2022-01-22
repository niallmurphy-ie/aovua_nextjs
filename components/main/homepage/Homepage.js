import React, { useEffect, useState } from 'react';
import Hero from './Hero';
import Search from './Search';
import About from './HomepageAboutUs';
import LatestNewsSection from './LatestNews';
// import About2 from '../../components/about2';
// import Destination2 from '../../components/Destination2';
// import RoomSection from '../../components/RoomSection';
// import Features from '../../components/Features';
// import Testimonial from '../../components/Testimonial';

// import Scrollbar from '../../components/scrollbar';
import { useQuery } from '@apollo/client';
import { HOMEPAGE } from '../../../lib/queries';
import Loading from '../../Loading';
import { initializeApollo, addApolloState } from '../../../lib/apolloClient';

import { lazy, Suspense } from 'react'


const HomePage = ({ homepageData, articles }) => {

	if (!homepageData) return <Loading />;

	console.log(homepageData);

	return (
		<>
			<Hero
				heroClass={'hero-style-2'}
				heroImages={homepageData.HeroImages}
			/>
			<Search />
			<About
				greetingMessage={homepageData.Greeting}
				greetingImage={homepageData.GreetingImage}
				greetingYoutubeURL={homepageData.GreetingYoutubeURL}
			/>
			<LatestNewsSection articles={articles} />
			{/*<Destination2 />
			<RoomSection />
			<Features />
			<Testimonial />
			<Scrollbar /> */}
		</>
	);
};
export default HomePage;
