import React from 'react'
import ParallaxCard from '../components/ParallaxCard';
import CImage from '../assets/c++.jpeg'
import JavaImage from '../assets/java.jpeg'
import PythonImage from '../assets/python.jpeg'

function lang() {
  return (
    <div>
      
      <div className="align-lang">
        
      <ParallaxCard 
          title="C++" 
          imageSrc={CImage}
        />
         <ParallaxCard 
          title="python" 
          imageSrc={PythonImage}
        />
        <ParallaxCard 
          title="Java" 
          imageSrc={JavaImage}
        /> 
    </div>
    
    </div>
  )
}

export default lang
