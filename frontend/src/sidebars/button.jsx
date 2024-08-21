import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; // Make sure to import your CSS file

const AnimatedLink = ({ children }) => {
  return (
    <>
    <Link to="">
    <div className="animated-link">

      <span></span>
      <span></span>
      <span></span>
      <span></span>
     Download Cv
    </div>
    </Link>
    <Link to="/contact-us">
    <div className="animated-link2">

      <span></span>
      <span></span>
      <span></span>
      <span></span>
   Hire Me
    </div>
    </Link>
    </>
  );
};

export default AnimatedLink;
