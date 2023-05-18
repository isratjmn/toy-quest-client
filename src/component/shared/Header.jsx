import React, { useContext } from 'react';
import { AuthContext } from "../../provider/AuthProvider";
import { FaUserCircle } from "react-icons/fa";
import { Navbar } from 'flowbite-react';
import { Link, NavLink } from 'react-router-dom';

const Header = ({ login }) => {
    const { user, logOut, loading } = useContext(AuthContext);
	const handleLogOut = () => {
		logOut();
	};

    return (
        <div
			style={login && { background: "black", top: "0" }}
			className="md:px-20 w-full absolute font-popins text-white top-5 right-0 z-50"
		>
			<Navbar
				fluid={true}
				rounded={true}
				style={{ background: "transparent" }}
			>
				<div>
					<Link to="/">
						<img
							src="https://i.ibb.co/QHqWjDp/logo.png"
							className="w-28"
							alt="logo"
						/>
					</Link>
					
				</div>

				<div className="flex md:order-2">
					{user ? (
						<Dropdown
							arrowIcon={false}
							inline={true}
							label={
								<Avatar
									alt="user"
									img={user && (<FaUserCircle className="fs-1" />) ?.photoURL}
									rounded={true}
								/>
							}
						>
							<Dropdown.Header>
								<span className="block text-sm">
									{user?.displayName}
								</span>
								<span className="block truncate text-sm font-medium">
									{user?.email}
								</span>
							</Dropdown.Header>

							<Dropdown.Divider />
							<Dropdown.Item>
								<button onClick={handleLogOut}>Sign out</button>
							</Dropdown.Item>
						</Dropdown>
					) : (
						<Link to="/login" className=" text-white bg-purple-700 hover:bg-purple-800 px-5 py-2 bg-primary rounded-md transition-all duration-150 cursor-pointer mr-5 md:mr-0">
							Login
						</Link>
						
					)}

					<Navbar.Toggle />
				</div>
				<Navbar.Collapse className="bg-white md:bg-inherit p-8 md:p-0">
					<NavLink
						to="/"
						className={({ isActive }) =>
							isActive
								? "text-primary text-xl mb-3 font-semibold"
								: " text-black md:text-inherit text-xl"
						}
					>
						Home
					</NavLink>
					<NavLink
						to="/blog"
						className={({ isActive }) =>
							isActive
								? "text-primary text-xl font-semibold"
								: "text-black md:text-inherit text-xl"
						}
					>
						All Toys
					</NavLink>
					<NavLink
						to="/blog"
						className={({ isActive }) =>
							isActive
								? "text-primary text-xl font-semibold"
								: "text-black md:text-inherit text-xl"
						}
					>
						Blogs
					</NavLink>
				</Navbar.Collapse>
			</Navbar>
		</div>
    );
};

export default Header;