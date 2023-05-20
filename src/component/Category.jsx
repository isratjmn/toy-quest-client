import React, { useEffect, useState } from "react";

import "react-tabs/style/react-tabs.css";
import ToyCard from "./ToyCard";

const Category = () => {
	const [toys, setToys] = useState([]);
	const [activeTab, setActiveTab] = useState("language");

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
				<p className="my-5 w-[95%] lg:w-[50%] mx-auto text-center leading-7 text-lg text-slate-800 mb-10 md:mb-24">
					Toys are specifically crafted to provide interactive and
					hands-on experiences that promote learning in various areas
					such as cognitive skills, problem-solving abilities,
					creativity, and more.
				</p>
				<div className="tabs mb-8 justify-center mx-auto text-center mt-10">
					<a
						onClick={() => handleTabClick("language")}
						className={`text-lg font-semibold pr-4 ml-1 mr-3 md:mr-10 tab bg-[#4c4cf1] px-4 py-3 tab-bordered ${
							activeTab == "language"
								? "border-b-4  border-pink-600 text-white"
								: "text-slate-300"
						}`}
					>
						Language
					</a>

					<a
						onClick={() => handleTabClick("mathematics")}
						className={`text-lg font-semibold mr-3 pr-4 md:mr-10 tab bg-[#4c4cf1] px-4 py-3 tab-bordered ${
							activeTab == "mathematics"
								? "border-b-4 border-pink-600 text-white"
								: "text-slate-300"
						}`}
					>
						Mathematics
					</a>

					<a
						onClick={() => handleTabClick("scientific")}
						className={`text-lg font-semibold pr-4 mr-1 tab bg-[#4c4cf1] px-4 py-3 tab-bordered ${
							activeTab == "scientific"
								? "border-b-4 border-pink-600 text-white"
								: "text-slate-300"
						}`}
					>
						Scientific
					</a>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
					{toys?.map((toy) => (
						<ToyCard toy={toy} key={toy._id}></ToyCard>
					))}
				</div>
			</div>
		</div>
	);
};

export default Category;
