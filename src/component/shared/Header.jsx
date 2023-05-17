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
							src=""
							className="md:mr-3 mb-2 ml-6 lg:ml-12 sm:h-9 h-24"
							alt="img"
						/>
					</Link>
					<span className=" text-red-600 text-xl font-bold whitespace-nowrap dark:text-white">
						FlavorFushion
					</span>
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
						<Link to="/login" className="btn-primary mr-5 md:mr-0">
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
						Blog
					</NavLink>
				</Navbar.Collapse>
			</Navbar>
		</div>
    );
};

export default Header;