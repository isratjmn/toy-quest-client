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
		fetch(`https://toy-quest-server.vercel.app/alltoys?search=${search}`)
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
