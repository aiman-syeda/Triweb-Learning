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
                <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenulistItem">Home</Link>
                <Link activeClass="active" to="about" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenulistItem">About</Link>
                <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenulistItem">Projects</Link>
                <Link activeClass="active" to="skill" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenulistItem">Skills</Link>
            </div>
            <button className="desktopMenubtn" onClick={() => {
                document.getElementById('contactme').scrollIntoView({behaviour: 'smooth'})
            }} >
                <img src={contactimg}  alt="Contact" className="contactimg" />Contact Me
            </button>



        </nav>
    )
}

export default Navbar;
