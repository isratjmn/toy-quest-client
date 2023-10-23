import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const SingleToy = ({ toy, index }) => {
	const {
		_id,
		toyName,
		toyPhoto,
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
					{index}
				</th>
				<td>
					<div className="avatar text-center">
						<div className="w-24 h-24">
							{toyPhoto && <img className="rounded-xl" src={toyPhoto} alt="" />}
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
