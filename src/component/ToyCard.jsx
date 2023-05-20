import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const ToyCard = ({ toy }) => {
	const { _id, toyName, toyPhoto, toyPrice, toyRating } = toy;

	return (
		<div>
			<div className="card w-full h-full bg-base-100 p-7 shadow-xl border rounded-xl">
				<figure>
					<h2></h2>
					<img
						className="h-52 object-contain mx-auto mb-6"
						src={toyPhoto}
						alt="toy"
					/>
				</figure>
				<div className="card-body">
					<h2 className="card-title font-bold text-2xl">{toyName}</h2>
					<h4 className="text-[#11d6e1] text-base font-bold">
						On Sale ${" "}
						<span className="text-[#11d9b1]">{toyPrice}</span> USD
					</h4>
					<h4 className="text-yellow-500 font-bold text-xl flex gap-1 items-center">
						Ratings: {toyRating} <FaStar></FaStar>
					</h4>
					<div>
						<Link to={`/viewdetails/${_id}`}>
							<button className="text-white hover:bg-purple-800 px-5 py-2 bg-[#4c4cf1] rounded-md transition-all duration-150 cursor-pointer mr-5 md:mr-0 mt-4">
								View Details
							</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ToyCard;
