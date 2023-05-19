import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";


const ImageGallery = () => {
	return (
		<>
			<h2 className="text-4xl mb-4 font-bold text-center mt-96 font-InterVar text-[#4c4cf1]">
				{" "}
				Toy Gallery{" "}
			</h2>

			<p className="my-5 w-[50%] mx-auto text-center leading-8 text-xl text-slate-800 mb-24">
				Toys are specifically crafted to provide interactive and
				hands-on experiences that promote learning in various areas such
				as cognitive skills, problem-solving abilities, creativity, and
				more.
			</p>
			<div class="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
				<div class="grid lg:gap-y-14 row-start-1 row-end-4">
					<div>
						<img
							class="h-auto max-w-full rounded-lg"
							src="https://i.ibb.co/f41pP4R/school-item.jpg"
							alt=""
						/>
					</div>
					<div>
						<img
							class="h-auto max-w-full rounded-lg col-span-2"
							src="https://i.ibb.co/28XNFrb/supplies.jpg"
							alt=""
						/>
					</div>
				</div>
				<div class="grid lg:gap-4 row-start-1 row-end-4 ">
					<div>
						<img
							class="h-auto max-w-full rounded-lg col-span-2"
							src="https://i.ibb.co/GC4xmfj/gallery-3.jpg"
							alt=""
						/>
					</div>
					<div>
						<img
							class="h-auto max-w-full rounded-lg"
							src="https://i.ibb.co/zQrH4KS/various-stationery.jpg"
							alt=""
						/>
					</div>
				</div>
				<div class="grid lg:gap-0 row-start-1 row-end-4">
					<div>
						<img
							
							class="h-auto max-w-full rounded-lg"
							src="https://i.ibb.co/tC41zMK/gallery-2.jpg"
							alt=""
						/>
					</div>
					<div>
						<img
						
							class="h-auto max-w-full rounded-lg"
							src="https://i.ibb.co/mhWMzRZ/gallery-4.jpg"
							alt=""
						/>
					</div>
				</div>
				<div class="grid lg:gap-y-28 row-start-1 row-end-5">
					<div>
						<img
							class="h-[100%] max-w-full rounded-lg"
							src="https://i.ibb.co/SP32nWq/gallery-8.jpg"
							alt=""
						/>
					</div>
					<div>
						<img
							class="h-[90%] lg:h-auto max-w-full rounded-lg"
							src="https://i.ibb.co/bL7mHWp/gallery-9.jpg"
							alt=""
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default ImageGallery;
