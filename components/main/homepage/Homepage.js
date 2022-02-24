import React from 'react';
import Hero from './Hero';
import Search from './Search';
import About from './AboutUs';
import LatestNewsSection from './LatestNews';
import Entertainment from './Entertainment';
import Locations from './Locations';
import HotelRestaurant from './HotelRestaurant';
import Sightseeing from './Sightseeing';

import Loading from '../../Loading';

const HomePage = ({
	homepageData,
	articles,
	entertainment,
	locations,
	sightseeings,
}) => {
	if (!homepageData) return <Loading />;

	return (
		<>
			<Hero heroImages={homepageData.HomepageLocationsSlider} />
			{/* <Search /> */}
			<About
				greetingMessage={homepageData.Greeting}
				greetingImage={homepageData.GreetingImage}
				greetingYoutubeURL={homepageData.GreetingYoutubeURL}
			/>
			<LatestNewsSection articles={articles} />
			<Locations
				locationText={homepageData.LocationsText}
				locations={locations}
			/>
			<Entertainment entertainment={entertainment} />
			<HotelRestaurant locations={locations} />
			<Sightseeing
				sightseeingText={homepageData.SightseeingText}
				sightseeings={sightseeings}
			/>
			{/*<Destination2 />
			<RoomSection />
			<Features />
			<Testimonial />
			<Scrollbar /> */}
		</>
	);
};
export default HomePage;
