import React from "react";
import Banner from "../component/Banner";
import ImageGallery from "../component/ImageGallery";
import AboutUs from "../component/AboutUs";
import Category from "../component/Category";
import OurBrands from "../component/OurBrands";
import MapView from "../component/MapView";
import { Helmet } from "react-helmet";

const Home = () => {
	return (
		<>
			<Helmet>
				<title>PHero | Home</title>
			</Helmet>
			<Banner />
			<AboutUs />
			<Category />
			<ImageGallery />
			<OurBrands />
			<MapView />
		</>
	);
};

export default Home;
