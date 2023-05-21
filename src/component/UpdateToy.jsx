import React, { useContext, useEffect } from "react";
// import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Button, Modal } from "flowbite-react";
// import { AuthContext } from "../provider/AuthProvider";

import { HiX } from "react-icons/hi";
import { Helmet } from "react-helmet";

const UpdateToy = (props) => {
	// const { user } = useContext(AuthContext);
	// const { id } = useParams();
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();

    console.log(props.job);

	/* 	useEffect(() => {
		fetch(`http://localhost:5000/updatedtoy/${id}`)
			.then((res) => res.json())
			.then((data) => console.log(data));
	}, []); */

	const { handleToyUpdate } = props;

	return (
		<div>
			<Helmet>
				<title>TQuest | UpdateToys</title>
			</Helmet>
			{/* Main modal */}
			<Modal
				{...props}
				size="lg"
				aria-labelledby="edit"
				centered
				dismissible={true}
			>
				<Modal.Header className="sr-only"></Modal.Header>
					<Button className="ms-auto m-3" onClick={props.onHide}>
                        <HiX className="text-lg"></HiX>
					</Button>
				<Modal.Body>

					<form onSubmit={() => handleSubmit(handleToyUpdate)}>
						{errors.exampleRequired && (
							<span>This field is required</span>
						)}
						<div className="grid grid-cols-2 gap-3">
							<div>
								{/* Toy Photo URL  */}
								<div className="form-control flex flex-col d-none">
									<label className="label me-auto mb-2">
										<span className="label-text font-semibold text-sm ms-auto">
											id
										</span>
									</label>
									<input
										required
										className="input border focus:outline-none shadow"
										type="text"
										defaultValue={props.toy?._id}
										{...register("_id")}
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
										className="input border focus:outline-none shadow"
										type="text"
										defaultValue={props.toy?.sellerName}
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
										defaultValue={props.toy?.toyCategory}
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
										className="input border focus:outline-none shadow"
										type="number"
										defaultValue={props.toy?.toyPrice}
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
										className="input border focus:outline-none shadow"
										type="text"
										defaultValue={props.toy?.toyRating}
										{...register("toyRating", {
											pattern: {
												value: /^(?:[0-4](\.\d{1,2})?|5(\.0{1,2})?)$/,
												message:
													"Please Write Your Rating Between 0 and 5",
											},
										})}
									/>
									{errors.toyRating && (
										<span className="text-xs text-red-800 mt-1 text-start">
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
										className="input border focus:outline-none shadow"
										type="text"
										defaultValue={props.toy?.quantity}
										{...register("quantity")}
									/>
								</div>
							</div>
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
								className="input border focus:outline-none shadow"
								type="text"
								defaultValue={props.toy?.toyDetails}
								{...register("toyDetails")}
							/>
						</div>

						<div className="form-control mt-6">
							<input
								className="text-lg w-full btn btn-full btn-block border-0 rounded-lg py-2 bg-[#4c4cf1] hover:bg-blue-500 text-white mt-5 tracking-widest"
								type="submit"
								value="Update Toys"
							/>
						</div>
					</form>
				</Modal.Body>
			</Modal>
		</div>
	);
};

export default UpdateToy;
