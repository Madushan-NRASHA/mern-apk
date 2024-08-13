import React from 'react'
import NeomorphismProgressBar from '../components/FramworkSkill';
function Stake() {
    const skills = [
        { name: 'JavaScript', level: 50, color: 'silverblue' },
       
      ];
  return (
    <div>
       <NeomorphismProgressBar skills={skills} />
       <div className='flutter_name'>
               <h2>Mern</h2>
            </div>
    </div>
  )
}

export default Stake
