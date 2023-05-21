import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../../pages/ErrorPage";
import Home from "../../pages/Home";
import Login from "../../pages/Login";
import Register from "../../pages/Register";
import MainLayout from "../../Layouts/MainLayout";
import LoginLayouts from "../../Layouts/LoginLayouts";
import BlogLayout from "../../Layouts/BlogLayout";
import Blogs from "../../pages/Blogs";
import AllToys from "../../pages/AllToys";
import AddToy from "../../pages/AddToy";
// import ViewDetails from "../../pages/ViewDetails";
import PrivetRoute from "../PrivetRoute";
import MyToys from "../../pages/MyToys";
import UpdateToy from "../../component/UpdateToy";
// import MyToys from "../../pages/MyToys";
// import UpdateToy from "../../component/UpdateToy";

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
			{
				path: "alltoys",
				element: <AllToys />,
			},
			{
				path: "addtoy",
				element: <AddToy />,
			},
			{
				path: "/mytoys",
				element: (
					<PrivetRoute>
						<MyToys />
					</PrivetRoute>
				),
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
		path: "/blogs",
		element: <BlogLayout />,
		children: [
			{
				path: "/blogs",
				element: <Blogs />,
				loader: () => fetch("http://localhost:5000/blogs"),
			},
		],
	},
	{
		path: "/updatedtoys/:id",
		element: <UpdateToy />,

		// loader: ({params}) => fetch(`http://localhost:5000/updatedtoy/${params.id}`),
	},
]);

export default router;
