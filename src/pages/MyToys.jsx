import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router-dom";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { HiViewfinderCircle } from "react-icons/hi2";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const MyToys = () => {
	const { user } = useContext(AuthContext);
	const [toys, setToys] = useState([]);
	const [asc, setAsc] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await fetch(
					`http://127.0.0.1:7000/mytoys/${user?.email}?sort=${
						asc ? "asc" : "desc"
					}`
				);
				const data = await res.json();
				setToys(data);
			} catch (error) {
				console.log(error);
			}
		};
		fetchData();
	}, [user, asc]);

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
				fetch(`http://127.0.0.1:7000/toydelete/${id}`, {
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

	return (
		<div>
			<Helmet>
				<title>TQuest | MyToys</title>
			</Helmet>
			<div className="overflow-x-hidden lg:mx-40 my-60 bg-[#FFF3F1] grid md:grid-cols-1 rounded-xl">
				<div className="overflow-x-auto w-full pt-8">
					<h2 className="text-4xl font-bold text-[#4c4cf1] mb-12 mt-20 text-center mx-auto">
						My Added Toys
					</h2>
					<h3 className="font-bold text-center mb-6 text-pink-700 text-xl">
						Total Added Toys: {toys.length}
					</h3>
					<div className="text-center mb-6">
						<button
							className="text-xl px-7 text-white rounded-lg py-3 mt-8 bg-[#4c4cf1] hover:bg-blue-500"
							onClick={() => setAsc(!asc)}
						>
							{asc ? "Price High To Low" : "Price Low To High"}
						</button>
					</div>

					<div class="relative overflow-x-auto shadow-md sm:rounded-lg md:mx-28  mb-20">
						{/* Table */}
						<table class="w-full text-sm text-left dark:text-gray-400 border">
							<thead class="text-gray-700 text-base capitalize md:py-6 bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
								<tr>
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
										Action
									</th>
								</tr>
							</thead>
							<tbody>
								{toys.map((toy, index) => (
									<tr key={toy._id}>
										<th className="text-xl text-center">
											{index + 1}
										</th>
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
										<th className="text-center">$ {toy.toyPrice}</th>
										<th className="text-center">
											{toy.quantity} PCS
										</th>
										<th className="font-normal">
											<p>Name: {toy.sellerName}</p>
											<p>Email: {toy.sellerEmail}</p>
										</th>

										<th className="flex gap-5 mt-10">
											
											<Link to={`/updatedtoy/${toy._id}`}>
												<FaEdit className="mb-2 text-2xl text-black mx-auto"></FaEdit>
											</Link>
											<buttton
												onClick={() =>
													handleDelete(toy._id)
												}
											>
												<FaTrashAlt className="text-2xl text-red-500 mx-auto"></FaTrashAlt>
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
