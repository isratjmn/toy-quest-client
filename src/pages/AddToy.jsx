import Swal from "sweetalert2";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../provider/AuthProvider";

const AddToy = () => {
	const { user } = useContext(AuthContext);
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => {
		const userData = { ...data, sellerEmail: user.email };
		fetch("http://localhost:5000/addtoy", {
			method: "POST",
			headers: { "content-type": "application/json" },
			body: JSON.stringify(userData),
		})
			.then((res) => res.json())
			.then((result) => {
				console.log(result);
				if (result.insertedId) {
					Swal.fire({
						title: "Success!",
						text: "Toys Added Successfully",
						icon: "success",
						confirmButtonText: "Ok",
					});
				}
			});
	};

	return (
		<div className="bg-[#FFF3F1] mt-64 md:mx-20 rounded-xl">
			<div className="w-[90%] md:w-3/5 mx-auto">
				<div className="py-12 text-center">
					<h2 className="text-4xl font-bold text-[#4c4cf1] mb-12 mt-16">
						Add Your Toy
					</h2>
					<form onSubmit={handleSubmit(onSubmit)}>
						{errors.exampleRequired && (
							<span>This field is required</span>
						)}
						<div className="grid grid-cols-2 gap-3">
							<div>
								{/* Toy Photo URL  */}
								<div className="form-control flex flex-col ">
									<label className="label me-auto mb-2">
										<span className="label-text font-semibold text-sm ms-auto">
											Toy Photo URL
										</span>
									</label>
									<input
										required
										className="input border-0 focus:outline-none shadow"
										type="text"
										defaultValue=""
										{...register("toyPhoto")}
									/>
								</div>
							</div>

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
										className="input border-0 focus:outline-none shadow"
										type="text"
										defaultValue={user?.displayName}
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
										className="input"
										{...register("toyCategory")}
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

								{/* Toy Price */}
								<div className="form-control flex flex-col mt-3">
									<label className="label me-auto mb-2">
										<span className="label-text font-semibold text-sm my-11">
											Toy Price
										</span>
									</label>
									<input
										required
										className="input border-0 focus:outline-none shadow"
										type="number"
										defaultValue="500"
										{...register("toyPrice")}
									/>
								</div>
							</div>

							<div>
								{/* Toy Rating */}
								<div className="form-control flex flex-col">
									<label className="label me-auto mb-2">
										<span className="label-text font-semibold text-sm pb-4">
											Toy Rating
										</span>
									</label>
									<input
										className="input border-0 focus:outline-none shadow"
										type="text"
										defaultValue="4.5"
										{...register(
											"toyRating",
											// For Rating Limitations: 0 to 5, I'm using Chat GPT.
											{
												pattern: {
													value: /^(?:[0-4](\.\d{1,2})?|5(\.0{1,2})?)$/,
													message:
														"Please Write Your Rating Between 0 and 5",
												},
											}
										)}
									/>
									{errors.toyRating && (
										<span className="text-lg text-red-700 mt-1 text-start">
											{errors.toyRating.message}
										</span>
									)}
								</div>

								{/* Available Quantity */}
								<div className="form-control flex flex-col mt-3">
									<label className="label me-auto mb-2">
										<span className="label-text font-semibold text-sm">
											Available Quantity
										</span>
									</label>
									<input
										required
										className="input border-0 focus:outline-none shadow"
										type="text"
										defaultValue="15"
										{...register("quantity")}
									/>
								</div>
							</div>
						</div>

						{/* Toy Name */}
						<div className="w-[100%] form-control flex flex-col mt-3">
							<label className="label me-auto mb-2">
								<span className="label-text font-semibold text-sm pt-4">
									Toy Name
								</span>
							</label>
							<input
								required
								className="input border-0 focus:outline-none shadow"
								type="text"
								defaultValue=""
								{...register("toyName")}
							/>
						</div>

						{/* Toy Details */}
						<div className="form-control mt-4 flex flex-col">
							<label className="label me-auto mb-2">
								<span className="label-text font-semibold text-sm">
									Toy Details
								</span>
							</label>
							<textarea
								required
								className="input border-0 focus:outline-none shadow"
								type="text"
								defaultValue=""
								{...register("toyDetails")}
							/>
						</div>

						<div className="form-control mt-6">
							<input
								className="text-lg w-full btn btn-full btn-block border-0 rounded-lg py-2 bg-[#4c4cf1] hover:bg-blue-500 text-white mt-5 tracking-widest"
								type="submit"
								value="Add a Toy"
							/>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default AddToy;
