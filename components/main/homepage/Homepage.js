import React from "react";
import Hero from "./Hero";
import Search from "./Search";
import About from "./AboutUs";
import LatestNewsSection from "./LatestNews";
import Entertainment from "./Entertainment";
import Locations from "./Locations";
import HotelRestaurant from "./HotelRestaurant";
import Sightseeing from "./Sightseeing";
import HeroLocations from "./HeroLocations";
import HomepageEvents from "./HomepageEvents";
import HomepageProduct from "./HomepageProduct";

import Loading from "../../Loading";
import Router from "next/router";
import { getSiteVersion } from "../../../utils/siteVersion";

const HomePage = ({ homepageData, articles, entertainment, locations, sightseeings, products }) => {
	if (!homepageData) return <Loading />;



	return (
		<>
			<Hero locations={locations} heroImages={homepageData.HomepageLocationsSlider} />
			{/* <Search /> */}
			<HeroLocations locations={locations} />
			<About
				greetingMessage={homepageData.Greeting}
				greetingImage={homepageData.GreetingImage}
				greetingYoutubeURL={homepageData.GreetingYoutubeURL}
			/>
			<LatestNewsSection articles={articles} />
			{products && products.length > 0 && <HomepageProduct product={products[0]} />}
			<Locations locationText={homepageData.LocationsText} locations={locations} />
			<Entertainment entertainment={entertainment} />
			<HotelRestaurant locations={locations} limit={3} />
			<Sightseeing sightseeingText={homepageData.SightseeingText} sightseeings={sightseeings} />
			<HomepageEvents locations={locations} />
			{/*<Destination2 />
			<RoomSection />
			<Features />
			<Testimonial />
			<Scrollbar /> */}
		</>
	);
};
export default HomePage;
