import React, { useEffect, useRef, useState } from "react";
import SingleToy from "./SingleToy";
import { Helmet } from "react-helmet";
import ReactPaginate from "react-paginate";
import "./pagination.css";

const AllToys = () => {
	const [toys, setToys] = useState([]);
	const [pageNumber, setPageNumber] = useState(0);
	const itemsPerPage = 8;
	const pagesVisited = pageNumber * itemsPerPage;
	const searchRef = useRef(null);
	const [search, setSearch] = useState([]);
	const [searchToy, setSearchToy] = useState("");

	// Filter based on Toy Name
	const searchedToys = toys.filter((toy) =>
		toy.toyName.toLowerCase().includes(searchToy.toLowerCase())
	);
	const displayToys = searchedToys.slice(
		pagesVisited,
		pagesVisited + itemsPerPage
	);
	const pageCount = Math.ceil(searchedToys.length / itemsPerPage);
	const changePage = ({ selected }) => {
		setPageNumber(selected);
	};
	useEffect(() => {
		fetch(`http://127.0.0.1:7000/alltoys?search=${search}`)
			.then((res) => res.json())
			.then((result) => {
				setToys(result);
			});
	}, [search]);
	const handleSearch = () => {
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
								<button className="btn btn-square text-white w-24 py-2 border-0 tracking-widest hover:bg-gray-200 bg-blue-700">
									Search
								</button>
							</div>
						</div>
					</div>

					<table className="w-[90%] mx-auto text-sm text-left text-gray-500 dark:text-gray-400 rounded-lg">
						<thead className="text-gray-700 text-base capitalize md:py-6 bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
							<tr>
								<th scope="col" className="p-4">
									SL
								</th>
								<th scope="col" className="px-6 py-3">
									Images
								</th>
								<th scope="col" className="px-6 py-3">
									Seller
								</th>
								<th scope="col" className="px-6 py-3">
									Toy Name
								</th>
								<th scope="col" className="px-6 py-3">
									Sub-category
								</th>
								<th scope="col" className="px-6 py-3">
									Price
								</th>
								<th scope="col" className="px-6 py-3">
									Ratings
								</th>
								<th scope="col" className="px-6 py-3">
									Available Quantity
								</th>
								<th scope="col" className="px-6 py-3">
									Action
								</th>
							</tr>
						</thead>
						<tbody>
							{displayToys.map((toy, index) => (
								<SingleToy
									key={toy._id}
									toy={toy}
									index={index + 1}
								/>
							))}
						</tbody>
					</table>

					<ReactPaginate
						previousLabel={"Previous"}
						nextLabel={"Next"}
						pageCount={pageCount}
						onPageChange={changePage}
						containerClassName={"pagination"}
						previousLinkClassName={"previous"}
						nextLinkClassName={"next"}
						disabledClassName={"disabled"}
						activeClassName={"active"}
					/>
				</div>
			</div>
		</>
	);
};

export default AllToys;
