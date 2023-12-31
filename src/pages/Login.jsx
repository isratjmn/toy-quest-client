import React from "react";
import { useContext, useState } from "react";
// import { Link,  useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from "../provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Card, Label, TextInput } from "flowbite-react";
import { FaExclamation, FaGoogle } from "react-icons/fa";
import { Helmet } from "react-helmet";

const Login = () => {
	const { loginWithEmailAndPassword, loginWithGoogle, loginWithGithub } =
		useContext(AuthContext);
	const [error, setError] = useState("");
	const location = useLocation();
	const navigate = useNavigate();
	const from = location.state?.from?.pathname || "/";
	const handleLoginWithEmailPass = (e) => {
		e.preventDefault();
		const form = e.target;
		const email = form.email.value;
		const password = form.password.value;
		loginWithEmailAndPassword(email, password)
			.then((res) => {
				const loggedUser = res.user;
				console.log(loggedUser);
				navigate(from, { replace: true });
			})
			.catch((err) => setError(err.message));
	};

	const handleLoginGoogle = () => {
		loginWithGoogle()
			.then((res) => {
				const loggedUser = res.user;
				console.log(loggedUser);
				navigate(from, { replace: true });
			})
			.catch((err) => setError(err.message));
	};

	return (
		<>
			<Helmet>
				<title>PHero | Login</title>
			</Helmet>
			<div className="max-w-sm my-56 mx-auto shadow-xl">
				<Card>
					<div className="text-red-700 flex space-x-2">
						{" "}
						{error && (
							<FaExclamation className="w-5 h-5 text-teal-950"></FaExclamation>
						)}{" "}
						<span>{error}</span>{" "}
					</div>
					<form
						className="flex flex-col gap-4"
						onSubmit={handleLoginWithEmailPass}
					>
						<div>
							<div className="mb-2 block">
								<Label htmlFor="email1" value="Your email" />
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
								id="password1"
								type="password"
								name="password"
								required={true}
							/>
						</div>

						<button
							type="submit"
							className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
						>
							Login
						</button>
					</form>
					<div className="flex justify-evenly">
						<button
							onClick={handleLoginGoogle}
							className="flex items-center bg-[#4285F4] hover:bg-[#4285F4]/90 rounded-md shadow-md font-medium text-sm px-32 py-2.5 text-center"
						>
							<FaGoogle className="w-8 text-yellow-400 text-sm" />
							<span className="font-popins text-white font-semibold">
								Google
							</span>
						</button>

					</div>
					<span className="font-popins text-center font-bold">
						Do not have an account!!
						<Link
							to="/login/register"
							className="text-orange-500 font-semibold"
						>
							{" "}
							Register
						</Link>
					</span>
				</Card>
			</div>
		</>
	);
};

export default Login;
