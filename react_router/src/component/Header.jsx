import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav>
        <div>
          <ul>
            <li>
              <NavLink to="/home">Home</NavLink>
            </li>
            <li>
              <NavLink to="/chatbot">Chatbot</NavLink>
            </li>
            <li>
              <NavLink to="/registersite">Register Site</NavLink>
            </li>
            <li>
              <NavLink to="/siteview">Site Viewer</NavLink>
            </li>
            <li>
                <NavLink to='/history'>history</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
