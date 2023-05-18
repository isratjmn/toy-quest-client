import React from "react";
import About1 from "./../assets/images/about_1.jpg";
import About2 from "./../assets/images/about_2.jpg";

const AboutUs = () => {
	return (
		<>
			<div className="md:mx-20 my-28 grid md:grid-cols-2">
				<div>
					<img src={About1} alt="about" />
				</div>
				<div className="section-title flex flex-col justify-center">
					<div className=" px-8 py-12">
						<div className="flex  mx-auto space-x-3">
							{/* <div className=" w-20 md:w-24 h-1 bg-[#4c4cf1] inline-flex mt-auto mb-5 rounded-e-md rounded-s-md"></div> */}
							<h2 className="text-4xl mb-4 font-bold font-InterVar text-[#4c4cf1]">
								About Us{" "}
							</h2>
							{/* <div className="w-20 md:w-24 h-1 bg-[#4c4cf1] inline-flex mt-auto mb-5 rounded-e-md rounded-s-md"></div> */}
						</div>
						<p className="my-5 font-popins text-slate-800">
                        Building blocks encourage children to explore their creativity and spatial skills. They come in different shapes, sizes, and materials, allowing children to construct structures, buildings, and imaginative designs. Building blocks promote fine motor skills, hand-eye coordination, logical thinking, and spatial awareness.
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default AboutUs;
