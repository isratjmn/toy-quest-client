import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleBlog from "../component/SinglaBlog";
import { Helmet } from "react-helmet";

const Blogs = () => {
	const blogs = useLoaderData();
	return (
		<>
			<Helmet>
				<title>PHero | Blogs</title>
			</Helmet>
			<div
				className="blog-banner pt-24 px-20 bg-[url('https://img.freepik.com/free-photo/flat-lay-kids-toys-with-pink-background_23-2148251492.jpg?w=1060&t=st=1684428240~exp=1684428840~hmac=2d6294e0f2c9224667e3243a04dcaaf3404a276da02a31284ffa38c08a2865a0')] bg-opacity-100  h-[40vh] relative z-80 flex justify-center items-center"
				style={{
					backgroundSize: "cover",
					backgroundPosition: "center",
					objectFit: "cover",
				}}
			></div>
			<div className="md:px-20 my-28">
				<h2 className="text-center font-popins text-3xl font-bold">
					{" "}
					Blogs
				</h2>
				<div className="grid md:grid-cols-2 gap-8 mt-20">
					{blogs.map((blog) => (
						<SingleBlog key={blog.id} blog={blog} />
					))}
				</div>
			</div>
		</>
	);
};

export default Blogs;
