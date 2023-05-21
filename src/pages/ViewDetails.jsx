import React from "react";
import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";

const ViewDetails = () => {
	const viewDetail = useLoaderData();

	const {
		toyName,
		toyPhoto,
		sellerName,
		sellerEmail,
		toyCategory,
		description,
		toyPrice,
		toyRating,
		quantity,
	} = viewDetail;

	return (
		<>
		<Helmet>
				<title>TQuest | Details</title>
			</Helmet>
		<div className="mt-40 mb-10">
			<div className="grid grid-cols md:grid-cols-5 space-y-3 gap-y-4 md:mx-20 md:gap-y-0 md:gap-8 border drop-shadow-sm p-3 md:p-5">
				<div className=" card col-span-1 min-h-[10vh] flex justify-center items-center bg-gray-200 py-6 rounded-md">
					<img className="w-[90%]" src={toyPhoto} alt="" />
				</div>
				<div className="col-span-3 flex flex-col">
					<h1 className="font-bold my-1 text-4xl mb-6">{toyName}</h1>
					<h1 className="my-2 text-black font-bold text-xl">{description}</h1>
					<p className="font-semibold text-xl">
						Product Category :{toyCategory}
					</p>
					<p className="font-semibold text-xl leading-10">
						Stock : {quantity}
					</p>
					<p className="font-semibold text-xl leading-8">
						Ratings : {toyRating}
					</p>

					<p className="text-xl font-semibold leading-8">Price: ${toyPrice}</p>

					<div className="w-[50%] mt-4">
						<button
							to="/"
							className=" text-white hover:bg-purple-800 px-5 py-2 bg-[#4c4cf1] rounded-md transition-all duration-150 cursor-pointer mr-5 md:mr-0"
						>
							Shop Now
						</button>
					</div>
				</div>
			</div>
		</div>
		</>
	);
};

export default ViewDetails;
