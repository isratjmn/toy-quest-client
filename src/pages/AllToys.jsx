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
		<div className="md:mx-40 my-60 bg-[#FFF3F1] grid md:grid-cols-1 rounded-xl">
			<div className="overflow-x-auto w-full pt-8">
				<h2 className="text-4xl font-extrabold text-[#4c4cf1] mb-12 mt-20 text-center">
					Toys Collection
				</h2>

				<div class="relative overflow-x-auto shadow-md sm:rounded-lg md:mx-5 lg:mx-28 mb-20">
					<form className="mb-8 lg:w-[50%] mx-auto">
						<label
							for="search"
							class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
						>
							Search
						</label>
						<div class="relative">
							<div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
								<svg
									aria-hidden="true"
									class="w-5 h-5 text-gray-500 dark:text-gray-400"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
									></path>
								</svg>
							</div>
							<input
								type="search"
								id="search"
								class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								placeholder="Search"
								required
							/>
							<button
								type="submit"
								class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
							>
								Search
							</button>
						</div>
					</form>

					<table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 border">
						<thead class="text-gray-700 text-base capitalize md:py-6 bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
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
								<th scope="col" class="px-6 py-3">
									Images
								</th>
								<th scope="col" class="px-6 py-3">
									Seller
								</th>
								<th scope="col" class="px-6 py-3">
									Toy Name
								</th>
								<th scope="col" class="px-6 py-3">
									Sub-category
								</th>
								<th scope="col" class="px-6 py-3">
									Price
								</th>
								<th scope="col" class="px-6 py-3">
									Ratings
								</th>
								<th scope="col" class="px-6 py-3">
									Available Quantity
								</th>
								<th scope="col" class="px-6 py-3">
									Action
								</th>
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
		</div>
	);
};

export default AllToys;
