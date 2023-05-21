import React, { useContext } from 'react';
import { AuthContext } from "../../provider/AuthProvider";
import { FaUserCircle } from "react-icons/fa";
import { Avatar, Dropdown, Navbar } from 'flowbite-react';
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
				style={{ background: "#FFF3F1", padding: "0 15px", borderRadius: '13px' }}
			>
				<div>
					<Link to="/">
						<img
							src="https://i.ibb.co/bRsdw8v/logo2.png"
							className="w-24"
							alt="logo"
						/>
						<span className=" text-[#4c4cf1] text-xl font-extrabold font-popins whitespace-nowrap dark:text-white">
						ToyQuest
					</span>
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
									img={user && user?.photoURL || (<FaUserCircle className="fs-1" />) }
									rounded={true}
								/>
							}
						>
							{console.log(user)}
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
						<Link to="/login" className=" text-white hover:bg-purple-800 px-5 py-2 bg-[#4c4cf1] rounded-md transition-all duration-150 cursor-pointer mr-5 md:mr-0">
							Login
						</Link>
						
					)}

					<Navbar.Toggle />
				</div>
				<Navbar.Collapse className="bg-white md:bg-inherit p-8 md:p-0 text-black">
					
					<NavLink
						to="/"
						className={({ isActive }) =>
							isActive
								? "text-[#4c4cf1] text-lg font-popins font-bold"
								: " text-black text-lg font-popins font-bold"
						}
					>
						Home
					</NavLink>
					<NavLink
						to="/alltoys"
						className={({ isActive }) =>
							isActive
								? "text-[#4c4cf1] font-popins font-bold text-lg"
								: "text-black text-lg font-popins font-bold"
						}
					>
						All Toys
					</NavLink>

					{
						user?.email ?
						<>
							<NavLink
						to="/addtoy"
						className={({ isActive }) =>
							isActive
								? "text-[#4c4cf1] font-popins font-bold text-lg"
								: "text-black text-lg font-popins font-bold"
						}
					>
						Add A Toy
							</NavLink>
					
							<NavLink
								to="/mytoys"
								className={({ isActive }) =>
									isActive
										? "text-[#4c4cf1] font-popins font-bold text-lg"
										: "text-black text-lg font-popins font-bold"
								}
							>
								My Toys
							</NavLink>
						</>
					: ''
					}
					
					<NavLink
						to="/blogs"
						className={({ isActive }) =>
							isActive
								? "text-[#4c4cf1] font-popins font-bold text-lg"
								: "text-black font-popins font-bold text-lg"
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