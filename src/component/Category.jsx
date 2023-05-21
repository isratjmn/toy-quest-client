import React, { useEffect, useState } from "react";

import "react-tabs/style/react-tabs.css";
import ToyCard from "./ToyCard";

const Category = () => {
	const [toys, setToys] = useState([]);
	const [activeTab, setActiveTab] = useState("microbus");

	useEffect(() => {
		const url = `http://localhost:5000/allcategory/${activeTab}`;
		console.log(url);
		fetch(`http://localhost:5000/allcategory/${activeTab}`)
			.then((res) => res.json())
			.then((result) => {
				setToys(result);
			});
	}, [activeTab]);

	const handleTabClick = (tabName) => {
		setActiveTab(tabName);
	};

	return (
		<div className=" py-4 lg:mx-20">
			<div className="mx-auto">
				<h2 className="text-4xl mb-4 font-bold text-center mt-14 text-[#4c4cf1]">
					{" "}
					Shop By Category{" "}
				</h2>
				<div className="tabs mb-8 justify-center mx-auto text-center mt-10">
					<a
						onClick={() => handleTabClick("microbus")}
						className={`text-lg font-semibold pr-4 mr-10 tab bg-[#4c4cf1] px-4 py-3 tab-bordered ${
							activeTab == "microbus"
								? "border-b-4  border-pink-600 text-white"
								: "text-slate-300"
						}`}
					>
						Language
					</a>

					<a
						onClick={() => handleTabClick("firecar")}
						className={`text-lg font-semibold pr-4 mr-10 tab bg-[#4c4cf1] px-4 py-3 tab-bordered ${
							activeTab == "firecar"
								? "border-b-4 border-pink-600 text-white "
								: "text-slate-300"
						}`}
					>
						Mathematics
					</a>

					<a
						onClick={() => handleTabClick("bike")}
						className={`text-lg font-semibold pr-4 mr-10 tab bg-[#4c4cf1] px-4 py-3 tab-bordered ${
							activeTab == "bike"
								? "border-b-4 border-pink-600 text-white"
								: "text-slate-300"
						}`}
					>
						Scientific
					</a>
				</div>

				<div className="grid grid-cols-3 gap-4">
					{toys?.map((toy) => (
						<ToyCard toy={toy} key={toy._id}></ToyCard>
					))}
				</div>
			</div>
		</div>
	);
};

export default Category;
