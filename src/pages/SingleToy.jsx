import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const SingleToy = ({ toy }) => {
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
	} = toy || {};

	return (
		<>
			{/* Dynamic Routes */}
			<Helmet>
				<title>TQuest | Toy</title>
			</Helmet>
			<tr className="border">
				<th scope="col" class="p-4">
					<div class="flex items-center">
						<input
							id="checkbox-all-search"
							type="checkbox"
							class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
						/>
						<label for="checkbox-all-search" class="sr-only">
							checkbox
						</label>
					</div>
				</th>
				<td>
					<div className="avatar text-center">
						<div className="rounded w-24 h-24">
							{toyPhoto && <img src={toyPhoto} alt="" />}
						</div>
					</div>
				</td>
				<td className="text-center text-base font-semibold">
					{sellerName}
				</td>
				<td className="text-center text-base font-semibold">
					{toyName}
				</td>
				<td className="text-center text-base font-semibold">
					{toyCategory}
				</td>
				<td className="text-center text-base font-semibold">
					${toyPrice}
				</td>
				<td className="text-center text-base font-semibold">
					{toyRating}
				</td>
				<td className="text-center text-base font-semibold">
					{quantity}
				</td>
				<td className="text-center">
					<Link to={`/viewdetails/${_id}`}>
						<button
							type="button"
							class="text-white bg-gradient-to-br from-purple-600 to-blue-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
						>
							View Details
						</button>
					</Link>
				</td>
			</tr>
		</>
	);
};

export default SingleToy;
