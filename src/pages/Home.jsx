import React from "react";
import Banner from "../component/Banner";
import ImageGallery from "../component/ImageGallery";
import AboutUs from "../component/AboutUs";
import Category from "../component/Category";
import OurBrands from "../component/OurBrands";

const Home = () => {
	return (
		<>
			<Banner />
			<AboutUs />
			<Category />
			<ImageGallery />
			<OurBrands />
		</>
	);
};

export default Home;
