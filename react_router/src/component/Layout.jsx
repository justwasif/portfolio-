import React from "react";
import Header from "./Header";
import Home from "./Home";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import About from "./About";
import Contact from "./Contact";

function Layout(){
    return(
        <div>
        <Header/>
        <Outlet/>
        <Footer/>

            
        </div>
    )
}
export default Layout;