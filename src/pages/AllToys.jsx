import React, { useEffect, useRef, useState } from "react";
import SingleToy from "./SingleToy";
import { Helmet } from "react-helmet";

const AllToys = () => {
	const [toys, setToys] = useState([]);
	const searchRef = useRef(null);
	const [search, setSearch] = useState([]);
	const [searchToy, setSearchToy] = useState("");

	// Filter base on Toy Name
	const searchedToys = toys.filter((toy) =>
		toy.toyName.toLowerCase().includes(searchToy.toLowerCase())
	);

	useEffect(() => {
		fetch(`http://localhost:5000/alltoys?search=${search}`)
			.then((res) => res.json())
			.then((result) => {
				setToys(result);
			});
	}, [search]);

	const handleSearch = () => {
		console.log(searchRef.current.value);
		setSearch(searchRef.current.value);
	};

	return (
		<>
			<Helmet>
				<title>TQuest | AddToy</title>
			</Helmet>
			<div className="md:mx-40 my-60 bg-[#FFF3F1] grid md:grid-cols-1 rounded-xl">
				<div className="overflow-x-auto w-full pt-8">
					<h2 className="text-4xl font-bold text-[#4c4cf1] mb-12 mt-20 text-center">
						Toys Collection
					</h2>
					<div className="flex justify-center mb-4">
						<div className="form-control shadow">
							<div className="input-group">
								<input
									onChange={(e) =>
										setSearchToy(e.target.value)
									}
									type="text"
									placeholder="Search by Toy Name"
									className="input input-bordered border-0 focus:outline-none"
								/>
								<button className="btn btn-square w-24 py-2 border-0 tracking-widest hover:bg-gray-200 bg-blue-700">
									Search
								</button>
								
							</div>
						</div>
					</div>

					{/* <div className="form-control w-[40%] mx-auto mb-8">
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
								type="text"
								ref={searchRef}
								class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
								placeholder="Search"
								required
							/>

							<button
								type="submit"
								onClick={handleSearch}
								class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 font-medium rounded-lg text-sm px-4 py-2 "
							>
								Search
							</button>
						</div>
					</div> */}
					

					<table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 border">
						<thead class="text-gray-700 text-base capitalize md:py-6 bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
							<tr>
								<th scope="col" class="p-4">
									Serial No
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
							{searchedToys.map((toy) => (
								<SingleToy key={toy._id} toy={toy}></SingleToy>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</>
	);
};

export default AllToys;
