import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../../pages/ErrorPage";
import Home from "../../pages/Home";
import Login from "../../pages/Login";
import Register from "../../pages/Register";
import MainLayout from "../../Layouts/MainLayout";
import LoginLayouts from "../../Layouts/LoginLayouts";
import BlogLayout from "../../Layouts/BlogLayout";
import Blogs from "../../pages/Blogs";

const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout />,
		errorElement: <ErrorPage></ErrorPage>,
		children: [
			{
				path: "/",
				element: <Home />,
			},
		],
	},
	{
		path: "/login",
		element: <LoginLayouts />,
		children: [
			{
				path: "/login",
				element: <Login />,
			},

			{
				path: "/login/register",
				element: <Register />,
			},
		],
	},
	{
		path: "/blog",
		element: <BlogLayout />,
		children: [
			{
				path: "/blog",
				element: <Blogs />,
				loader: () =>
					fetch(
						"blog.json"
					),
			},
		],
	},
]);

export default router;