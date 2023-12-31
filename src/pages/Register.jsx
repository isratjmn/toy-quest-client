import React from "react";
import { useContext, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { FaExclamation } from "react-icons/fa";
import { Card, Label, TextInput } from "flowbite-react";
import { Helmet } from "react-helmet";

const Register = () => {
	const { resgisterWithEmailPassword, logOut } = useContext(AuthContext);
	const [error, setError] = useState("");
	const navigate = useNavigate();
	const handleRegister = (e) => {
		e.preventDefault();
		const form = e.target;
		const name = form.name.value;
		const email = form.email.value;
		const password = form.password.value;
		const photo = form.photo.value;

		resgisterWithEmailPassword(email, password)
			.then((res) => {
				const createUser = res.user;
				console.log(createUser);

				updateProfile(createUser, {
					displayName: name,
					photoURL: photo,
				});
				logOut();
				navigate("/login");
				form.reset();
			})
			.catch((err) => setError(err.message));
	};
	return (
		<>
			{/* Dynamic Routes */}
			<Helmet>
				<title>TQuest | Register</title>
			</Helmet>
			<div className="max-w-md my-56 mx-auto shadow-xl">
				<Card className="p-3">
					<div className="text-red-700 flex space-x-2">
						{" "}
						{error && (
							<FaExclamation className="w-5 h-5 text-teal-950"></FaExclamation>
						)}{" "}
						<span>{error}</span>{" "}
					</div>
					<form
						className="flex flex-col gap-4"
						onSubmit={handleRegister}
					>
						<div>
							<div className="mb-2 block">
								<Label htmlFor="name" value="Your Name" />
							</div>
							<TextInput
								id="name"
								type="text"
								name="name"
								required={false}
							/>
						</div>
						<div>
							<div className="mb-2 block">
								<Label htmlFor="email" value="Your Email" />
							</div>
							<TextInput
								id="email1"
								type="email"
								name="email"
								placeholder="email@.com"
								required={true}
							/>
						</div>
						<div>
							<div className="mb-2 block">
								<Label
									htmlFor="password1"
									value="Your password"
								/>
							</div>
							<TextInput
								id="password"
								type="password"
								name="password"
								required={true}
							/>
						</div>
						<div>
							<div className="mb-2 block">
								<Label htmlFor="photo" value="Your photo url" />
							</div>
							<TextInput
								id="photo"
								type="text"
								name="photo"
								required={false}
							/>
						</div>

						{/* <button type="submit" className="btn-primary">
						Register
					</button> */}
						<button
							type="submit"
							className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
						>
							Register
						</button>
					</form>
					<span className="font-popins text-center font-bold mt-2">
						Already Have an Account!!
						<Link to="/login" className="text-orange-500 font-bold">
							{" "}
							Login
						</Link>
					</span>
				</Card>
			</div>
		</>
	);
};

export default Register;
