import React from 'react';
import { useInView } from 'react-intersection-observer';
import PropTypes from 'prop-types';
import '../App.css';

const SkillCircle = ({ skills }) => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Change this if you want the animation to run each time it comes into view
    threshold: 0.1,
  });

  const radius = 65;
  const circumference = 2 * Math.PI * radius;

  // Ensure skills is an array
  const skillsArray = Array.isArray(skills) ? skills : [];

  return (
    <div ref={ref} className="progress-container">
      <div className="progress-circle">
        <svg width="150" height="150" viewBox="0 0 150 150" className="svg-i">
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: 'purple', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: 'red', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <circle className="background-circle" cx="75" cy="75" r="65" />
          {skillsArray.map((skill, index) => (
            <circle
              key={index}
              className="progress-circle"
              cx="75"
              cy="75"
              r="65"
              stroke={skill.color}
              style={{
                strokeDasharray: `${circumference}`,
                strokeDashoffset: inView
                  ? `${circumference - (skill.level / 100) * circumference}`
                  : `${circumference}`,
                transition: 'stroke-dashoffset 1s ease',
              }}
            />
          ))}
        </svg>
        <div className="progress-inner">
          <div className="progress-value">{inView ? `${skillsArray[0]?.level || 0}%` : '0%'}</div>
        </div>
      </div>
    </div>
  );
};

SkillCircle.propTypes = {
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      level: PropTypes.number.isRequired,
      color: PropTypes.string.isRequired,
    })
  ).isRequired,
};

SkillCircle.defaultProps = {
  skills: [{ level: 0, color: 'gray' }],
};

export default SkillCircle;
