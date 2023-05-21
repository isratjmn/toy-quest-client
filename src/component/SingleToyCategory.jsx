import React from "react";

const SingleToyCategory = ({ singleToyCategory }) => {
	const {
		toyName,
		toyPhoto,
		_id,
		sellerName,
		sellerEmail,
		toyCategory,
		toyPrice,
		toyRating,
		quantity,
	} = singleToyCategory || {};
	return (
		<div>
			<Card className="shadow-2xl">
				<Toaster />
				<img className="h-[250px]" src="" alt="" />
				<div className="flex justify-between">
					<h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white"></h5>
				</div>
				<p></p>
				<h4 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
					Ingredients: {toyName}
				</h4>
				<div className="mb-10"></div>
				<div className="flex space-x-2 items-center">
					<span className="font-bold"></span>
				</div>
			</Card>
		</div>
	);
};

export default SingleToyCategory;
