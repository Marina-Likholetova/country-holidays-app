import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function Layout() {
  
    return (
        <div className="container">
            <header>
                <nav className="navbar navbar-light">
                    <ul className="navbar-nav">
                         <li>
                            <NavLink end to="/">Countries</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">About</NavLink>
                        </li> 
                    </ul>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    );
}
