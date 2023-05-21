import React from "react";
import {
	FaPhoneAlt
} from "react-icons/fa";

const MapView = () => {
	return (
		<div>
			<div
				className={`px-8 md:px-20 bg-[url('./assets/banner.jpg')] bg-center bg-no-repeat relative z-20 h-96`}
				style={{ backgroundSize: "cover", position: "sticky" }} data-aos="fade-right"
				data-aos-offset="300"
				data-aos-easing="ease-in-sine"
			>
				<div className="absolute inset-0 bg-[rgba(0,0,0,0.8)] z-[1]"></div>
				<div className="flex items-center ">
					<div className="mx-auto text-center text-white z-40 relative py-28">
						
						<h1 className="text-xl md:text-4xl font-bold">Want to Know about Us?</h1>
                        {/* Sign Up Form */}
						<div className="section-signup bg1-pattern p-t-86 p-b-86 mt-10 mx-auto">
							<form className="flex">
								<div>
									<input className="py-[12.25px] px-2 md:px-14"
										type="text"
										name="email-address"
									/>
								</div>
								<button
									type="button"
									className="text-white bg-gradient-to-r bg-indigo-700 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium text-sm px-4 md:px-8 py-[15px] text-center mr-2 mb-2"
								>
									Subscibe
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MapView;

