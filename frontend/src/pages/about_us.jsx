import React from 'react';
import LangSkill from '../sidebars/LangSkill';
import FrameWSkill from '../sidebars/SkillBar'
import Lang from '../sidebars/lang'
import Framework from '../sidebars/Framework';
import Stake from '../sidebars/Stake';
import MernCard from '../sidebars/mernCard';

function About() {
  return (
    <>
     
     <div className="Frame-pos">
     <h1 style={{color:'silver'}}>I Have Learned</h1><br />
      <Framework/>
      <FrameWSkill/><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      
      <Lang/>
      
      <div className="lang-pos">
      <LangSkill/>
      </div>
      
      <div className="stack-pos">
      
      <MernCard/>
      <Stake/>
      </div>
    
      </div>

    </>
   
  );
}

export default About;
