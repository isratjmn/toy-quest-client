
import React from "react";
import { useLoaderData } from "react-router-dom";

const ViewDetails = () => {
    const addtoy =  useLoaderData()
    const {
		toyName,
		toyPhoto,
		_id,
		sellerName,
		sellerEmail,
		toyCategory,
		toyPrice,
		toyRating,
		quantity,
	} = addtoy
	return (
		<div className="mt-40">
            
			<div className="grid grid-cols md:grid-cols-5 space-y-3 gap-y-4 md:gap-y-0 md:gap-4 border drop-shadow-sm p-3 md:p-5">
				<div className="md:myx-20 card col-span-1 min-h-[10vh] flex justify-center items-center bg-gray-200 rounded-md">
					<img className="w-1/2" src={toyPhoto} alt="" />
				</div>
				<div className="col-span-3 flex flex-col">
					<h1 className="text-gray-500 my-1 text-2xl">
						
					</h1>
					<p className="font-semibold text-xl"></p>
					<div className="flex gap-2 py-2 my-1">
						<button className="btn-remote"></button>
						<button className="btn-remote">
                        
						</button>
					</div>
					<div className="flex gap-3 mt-1">
						<div className="flex items-center">
							
							<p className="text-sm text-gray-500">{sellerName}</p>
						</div>
						<div className="flex items-center">
							
							<p className="text-sm text-gray-500">
								
							</p>
						</div>
					</div>
				</div>
				
			</div>
		</div>
	);
};

export default ViewDetails;
