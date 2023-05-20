import { Checkbox, Table } from "flowbite-react";
import React, { useEffect, useState } from "react";
import SingleToy from "./SingleToy";

const AllToys = () => {
	const [toys, setToys] = useState([]);

	useEffect(() => {
		fetch("http://localhost:5000/alltoys")
			.then((res) => res.json())
			.then((result) => {
				setToys(result);
			});
	}, []);

	return (
		<div className="md:mx-40 my-60 bg-[#FFF3F1] grid md:grid-cols-1">
			{/* <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
				<div class="pb-4 bg-white dark:bg-gray-900">
					<label for="table-search" class="sr-only">
						Search
					</label>
					<div class="relative mt-1">
						<div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
							<svg
								class="w-5 h-5 text-gray-500 dark:text-gray-400"
								aria-hidden="true"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fill-rule="evenodd"
									d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
									clip-rule="evenodd"
								></path>
							</svg>
						</div>
						<input
							type="text"
							id="table-search"
							class="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="Search for items"
						/>
					</div>
				</div>
				<table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
					<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
						<tr>
							<th scope="col" class="p-4">
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
										checkbox
									</label>
								</div>
							</th>
							<th
								scope="col"
								class="px-6 py-3 capitalize font-bold text-base"
							>
								Seller
							</th>
							<th
								scope="col"
								class="px-6 py-3 capitalize font-bold text-base"
							>
								Toy Name
							</th>
							<th
								scope="col"
								class="px-6 py-3 capitalize font-bold text-base"
							>
								Sub-category
							</th>
							<th
								scope="col"
								class="px-6 py-3 capitalize font-bold text-base"
							>
								Price
							</th>
							<th
								scope="col"
								class="px-6 py-3 capitalize font-bold text-base"
							>
								Available Quantity
							</th>
							<th
								scope="col"
								class="px-6 py-3 capitalize font-bold text-base"
							></th>
						</tr>
					</thead>
					<tbody>
						<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
							<td class="w-4 p-4">
								<div class="flex items-center"></div>
							</td>

							{toys.map((toy) => (
								<SingleToy key={toy._id} toy={toy}></SingleToy>
							))}
						</tr>
					</tbody>
				</table>
			</div> */}

			<div className="overflow-x-auto w-full pt-8">
				<h2 className="text-4xl font-bold text-[#4c4cf1] mb-12 mt-10 text-center">
					All Toys
				</h2>
				<table className="table w-full border">
					{/* head */}
					<thead className="text-lg text-gray-700 capitalize">
						<tr>
							<th>
								<label>
									<input
										type="checkbox"
										className="checkbox"
									/>
								</label>
							</th>
							<th>Image</th>
							<th>Seller</th>
							<th>Toy Name</th>
							<th>Sub-category</th>
							<th>Price</th>
							<th>Ratings</th>
							<th>Available Quantity</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{toys.map((toy) => (
							<SingleToy key={toy._id} toy={toy}></SingleToy>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default AllToys;
