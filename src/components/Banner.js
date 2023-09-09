import React from 'react';
import "../style/Banner.css"


function Banner() {
  return (
    <div className="banner-container">
    <div className="banner-content">
      <h1 className="banner-title">Laleth</h1>
      <p className="banner-subtitle">Web Developer | Mainframe Developer</p>
      <p className="banner-description">
        Welcome to my portfolio website. I create beautiful and functional web applications and backend Mainframe applications.
      </p>
      {/* <a href="#contact" className="banner-button">Contact Me</a> */}
    </div>
   
  </div>
  );
}

export default Banner;
