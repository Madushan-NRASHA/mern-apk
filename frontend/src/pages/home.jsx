import React from 'react';
import ProfileImg from '../components/userImage';
import IconSideBar from '../sidebars/iconSideBar'; 
import Typewriter from '../components/Typewriter';
import Buttons from '../sidebars/button';
import Introduction from '../sidebars/Introduction';

import '../App.css';
import About from './about_us';

function Home() {
  const staticText = ' ';
  const dynamicWords = [
    'software developer',
    'web developer',
    'flutter developer'
  ];

  return (
    <>
    <div className="image-container">
      <h2 style={{ color: 'white', position: 'absolute', left: '40%' }}>Home Page</h2>
      <IconSideBar />
      </div>
      <div className="profile-pic_disp">
        <ProfileImg />
      </div>
      <div className="intro-text">
        <Introduction />
      </div>
   
  < div className="typewriter-wrapper">
        <Typewriter 
          staticText={staticText} 
          dynamicWords={dynamicWords} 
          speed={100} 
          pause={2000} 
        />
      </div>
      <div className="buttons-wrapper">
        <Buttons />
      </div>
      <div className="about_pos">
        <About />
      </div>
   </>
  );
}

export default Home;
