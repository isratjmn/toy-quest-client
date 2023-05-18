import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const images = [
	// "https://i.ibb.co/f41pP4R/school-item.jpg",
	// "https://i.ibb.co/SxjF0qj/drawing.jpg",
	// "https://i.ibb.co/tC41zMK/gallery-2.jpg",
	// "https://i.ibb.co/qJHP6VJ/gallery-1.jpg",
	// "https://i.ibb.co/28XNFrb/supplies.jpg",
	// "https://i.ibb.co/zQrH4KS/various-stationery.jpg",
	// "https://i.ibb.co/qjnkdXr/Water-Doodle-Mat.jpg",
	// "https://i.ibb.co/GC4xmfj/gallery-3.jpg",
	// "https://i.ibb.co/SNw5JRh/Montessori-Mama-Wooden.jpg",
	/* 	https://i.ibb.co/mhWMzRZ/gallery-4.jpg
		https://i.ibb.co/CbTBnMC/VTech-Smart-Shots-Sports-Center.jpg */
];

const ImageGallery = () => {
	return (
		<>
			{/* <h2 className="text-4xl font-bold text-center mt-96 font-vibes text-red-700">
				{" "}
				Toy Gallery{" "}
			</h2>
			<div style={{ paddingTop: "50px" }}>
				<ResponsiveMasonry
					columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
				>
					<Masonry gutter="10px">
						{images.map((image, i) => (
							<img
								key={i}
								src={image}
								style={{ width: "100%", display: "block" }}
								alt=""
							/>
						))}
					</Masonry>
				</ResponsiveMasonry>
			</div> */}

			<h2 className="text-4xl mb-4 font-bold text-center mt-96 font-InterVar text-[#4c4cf1]">
				{" "}
				Toy Gallery{" "}
			</h2>

			<p className="my-5 w-[50%] mx-auto text-center font-popins text-slate-800 mb-24">
				toys are specifically crafted to provide interactive and
				hands-on experiences that promote learning in various areas such
				as cognitive skills, problem-solving abilities, creativity, and
				more.
			</p>
			<div class="grid grid-cols-2 md:grid-cols-4 gap-4">
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
				<div class="grid lg:gap-y-28 row-start-1 row-end-4">
					<div>
						<img
							class="h-[100%] max-w-full rounded-lg"
							src="https://i.ibb.co/SP32nWq/gallery-8.jpg"
							alt=""
						/>
					</div>
					<div>
						<img
							class="lg:h-60 max-w-full rounded-lg"
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
