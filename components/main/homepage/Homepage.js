import React, { useEffect, useState } from 'react';
import Hero from './Hero';
import Search from './Search';
import About from './AboutUs';
import LatestNewsSection from './LatestNews';
import Entertainment from './Entertainment';
import Destination from './Destination';
import HotelRestaurant from './HotelRestaurant';
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

import { lazy, Suspense } from 'react';

const HomePage = ({ homepageData, articles, entertainment, locations }) => {
	if (!homepageData) return <Loading />;

	console.log('entertainment', entertainment);

	return (
		<>
			<Hero
				heroImages={homepageData.HomepageLocationsSlider}
			/>
			<Search />
			<About
				greetingMessage={homepageData.Greeting}
				greetingImage={homepageData.GreetingImage}
				greetingYoutubeURL={homepageData.GreetingYoutubeURL}
			/>
			<LatestNewsSection articles={articles} />
			<Destination locations={locations} />
			<Entertainment entertainment={entertainment} />
			<HotelRestaurant />
			{/*<Destination2 />
			<RoomSection />
			<Features />
			<Testimonial />
			<Scrollbar /> */}
		</>
	);
};
export default HomePage;
