import React, { useContext } from 'react';
import logo from "../../assets/logo.jpg"
import { Link } from 'react-router';
import { AuthContext } from '../Auth/AuthProvider';

const Navbar = () => {
    const { user, signOutUser } = useContext(AuthContext)
    const links = <>
        <li><Link to={"/"}>Home</Link></li>
        <li><Link to={"/donationCampaign"}>Donation Campaigns</Link></li>
        <li><Link to={"/dashboard"}>Dashboard</Link></li>
    </>
    const handleLogoClick = () => {
        window.location.href = "/#slide1";
    }

    const handleLogOut = () => {
        signOutUser()
            .then(() => {
                console.log("signOut");

            })
            .catch((err) => {
                console.log(err);

            })
    }
    return (
        <div className='sticky top-0 z-10 w-11/12 mx-auto '>
            <div className="navbar bg-[#1a675a] shadow-sm text-white rounded-xl mt-4 ">
                <div className="navbar-start">

                    <button onClick={handleLogoClick} className="btn bg-[#1a675a] hover:bg-[#0c493e] border-0 shadow-none text-white text-xl py-6"><img className='w-10 rounded-full' src={logo} alt="" />
                        <div className='flex flex-col'><h1>Houpe</h1>
                            <small className='text-xs font-extralight'>To Make a DIfference</small></div>
                    </button>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn bg-[#1a675a] hover:bg-[#0c493e] border-0 shadow-none lg:hidden ">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 right-1 rounded-box z-1 mt-3   w-52 p-2  shadow text-black">
                            {
                                links
                            }
                        </ul>
                    </div>
                    {
                        user ? <>
                            <div className="dropdown dropdown-end text-black">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img
                                            alt="Tailwind CSS Navbar component"
                                            src="https://i.ibb.co/1gx0nT0/485750901-2125354584561696-708610742838015308-n.jpg" />
                                    </div>
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                    <li>
                                        <a className="justify-between">
                                            Profile

                                        </a>
                                    </li>
                                    <li><a>Settings</a></li>
                                    <li><button onClick={handleLogOut}>Logout</button></li>
                                </ul>
                            </div>
                            
                        </> : <Link to={"login"} className='btn bg-[#1a675a] border-0 shadow-none text-white hover:bg-[#0c493e]'>Login</Link>
                    }
                </div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default Navbar;