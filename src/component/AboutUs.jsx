import React from "react";
import About1 from "./../assets/images/about_1.jpg";
import About2 from "./../assets/images/about_2.jpg";

const AboutUs = () => {
	return (
		<div className="md:mx-20 my-28 grid md:grid-cols-2">
			<div>
				<img src={About1} alt="about" />
			</div>
			<div className="section-title flex flex-col justify-center">
				<div className=" px-8 py-12">
					<div className="flex  mx-auto space-x-3">
						<h2 className="text-4xl mb-4 font-bold font-InterVar text-[#4c4cf1]">
							About Us{" "}
						</h2>
					</div>
					<p className="my-5 text-slate-800 leading-7 text-base">
						Building blocks encourage children to explore their
						creativity and spatial skills. They come in different
						shapes, sizes, and materials, allowing children to
						construct structures, buildings, and imaginative
						designs. Building blocks promote fine motor skills,
						hand-eye coordination, logical thinking, and spatial
						awareness.
					</p>
				</div>
			</div>
		</div>
	);
};

export default AboutUs;
