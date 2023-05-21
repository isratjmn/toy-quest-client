import React, { useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const UpdateToy = () => {

	const { id } = useParams();
	console.log(id);
	useEffect(() => {
		fetch(`http://localhost:5000/updatedtoy/${id}`)
			.then((res) => res.json())
			.then((data) => console.log(data));
	}, []);

return (
    <div>
    hfgjdfgkjhkblm
    </div>
    )
}

export default UpdateToy;
