import React from "react";
import "./Navbar.css";
import logo from "../../assets/wd-high-resolution-logo.png";
import { Link } from "react-scroll";
import contactimg from "../../assets/contact.png";
 
const Navbar  = () => {
    return (
        <nav className="navbar">
            <img src={logo} alt="Logo" className="logo" />
            <div className="desktopMenu" >
                <Link className="desktopMenulistItem">Home</Link>
                <Link className="desktopMenulistItem">About</Link>
                <Link className="desktopMenulistItem">Portfolio</Link>
                <Link className="desktopMenulistItem">Clients</Link>
            </div>
            <button className="desktopMenubtn" >
                <img src={contactimg}  alt="Contact" className="contactimg" />Contact Me
            </button>



        </nav>
    )
}

export default Navbar;
