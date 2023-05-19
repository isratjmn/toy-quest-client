import React from "react";
import brand1 from "../assets/images/brand1.png";
import brand2 from "../assets/images/brand-9.png";
import brand3 from "../assets/images/brand-8.png";
import brand4 from "../assets/images/brand-5.png";
import brand5 from "../assets/images/brand-4.png";
import brand6 from "../assets/images/brand-2.png";
import LazyLoad from "react-lazy-load";

const OurBrands = () => {
	return (
		<>
			<h2 className="text-4xl mb-4 font-bold text-center mt-44 font-InterVar text-[#4c4cf1]">
				{" "}
				Our Top Brands{" "}
			</h2>
			<p className="my-5 lg:w-[50%] mx-auto text-center leading-7 text-lg text-slate-800 mb-10 md:mb-8">
			Each brand has its unique focus and product offerings, catering to different age groups, interests, and developmental stages. When choosing toys, consider factors such as age appropriateness, safety, educational value, and the child's interests and abilities.
			</p>
			<div className="md:mx-20 my-20 grid md:grid-cols-5 gap-5">
				<div className="w-[90%] lg:w-full mx-auto gap-5">
					<LazyLoad height={250} offset={50}>
						<div className="flex flex-col px-6 rounded-lg shadow-md bg-[#FFF3F1] py-0">
							<img
								className="py-1 mb-2 w-[97%]"
								src={brand6}
								alt="image"
							/>
						</div>
					</LazyLoad>
				</div>
				<div className="w-[90%] lg:w-full mx-auto">
					<LazyLoad height={250} offset={50}>
						<div className="flex flex-col px-6 rounded-lg shadow-md bg-[#FFF3F1] py-0">
							<img
								className="w-40 py-10 mx-auto"
								src={brand2}
								alt="image"
							/>
						</div>
					</LazyLoad>
				</div>
				<div className="w-[90%] lg:w-full mx-auto">
					<LazyLoad height={250} offset={50}>
						<div className="flex flex-col px-6 rounded-lg shadow-md bg-[#FFF3F1] py-1">
							<img
								className="w-[155px] mx-auto"
								src={brand3}
								alt="image"
							/>
						</div>
					</LazyLoad>
				</div>
				<div className="w-[90%] lg:w-full mx-auto">
					<LazyLoad height={250} offset={50}>
						<div className="flex flex-col px-6 rounded-lg shadow-md bg-[#FFF3F1] py-11">
							<img
								className="w-32 py-2 mb-2 mx-auto"
								src={brand4}
								alt="image"
							/>
						</div>
					</LazyLoad>
				</div>
				<div className="w-[90%] lg:w-full mx-auto">
					<LazyLoad height={250} offset={50}>
						<div className="flex flex-col px-6 rounded-lg shadow-md bg-[#FFF3F1] py-6">
							<img
								className="w-32 py-2 mb-2 mx-auto"
								src={brand5}
								alt="image"
							/>
						</div>
					</LazyLoad>
				</div>
			</div>
		</>
	);
};

export default OurBrands;
