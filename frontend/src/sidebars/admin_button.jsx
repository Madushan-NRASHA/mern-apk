import React from 'react';
import '../App.css'; // Make sure to import your CSS file

const AnimatedLink = ({ children }) => {
  return (
    <>
    <div className="animated-link">

      <span></span>
      <span></span>
      <span></span>
      <span></span>
    Add Projects
    </div>
    <div className="animated-link2">

      <span></span>
      <span></span>
      <span></span>
      <span></span>
   Show Projects
    </div>
    </>
  );
};

export default AnimatedLink;
