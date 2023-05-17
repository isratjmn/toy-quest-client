import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../../pages/ErrorPage";
import Home from "../../pages/Home";
import Login from "../../pages/Login";
import Register from "../../pages/Register";
import MainLayout from "../../Layouts/MainLayout";
import LoginLayouts from "../../Layouts/LoginLayouts";

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
]);

export default router;