import React from 'react';
import { FaGithub, FaWhatsapp, FaFacebook, FaTelegram, FaInstagram, FaLinkedin } from 'react-icons/fa';
import '../App.css'; // Ensure the correct relative path is used

const socialIcons = [
  { icon: FaFacebook, className: 'facebook-icon', url: 'https://www.facebook.com/madushan.nirasha.10?mibextid=ZbWKwL' },
  { icon: FaInstagram, className: 'instagram-icon', url: 'https://www.instagram.com/madushan_nirasha?igsh=YzljYTk1ODg3Zg==' },
  { icon: FaLinkedin, className: 'linkedin-icon', url: 'https://linkedin.com/example' },
  { icon: FaTelegram, className: 'telegram-icon', url: 'https://telegram.com/example' },
  { icon: FaWhatsapp, className: 'whatsapp-icon', url: 'https://wa.me/0701792579' },

  { icon: FaGithub, className: 'github-icon', url: 'https://github.com/Madushan-NRASHA' },
];

function IconSideBar() {
  return (
    <div className="sidebar">
      {socialIcons.map((item, index) => (
        <div key={index} className="sidebar-item">
          <a href={item.url} target="_blank" rel="noopener noreferrer" className={`sidebar-icon social-icon ${item.className}`}>
            <item.icon />
          </a>
        </div>
      ))}
    </div>
  );
}

export default IconSideBar;
