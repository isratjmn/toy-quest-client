import React from "react";
import About1 from "./../assets/images/about_1.jpg";
import About2 from "./../assets/images/about_2.jpg";

const AboutUs = () => {
	return (
		<>
			<h2 className="text-4xl mb-4 font-bold text-center mt-44 font-InterVar text-[#4c4cf1]">
				{" "}
				About Us{" "}
			</h2>
			<p className="my-5 lg:w-[50%] mx-auto text-center leading-7 text-lg text-slate-800 mb-10 md:mb-16">
				Toys are specifically crafted to provide interactive and
				hands-on experiences that promote learning in various areas such
				as cognitive skills, problem-solving abilities, creativity, and
				more.
			</p>

			<div className="md:mx-20 my-20 grid md:grid-cols-2">
				<div>
					<img src={About1} alt="about" />
				</div>
				<div className="section-title flex flex-col justify-center">
					<div className=" px-8 py-12">
						<div className="flex  mx-auto space-x-3"></div>
						<p className="my-5 text-slate-800 leading-7 text-lg">
							Building blocks encourage children to explore their
							creativity and spatial skills. They come in
							different shapes, sizes, and materials, allowing
							children to construct structures, buildings, and
							imaginative designs. Building blocks promote fine
							motor skills, hand-eye coordination, logical
							thinking, and spatial awareness.
						</p>
						<br />
						<p className="my-5 text-slate-800 leading-7 text-lg">
							Toy Categories: A toy website typically organizes
							toys into various categories, making it easier for
							customers to navigate and find specific types of
							toys. Common categories may include age groups,
							brands, toy types, and popular themes. 
							<br />
							<br />
							Product Listings: Each toy category will have its dedicated
							product listings, showcasing individual toys with
							images, descriptions, pricing, and customer reviews.
							These listings allow customers to browse through the
							available options and make informed purchasing
							decisions.
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default AboutUs;
