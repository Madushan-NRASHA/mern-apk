import React from 'react'
import { Link } from 'react-router-dom';
import ProfileImg from '../assets/gg.png';
import '../App.css'
function userImage() {
  return (
    <div>
      <div class="dotted-circle">
      
      <li>
        <Link to="/userAcc"><img src={ProfileImg} alt="Profile" className="profile-img" /></Link>
      </li>
      </div>
    </div>
  )
}

export default userImage
