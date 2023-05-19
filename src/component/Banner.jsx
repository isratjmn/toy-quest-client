import React from "react";

const Banner = () => {
	return (
		<div>
			
			<div
				className={`px-8 md:px-20 bg-[url('./assets/banner.jpg')] bg-center bg-no-repeat relative z-20 h-screen`}
				style={{backgroundSize: 'cover'}}
			>
				<div className="absolute inset-0 bg-[rgba(0,0,0,0.8)] z-[1] "></div>
				<div className="flex items-center">
					<div className=" md:w-2/4 mx-auto text-center text-white z-40 relative py-28">
						<h2 className="font-InterVar mb-10 font-extrabold text-center mt-36 text-3xl md:text-5xl text-[#4c4cf1] ">
							Welcome to ToyQuest
							
						</h2>
						
						<p className="text-lg leading-8 font-normal text-center">
							Learning toys are designed to engage children in play while facilitating their educational and developmental growth ....
						</p>
						<button className="text-xl px-7 rounded-lg py-3 mt-8 bg-[#4c4cf1] hover:bg-blue-500">
							Subscribe
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
