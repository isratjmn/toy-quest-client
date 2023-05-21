import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router-dom";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import UpdateToy from "../component/UpdateToy";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const MyToys = () => {
	const { user } = useContext(AuthContext);
	const [toys, setToys] = useState([]);
	const [modalShow, setModalShow] = useState(false);
	const [control, setControl] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await fetch(
					`http://localhost:5000/mytoys/${user?.email}`
				);
				const data = await res.json();
				setToys(data);
			} catch (error) {
				console.log(error);
			}
		};
		fetchData();
	}, [user, control]);



	const handleDelete = (id) => {
		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!",
		}).then((result) => {
			if (result.isConfirmed) {
				fetch(`http://localhost:5000/toydelete/${id}`, {
					method: "DELETE",
				})
					.then((res) => res.json())
					.then((data) => {
						console.log(data);
						if (data.deletedCount > 0) {
							Swal.fire(
								"Deleted!",
								"Your Toy has been deleted.",
								"success"
							);
							const remaining = toys.filter(
								(toy) => toy._id !== id
							);
							setToys(remaining);
						}
					})
					.catch((error) => {
						console.error("Error deleting toy:", error);
					});
			}
		});
	};

	const handleToyUpdate = (data) => {
		console.log(data);

		fetch(`http://localhost:5000/updatedtoy/${data._id}`, {
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
	};

	return (
		<div>
			<Helmet>
				<title>TQuest | MyToys</title>
			</Helmet>
			<div className="overflow-x-hidden lg:mx-40 my-60 bg-[#FFF3F1] grid md:grid-cols-1 rounded-xl">
				<div className="overflow-x-auto w-full pt-8">
					<h2 className="text-4xl font-bold text-[#4c4cf1] mb-12 mt-20 text-center">
						My Added Toys
					</h2>
					<h3 className="font-bold text-center mb-6 text-pink-700 text-xl">
						Total Added Toys: {toys.length}
					</h3>

					<div class="relative overflow-x-auto shadow-md sm:rounded-lg md:mx-28  mb-20">
						<table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 border">
							<thead class="text-gray-700 text-base capitalize md:py-6 bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
								<tr>
									{/* <th scope="col" class="p-4">
										<div class="flex items-center">
											<input
												id="checkbox-all-search"
												type="checkbox"
												class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
											/>
											<label
												for="checkbox-all-search"
												class="sr-only"
											>
												SL
											</label>
										</div>
									</th> */}
									<th scope="col" class="px-6 py-3">
										Sl
									</th>
									<th scope="col" class="px-6 py-3">
										Toy Picture
									</th>
									<th scope="col" class="px-6 py-3">
										Toy Information
									</th>
									<th scope="col" class="px-6 py-3">
										Toy Price
									</th>
									<th scope="col" class="px-6 py-3">
										Available Quantity
									</th>
									<th scope="col" class="px-6 py-3">
										Seller Information
									</th>
									<th scope="col" class="px-6 py-3">
										Edit
									</th>
									<th scope="col" class="px-6 py-3">
										Delete
									</th>
								</tr>
							</thead>

							<tbody>
								{toys.map((toy, index) => (
									<tr key={toy._id}>
										<th className="text-xl text-center">{index+ 1}</th>
										<th>
											<img
												className="w-24 h-24 object-contain"
												src={toy.toyPhoto}
												alt="img"
											/>
										</th>
										<th className="font-normal">
											<p className="font-semibold text-lg">
												{toy.toyName}
											</p>
											<p>Category: {toy.toyCategory}</p>
											<p>Rating: {toy.toyRating}</p>
										</th>
										<th>$ {toy.toyPrice}</th>
										<th className="font-normal">
											{toy.quantity} PCS
										</th>
										<th className="font-normal">
											<p>Name: {toy.sellerName}</p>
											<p>Email: {toy.sellerEmail}</p>
										</th>
										<th>
											<button
												variant="primary"
												onClick={() =>
													setModalShow(true)
												}
												className="btn btn-secondary mr-2 me-auto"
											>
												<FaEdit className="mb-2 text-3xl text-black ms-8"></FaEdit>
											</button>

											<UpdateToy
												show={modalShow}
												onHide={() =>
													setModalShow(false)
												}
												toy={toy}
												handleToyUpdate={handleToyUpdate}
												className="btn btn-primary"
											></UpdateToy>
										</th>
										<th>
											{/* <Link
												to={`/updatedtoys/${toy._id}`}
											>
												<FaEdit className="mb-2 text-3xl text-black"></FaEdit>
											</Link> */}
											<buttton
												onClick={() =>
													handleDelete(toy._id)
												}
											>
												<FaTrashAlt className=" text-3xl text-red-500 mx-auto"></FaTrashAlt>
											</buttton>
										</th>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MyToys;
