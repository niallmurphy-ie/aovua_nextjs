import React, { useEffect, useState } from 'react';
import Hero from '../main/Hero';
import Search from '../main/Search';
// import About2 from '../../components/about2';
// import Destination2 from '../../components/Destination2';
// import RoomSection from '../../components/RoomSection';
// import Features from '../../components/Features';
// import Testimonial from '../../components/Testimonial';
// import LatestNewsSection from '../../components/LatestNewsSection';
// import Scrollbar from '../../components/scrollbar';
import { useQuery } from '@apollo/client';
import { HOMEPAGE } from '../../lib/queries';
import Loading from '../Loading';

const HomePage = () => {
	// States
	const [homepageData, setHomepageData] = useState({});
	// graphQL query
	const homepage = useQuery(HOMEPAGE);
	// Fill state
	useEffect(() => {
		if (homepage.data) {
			setHomepageData(homepage.data.homepage);
		}
	}, [homepage.data]);

	if (homepage.loading) return <Loading />;
	if (homepage.error) return <p>Error</p>;

	return (
		<>
			<Hero
				heroClass={'hero-style-2'}
				heroImages={homepageData.HeroImages}
			/>
			<Search />
			{/*<About2
				greetingMessage={homepageData.Greeting}
				greetingImage={homepageData.GreetingImage}
			/>
			<LatestNewsSection />
			<Destination2 />
			<RoomSection />
			<Features />
			<Testimonial />
			<Scrollbar /> */}
		</>
	);
};
export default HomePage;
