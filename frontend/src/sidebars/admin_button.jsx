import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const AnimatedLink = ({ children }) => {
  return (
    <>
      <Link to="/Add_project">
        <div className="animated-link">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Add Projects
        </div>
      </Link>
      
      <Link to="/Show_projects">
        <div className="animated-link2">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Show Projects
        </div>
      </Link>
    </>
  );
};

export default AnimatedLink;
