import React from "react";
import './Navbar.scss'
import logo from './logo.png'

const Navbar = () => {

    return (
        <nav className="nav-navbar">
            <div className="logo">
                <img src={logo} alt="logo.png" />
            </div>
            <div className="container" onClick={() => { 
                document.querySelector(".container").classList.toggle("change"); 
                document.querySelector(".navbar").classList.toggle("expand");
            }}>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </div>
            <ul className="navbar">
                <li className="navLinks">Services</li>
                <li className="navLinks">About Us</li>
                <li className="navLinks">Contact Us</li>
                <li className="navLinks">Career</li>
            </ul>
        </nav>
    )
}

export default Navbar;