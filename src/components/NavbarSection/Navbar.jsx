import React from 'react';
import logo from '../../assets/images/logo-img.png';
import './navbar.css';

const Navbar = () => {
  return (
    <>
            <div className="general-container">
            <div className="nav-container">
                <div className="nav-logo-container">
                    <a href="#home">
                        <img src={logo} alt="logo" />
                    </a>
                    
                </div>

                <div className="nav-link-container">
                    <a href="#why-verd">Why Verd</a>
                    <a href="#features">Features</a>
                    <a href="#faqs">FAQs</a>
                    <a href="#home" className="cta-btn">Join Waitlist</a>
                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar