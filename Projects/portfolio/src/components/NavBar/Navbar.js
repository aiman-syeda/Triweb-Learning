import React from "react";
import "./Navbar.css";
import logo from "../../assets/as-high-resolution-logo-white-transparent (1).png";
import { Link } from "react-scroll";
import contactimg from "../../assets/contact.png";
 
const Navbar  = () => {
    return (
        <nav className="navbar">
            <img src={logo} alt="Logo" className="logo" />
            <div className="desktopMenu" >
                <Link className="desktopMenulistItem">Home</Link>
                <Link className="desktopMenulistItem">About</Link>
                <Link className="desktopMenulistItem">Projects</Link>
                <Link className="desktopMenulistItem">Skills</Link>
            </div>
            <button className="desktopMenubtn" >
                <img src={contactimg}  alt="Contact" className="contactimg" />Contact Me
            </button>



        </nav>
    )
}

export default Navbar;
