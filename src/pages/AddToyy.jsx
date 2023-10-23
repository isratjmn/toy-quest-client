import Swal from "sweetalert2";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../provider/AuthProvider";
import { Helmet } from "react-helmet";

const AddToy = () => {
	const { user } = useContext(AuthContext);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		if (
			!data.toyPhoto ||
			!data.sellerName ||
			!data.toyCategory ||
			!data.toyPrice ||
			!data.toyRating ||
			!data.quantity ||
			!data.toyName ||
			!data.toyDetails
		) {
			Swal.fire({
				title: "Error",
				text: "Please fill in all the required fields.",
				icon: "error",
				confirmButtonText: "OK",
			});
			return;
		}

		const userData = { ...data, sellerEmail: user.email };
		fetch("http://127.0.0.1:7000/addtoy", {
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
						confirmButtonText: "OK",
					});
				}
			});
	};

	return (
		<>
			{/* Dynamic Title */}
			<Helmet>
				<title>TQuest | AddToy</title>
			</Helmet>
			<div className="bg-[#FFF3F1] mt-64 md:mx-20 rounded-xl">
				<div className="w-[90%] md:w-[45%] mx-auto">
					<div className="py-12 text-center">
						<h2 className="text-4xl font-bold text-[#4c4cf1] mb-12 mt-16">
							Add Your Toy
						</h2>
						{/* Form */}
						<form
							onSubmit={handleSubmit(onSubmit)}
							className="border-2 rounded-lg p-10 bg-[#efeceb]"
						>
							<div className="grid grid-cols-2 gap-3">
								<div>
									{/* Toy Photo URL */}
									<div className="form-control flex flex-col">
										<label className="label me-auto mb-2">
											<span className="label-text font-semibold text-sm ms-auto">
												Toy Photo URL
											</span>
										</label>
										<input
											className={`input border-0 focus:outline-none shadow ${
												errors.toyPhoto
													? "border-red-500"
													: ""
											}`}
											type="text"
											{...register("toyPhoto")}
										/>
									</div>
									{errors.toyPhoto && (
										<span className="text-xs text-red-800 mt-1 text-start">
											{errors.toyPhoto.message}
										</span>
									)}
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
											className={`input border-0 focus:outline-none shadow ${
												errors.sellerName
													? "border-red-500"
													: ""
											}`}
											type="text"
											{...register("sellerName")}
										/>
									</div>
									{errors.sellerName && (
										<span className="text-xs text-red-800 mt-1 text-start">
											{errors.sellerName.message}
										</span>
									)}
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
											className={`input ${
												errors.toyCategory
													? "border-red-500"
													: ""
											}`}
											{...register("toyCategory")}
										>
											<option value="scientific">
												Scientific Toys
											</option>
											<option value="language">
												Language Toys
											</option>
											<option value="math">
												Math Toys
											</option>
										</select>
									</div>
									{errors.toyCategory && (
										<span className="text-xs text-red-800 mt-1 text-start">
											This field is required
										</span>
									)}
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
											className={`input border-0 focus:outline-none shadow ${
												errors.toyPrice
													? "border-red-500"
													: ""
											}`}
											type="number"
											{...register("toyPrice")}
										/>
									</div>
									{errors.toyPrice && (
										<span className="text-xs text-red-800 mt-1 text-start">
											{errors.toyPrice.message}
										</span>
									)}
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
											className={`input border-0 focus:outline-none shadow ${
												errors.toyRating
													? "border-red-500"
													: ""
											}`}
											type="text"
											{...register("toyRating", {
												pattern: {
													value: /^(?:[0-4](\.\d{1,2})?|5(\.0{1,2})?)$/,
													message:
														"Please Write Your Rating Between 0 and 5",
												},
											})}
										/>
									</div>
									{errors.toyRating && (
										<span className="text-xs text-red-800 mt-1 text-start">
											{errors.toyRating.message}
										</span>
									)}
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
											className={`input border-0 focus:outline-none shadow ${
												errors.quantity
													? "border-red-500"
													: ""
											}`}
											type="text"
											{...register("quantity")}
										/>
									</div>
									{errors.quantity && (
										<span className="text-xs text-red-800 mt-1 text-start">
											{errors.quantity.message}
										</span>
									)}
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
									className={`input border-0 focus:outline-none shadow ${
										errors.toyName ? "border-red-500" : ""
									}`}
									type="text"
									{...register("toyName")}
								/>
							</div>
							{errors.toyName && (
								<span className="text-xs text-red-800 mt-1 text-start">
									{errors.toyName.message}
								</span>
							)}

							{/* Toy Details */}
							<div className="form-control mt-4 flex flex-col">
								<label className="label me-auto mb-2">
									<span className="label-text font-semibold text-sm">
										Toy Details
									</span>
								</label>
								<textarea
									className={`input border-0 focus:outline-none shadow ${
										errors.toyDetails
											? "border-red-500"
											: ""
									}`}
									type="text"
									{...register("toyDetails")}
								/>
							</div>
							{errors.toyDetails && (
								<span className="text-xs text-red-800 mt-1 text-start">
									{errors.toyDetails.message}
								</span>
							)}

							<div className="form-control flex flex-col">
								<input
									className="text-lg btn btn-primary w-[100%] border-0 py-2 bg-[#4c4cf1] hover:bg-blue-500 text-white mt-3 tracking-widest self-start"
									type="submit"
									value="Add a Toy"
								/>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default AddToy;
