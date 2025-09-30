import React from "react";
import Header from "./Header";
import Home from "./Home";
import { Outlet } from "react-router-dom";

function Layout(){
    return(
        <div>
        <Header/>
        <Outlet/>
        <footer/>

            
        </div>
    )
}
export default Layout;