import { Button, Card, Dropdown, Label, TextInput } from "flowbite-react";
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
        fetch('http://localhost:5000/addtoy', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then((result) => {
                console.log(result);
            })
        console.log(data)
    };

	
	return (
		<div className="bg-[#FFF3F1] mt-64 md:mx-20">
			<div className="w-3/5 mx-auto">
				<div className="py-12 text-center">
					<h2 className="text-4xl font-bold stl2-font text-[#4c4cf1] mb-12 mt-16">
						Add Your Toy
					</h2>
					<form onSubmit={handleSubmit(onSubmit)}>
                    {errors.exampleRequired && <span>This field is required</span>}
						<div className="grid grid-cols-2 gap-5">
							{/* Toy Photo URL  */}
							<div className="form-control flex flex-col">
								<label className="label me-auto mb-2">
									<span className="label-text font-bold text-base ms-auto">
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

							{/* Toy Name */}
							<div className="form-control flex flex-col">
								<label className="label me-auto mb-2">
									<span className="label-text font-bold text-base">
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

							{/* Seller Name */}
							<div className="form-control flex flex-col">
								<label className="label me-auto mb-2">
									<span className="label-text font-bold text-base">
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

							{/* Seller Email */}
							<div className="form-control flex flex-col">
								<label className="label me-auto mb-2">
									<span className="label-text font-bold text-base">
										Seller Email
									</span>
								</label>
								<input
									required
									className="input border-0 focus:outline-none shadow"
									type="email"
									defaultValue={user?.email}
									{...register("sellerEmail")}
								/>
							</div>

							{/* Toy Category */}
							<div className="form-control flex flex-col">
								<label className="label me-auto mb-2">
									<span className="label-text font-bold text-base">
										Toy Category
									</span>
								</label>
								<select
									className="input"
									{...register("toyCategory")}
								>
									<option value="microbus">Micro Bus</option>
									<option value="firecar">
										Fire & Rescue
									</option>
									<option value="bike">Motor Bike</option>
								</select>
							</div>

							{/* Toy Price */}
							<div className="form-control flex flex-col">
								<label className="label me-auto mb-2">
									<span className="label-text  font-bold text-base">
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

							{/* Toy Rating */}
							<div className="form-control flex flex-col">
								<label className="label me-auto mb-2">
									<span className="label-text  font-bold text-base pb-4">
										Toy Rating
									</span>
								</label>
								<input
									required
									className="input border-0 focus:outline-none shadow"
									type="text"
									defaultValue="4.9"
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
							<div className="form-control flex flex-col">
								<label className="label me-auto mb-2">
									<span className="label-text font-bold text-base">
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

						{/* Toy Details */}
						<div className="form-control mt-4 flex flex-col">
							<label className="label me-auto mb-2">
								<span className="label-text font-bold text-base">
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
