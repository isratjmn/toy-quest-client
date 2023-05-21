import React from "react";

const Loader = () => {
	return (
		<div>
			<div className="flex justify-center items-center h-[calc(100vh-68px)]">
				<p className="text-6xl font-semibold">L</p>
				<div className="w-10 h-10 border-8 border-dashed rounded-full animate-spin mt-5 border-blue-800"></div>
				<p className="text-6xl font-semibold">ading......</p>
			</div>
		</div>
	);
};

export default Loader;
