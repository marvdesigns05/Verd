import React from 'react';
import './hero.css';
import logo from '../../assets/images/logo.png';

const Hero = () => {
  return (
    <>
        <div className="hero-bg" id='home'>
            <div className="hero-container">
                <div className="coming-soon">
                  <img src={logo} alt="" /><span>Launching Soon</span>
                </div>

                <div className="hero-text">
                  <div className="large-text">
                    <span>Where Your Money Does More</span>
                  </div>
                  <div className="small-text">
                    <span>A DeFi-powered system that helps your money grow and compound.</span>
                  </div>
                </div>

                <div className="input-container">
                  <input type="email" placeholder='Enter email address'/><span><button className="cta-btn">Get Early Access</button></span>
                </div>
            </div>
        </div>
    </>
  )
}

export default Hero