// Navbar.js
import React, { useState } from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import companyIcon from './assets/images/company-icon.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <NavLink to="/" className="company-name">
                    <img src={companyIcon} alt="Company Icon" className="company-icon" />
                    Simfin Buildwealth
                </NavLink>
            </div>
            <div className="navbar-right">
                {/* Hamburger menu for mobile */}
                <div className="hamburger" onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
                <NavLink 
                    to="/team" 
                    className={({ isActive }) => 
                        isActive ? "navbar-link active" : "navbar-link"
                    }
                >
                    Our Team
                </NavLink>
            </div>

            {/* Side navigation menu */}
            <div className={`side-nav ${isOpen ? 'open' : ''}`}>
                <button className="close-btn" onClick={toggleMenu}>&times;</button>
                <NavLink to="/team" className="side-nav-link" onClick={toggleMenu}>
                    Our Team
                </NavLink>
                {/* Add more links here if needed */}
            </div>
        </nav>
    );
};

export default Navbar;
