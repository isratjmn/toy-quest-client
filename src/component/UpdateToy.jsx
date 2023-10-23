import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";

const UpdateToy = () => {
	const toyy = useLoaderData();

	const { _id, description, toyPrice, quantity } =
		toyy;

	const [formData, setFormData] = useState({
		description,
		toyPrice,
		quantity,
	});

	console.log(toyy);

	const handleToyUpdate = (event) => {
		event.preventDefault();

		// Get the form data
		const updatedToyy = {
			description: event.target.description.value,
			toyPrice: event.target.toyPrice.value,
			quantity: event.target.quantity.value,
		};

		// Send Data to the Server
		fetch(`http://127.0.0.1:7000/alltoys/${_id}`, {
			method: "PUT",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(updatedToyy),
		})
			.then((res) => res.json())
			.then((result) => {
				if (result.modifiedCount > 0) {
					Swal.fire({
						title: "Success!",
						text: "Toy Updated Successfully",
						icon: "success",
						confirmButtonText: "Cool",
					});
				}
			});
	};

	const handleChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	return (
		<div>
			<Helmet>
				<title>TQuest | UpdateToys</title>
			</Helmet>

			<div className="bg-[#FFF3F1] mt-64 py-6 md:mx-20 rounded-xl">
				<h2 className="text-4xl font-bold text-[#4c4cf1] mb-12 mt-16 text-center">
					Update Toys
				</h2>
				<div className="w-[100%] md:w-[40%] mx-auto py-10 bg-gray-200">
					{/* Form */}
					<form onSubmit={handleToyUpdate}>
						<div className="grid  gap-3 w-[80%] mx-auto">

							<div>
								{/* Toy Price */}
								<div className="form-control flex flex-col mt-3">
									<label className="label me-auto mb-2">
										<span className="label-text font-semibold text-sm my-11">
											Toy Price
										</span>
									</label>
									<input
										type="number"
										className="input border focus:outline-none shadow"
										name="toyPrice"
										value={formData.toyPrice}
										onChange={handleChange}
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
										type="text"
										className="input border focus:outline-none shadow"
										name="quantity"
										value={formData.quantity}
										onChange={handleChange}
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
								type="text"
								className="input border focus:outline-none shadow"
								name="description"
								value={formData.description}
								onChange={handleChange}
							/>
						</div>

						<div className="form-control w-[80%] mb-8 mx-auto">
							<input
								type="submit"
								className="text-lg w-full btn btn-full btn-block border-0 py-2 bg-[#4c4cf1] hover-bg-blue-500 text-white mt-5 tracking-widest"
								value="Update"
							/>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default UpdateToy;
