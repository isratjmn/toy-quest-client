import React from "react";
import Banner from "../component/Banner";
import ImageGallery from "../component/ImageGallery";
import AboutUs from "../component/AboutUs";
import Category from "../component/Category";

const Home = () => {
	return (
		<>
			<Banner />
			<AboutUs />
			<Category />
			<ImageGallery />
		</>
	);
};

export default Home;
