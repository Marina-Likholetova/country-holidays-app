import React, { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { ThemeContext } from './context';

export default function Layout() {
    const { toggleTheme } = useContext(ThemeContext);
  
    return (
        <div className="container">
            <header className="header">
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

                <div className="switch">
                    <span className='light' onClick={toggleTheme}><BsFillSunFill/></span>
                    <span className='dark' onClick={toggleTheme}><BsFillMoonStarsFill/></span>
                </div>
               
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    );
}
