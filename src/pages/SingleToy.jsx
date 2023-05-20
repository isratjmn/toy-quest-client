import React from "react";

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
			<tr>
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
				<td className="text-center">{sellerName}</td>
				<td className="text-center">{toyName}</td>
				<td className="text-center">{toyCategory}</td>
				<td className="text-center">${toyPrice}</td>
				<td className="text-center">{toyRating}</td>
				<td className="text-center">{quantity}</td>
				<td className="text-center">
					<button
						type="button"
						class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
					>
						View Details
					</button>
					
				</td>
			</tr>
		</>
	);
};

export default SingleToy;
