import React from 'react';
import {NavLink} from "react-router-dom";
import BtnDarkMode from "../btnDarkMode/BtnDarkMode";
import "./style.css";



const Navbar = () => {
    const activeLink='nav-list__link nav-list__link_active';
    const normalLink='nav-list__link';

    return (
        <nav className="nav">
            <div className="nav__container">
                <div className="nav__row">
                    <NavLink to="/" className="nav__logo logo">
                        <strong>Freelancer</strong> portfolio
                    </NavLink>
                    <BtnDarkMode/>
                    <ul className="nav__list nav-list">
                        <li className="nav-list__item">
                            <NavLink to="/" className={({isActive})=>isActive?activeLink:normalLink}>
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-list__item">
                            <NavLink to="/projects" className={({isActive})=>isActive?activeLink:normalLink}>
                                Projects
                            </NavLink>
                        </li>
                        <li className="nav-list__item">
                            <NavLink to="/contacts" className={({isActive})=>isActive?activeLink:normalLink}>
                                Contacts
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;