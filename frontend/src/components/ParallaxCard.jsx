// src/components/ParallaxCard.js
import React from 'react';
import '../App.css';

function ParallaxCard({ title, description, imageSrc }) {
  return (
    <div
      className="card"
      style={{
        backgroundImage: `url(${imageSrc})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="card-content">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ParallaxCard;
