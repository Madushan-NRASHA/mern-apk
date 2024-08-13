import React from 'react'
import ParallaxCard from '../components/ParallaxCard';
import ReactImage from '../assets/React_images.png';
import Flutter from '../assets/flutter_image.jpeg';
import Laravel from '../assets/Laravel.jpeg';
function Framework() {
  return (
    <div>
    <div className="card-container">
        <ParallaxCard 
          title="React" 
          imageSrc={ReactImage}
        />
        <ParallaxCard 
          title="Flutter" 
          imageSrc={Flutter}
        />
        <ParallaxCard 
          title="Laravel" 
          imageSrc={Laravel}
        />
      </div>
    </div>
  )
}

export default Framework
