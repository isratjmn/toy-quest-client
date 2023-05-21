import React from "react";

const MyToys = () => {
	return (
		<div>
			<div className="overflow-x-hidden md:mx-40 my-60 bg-[#FFF3F1] grid md:grid-cols-1 rounded-xl">
				<div className="overflow-x-auto w-full pt-8">
					<h2 className="text-4xl font-extrabold text-[#4c4cf1] mb-12 mt-20 text-center">
						My Added Toys
					</h2>

					<div class="relative overflow-x-auto shadow-md sm:rounded-lg md:mx-28  mb-20">
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
							<tbody>hgfjhgfjhgjgjkhgk</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MyToys;
