import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button, Modal } from "flowbite-react";

import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";

const UpdateToy = () => {
	const updateField = useLoaderData();

	const {
		_id,
		toyName,
		toyPhoto,
		sellerName,
		toyCategory,
		description,
		toyPrice,
		toyRating,
		quantity,
	} = updateField;
	console.log(updateField);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	/* const handleToyUpdate = (data) => {
		console.log(data);
		fetch(`https://toy-quest-server.vercel.app/updatedtoy/${data._id}`, {
			method: "PUT",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then((result) => {
				if (result.modifiedCount > 0) {
					setControl(!control);
				}
				console.log(result);
			});
	}; */

	return (
		<div>
			<Helmet>
				<title>TQuest | UpdateToys</title>
			</Helmet>

			<div className="bg-[#FFF3F1] mt-64 py-6 md:mx-20 rounded-xl mb-8">
				<h2 className="text-4xl font-bold text-[#4c4cf1] mb-12 mt-16 text-center">
					Update Toys
				</h2>
				<div className="w-[100%] md:w-3/5 mx-auto">
					
					{/* Form */}
					<form onSubmit={() => handleSubmit(handleToyUpdate)}>
						{errors.exampleRequired && (
							<span>This field is required</span>
						)}
						<div className="grid grid-cols-2 gap-3 w-[80%] mx-auto">
							<div>
								{/* Seller Name */}
								<div className="form-control flex flex-col">
									<label className="label me-auto mb-2">
										<span className="label-text font-semibold text-sm">
											Seller Name
										</span>
									</label>
									<input
										required
										className="input border rounded-md focus:outline-none shadow"
										type="text"
										defaultValue={sellerName}
										{...register("sellerName")}
									/>
								</div>
							</div>

							<div>
								{/* Toy Category */}
								<div className="form-control flex flex-col">
									<label className="label me-auto mb-2">
										<span className="label-text font-semibold text-sm">
											Toy Category
										</span>
									</label>
									<select
										className="input rounded-md"
										{...register("toyCategory")}
										defaultValue={toyCategory}
									>
										<option value="scientific">
											Scientific Toys
										</option>
										<option value="language">
											Language Toys
										</option>
										<option value="math">Math Toys</option>
									</select>
								</div>
							</div>

							<div>
								{/* Toy Price */}
								<div className="form-control flex flex-col mt-3">
									<label className="label me-auto mb-2">
										<span className="label-text font-semibold text-sm my-11">
											Toy Price
										</span>
									</label>
									<input
										required
										className="input border rounded-md focus:outline-none shadow"
										type="number"
										defaultValue={toyPrice}
										{...register("toyPrice")}
									/>
								</div>
							</div>

							<div>
								{/* Available Quantity */}
								<div className="form-control flex flex-col mt-3">
									<label className="label me-auto mb-2">
										<span className="label-text font-semibold text-sm">
											Available Quantity
										</span>
									</label>
									<input
										required
										className="input border rounded-md focus:outline-none shadow"
										type="text"
										defaultValue={quantity}
										{...register("quantity")}
									/>
								</div>
							</div>
						</div>

						{/* Toy Details */}
						<div className="form-control mt-4 flex flex-col w-[80%] mx-auto">
							<label className="label me-auto mb-2">
								<span className="label-text font-semibold text-sm">
									Toy Details
								</span>
							</label>
							<textarea
								required
								className="input border rounded-md focus:outline-none shadow"
								type="text"
								defaultValue={description}
								{...register("description")}
							/>
						</div>

						<div className="form-control mt-6 w-[80%] mb-8 mx-auto">
							<input
								className="text-lg w-full btn btn-full btn-block border-0 rounded-lg py-2 bg-[#4c4cf1] hover:bg-blue-500 text-white mt-5 tracking-widest"
								type="submit"
								value="Update Toys"
							/>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default UpdateToy;
