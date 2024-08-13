import React from 'react'
import ParallaxCard from '../components/ParallaxCard';
import MernImage from '../assets/mernImage.png'
function mernCard() {
  return (
    <div>
      <div className="align-mern">
        
        <ParallaxCard 
            title="Mern" 
            imageSrc={MernImage}
          />
          
      </div>
    </div>
  )
}

export default mernCard
