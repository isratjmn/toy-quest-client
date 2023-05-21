import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const ImageGallery = () => {
	return (
		<div className="my-6 pt-24">
			<h2 className="text-4xl mb-4 font-bold text-center mt-6 text-[#4c4cf1]">
				{" "}
				Toy Gallery{" "}
			</h2>

			<p className="my-5 w-[95%] lg:w-[50%] mx-auto text-center leading-7 text-lg text-slate-800 mb-10 md:mb-24">
				Toys are specifically crafted to provide interactive and
				hands-on experiences that promote learning in various areas such
				as cognitive skills, problem-solving abilities, creativity, and
				more.
			</p>
			<div className="grid grid-cols-1 md:grid-cols-4 gap-2 me-2 md:me-0 md:gap-4">
				<div className="grid lg:gap-y-14 row-start-1 row-end-4 ">
					<div data-aos-duration="2000" data-aos="zoom-in">
						<img
							className="h-auto max-w-full rounded-lg"
							src="https://i.ibb.co/f41pP4R/school-item.jpg"
							alt=""
						/>
					</div>
					<div data-aos-duration="2000" data-aos="zoom-in">
						<img
							className="h-auto max-w-full rounded-lg col-span-2"
							src="https://i.ibb.co/28XNFrb/supplies.jpg"
							alt=""
						/>
					</div>
				</div>
				<div className="grid lg:gap-4 row-start-1 row-end-4 ">
					<div data-aos-duration="2000" data-aos="zoom-in">
						<img
							className="h-auto max-w-full rounded-lg col-span-2"
							src="https://i.ibb.co/GC4xmfj/gallery-3.jpg"
							alt=""
						/>
					</div>
					<div data-aos-duration="2000" data-aos="zoom-in">
						<img
							className="h-auto max-w-full rounded-lg"
							src="https://i.ibb.co/zQrH4KS/various-stationery.jpg"
							alt=""
						/>
					</div>
				</div>
				<div className="grid lg:gap-0 row-start-1 row-end-4">
					<div data-aos-duration="2000" data-aos="zoom-in">
						<img
							className="h-auto max-w-full rounded-lg"
							src="https://i.ibb.co/tC41zMK/gallery-2.jpg"
							alt=""
						/>
					</div>
					<div data-aos-duration="2000" data-aos="zoom-in">
						<img
							className="h-auto max-w-full rounded-lg"
							src="https://i.ibb.co/mhWMzRZ/gallery-4.jpg"
							alt=""
						/>
					</div>
				</div>
				<div className="grid lg:gap-y-28 row-start-1 row-end-5 lg:row-end-4" >
					<div  data-aos-duration="2000" data-aos="zoom-in">
						<img
							className="h-[100%] max-w-full rounded-lg"
							src="https://i.ibb.co/SP32nWq/gallery-8.jpg"
							alt=""
						/>
					</div>
					<div data-aos-duration="2000" data-aos="zoom-in">
						<img
							className="h-[90%] lg:h-[100%] max-w-full rounded-lg"
							src="https://i.ibb.co/bL7mHWp/gallery-9.jpg"
							alt=""
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ImageGallery;
