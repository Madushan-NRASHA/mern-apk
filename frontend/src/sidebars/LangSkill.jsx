import React from 'react'
import NeomorphismProgressBar from '../components/FramworkSkill';
function SkillBar() {
  const skills = [
    { name: 'JavaScript', level: 90, color: 'silverblue' },
   
  ];
  const skills2 = [
    { name: 'JavaScript', level: 80, color: 'silverblue' },
   
  ];
  const skills3 = [
    { name: 'JavaScript', level: 70, color: 'silverblue' },
   
  ];
  return (
    <div>
        <h1 style={{color:'silver'}}>My Experience</h1><br />
       <div className='n'>
                
                 <NeomorphismProgressBar skills={skills} />
                 <NeomorphismProgressBar skills={skills2} />
                 <NeomorphismProgressBar skills={skills3} />
                <div className='flutter_name'>
               <h2>C++</h2>
            </div>
           <div className='react_name'>
               <h2>Python</h2>
            </div>
            <div className='laravel_name'>
               <h2>Java</h2>
            </div>
            </div>
            

    </div>
  )
}

export default SkillBar
