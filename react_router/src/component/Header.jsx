import React from "react";
import {Link, NavLink} from 'react-router-dom';


export default function Header(){
    return(
        <header className="shadow sticky z-50 top-0 bg-black">
            <nav className="border-b border-gray-400 px-8 py-5 lg:px-10 ">
                <div className="flex flex-wrap justify-between items-center mx-auto">
                    <Link to="/" className="flex items-center">
                        <img src="https://media.gettyimages.com/id/1299492682/photo/cat-in-your-face.jpg?s=612x612&w=0&k=20&c=9X0-VTPFKGjCtC1ZNG8aE1ohhiMssutD80XKAfOO_uo=" width="100" height="20" className="mr-3 h-12" alt="logo"/>
                    </Link>
                    <div className="hidden justify-start items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menur-2">
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink to="home" 
                                    className={({ isActive }) => `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-white" : "text-gray-700"} border-b border-gray-100  hover:text-orange-700 lg:hover:bg-transparent lg:border-0 lg:p-0`}>home</NavLink>
                            </li>
                            <li>
                                <NavLink to='/about'  className={({isActive})=>`block py-2 pr-4 pl-3 duration-200 ${isActive ?"text-white":"text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`}>about
                                </NavLink>
                            </li>
                            <li>
                                <NavLink  to="/contact" className={({isActive})=>`block py-2 pr-4 pl-3 duration-200 ${isActive ?"text-white":"text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`}>contact
                                </NavLink>
                            </li>
                        </ul>

                    </div>

                </div>


            </nav>

        </header>
    )
}
