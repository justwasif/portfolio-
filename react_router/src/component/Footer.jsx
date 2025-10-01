import React from "react";
import { Link,NavLink } from "react-router-dom";
import Github from "./Github";

export default function Footer(){
    return(
        <footer className=" fixed bottom-o w-full shadow border-t border-gray400 px-4 py-2.5 bg-black">
            <nav className="border-b border-gray-400 px-4 py-2.5 lg:px-6 ">
                <div className="flex flex-wrap justify-between items-center mx-auto">

                    <div className="hidden justify-start items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menur-3">
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li><h5 className=" text-green-500">follow us --></h5></li>
                            <li>
                                <NavLink to='https://www.instagram.com/slaysid6/' className={({isActive})=>`  block py-2 pr-4 pl-3 duration-200 ${isActive ?"text-orange-500":"text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`}>instagram
                                </NavLink>
                            </li>
                             <li>
                                <NavLink to='https://github.com/justwasif' className={({isActive})=>`  block py-2 pr-4 pl-3 duration-200 ${isActive ?"text-orange-500":"text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`}>github
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='https://x.com/wasif_genz' className={({isActive})=>`  block py-2 pr-4 pl-3 duration-200 ${isActive ?"text-orange-500":"text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`}>TWITTER(X)
                                </NavLink>
                            </li>
                        </ul>
                    
                    </div>


                </div>
            </nav>

            

        </footer>
    )
}