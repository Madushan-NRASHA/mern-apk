// src/components/Typewriter.jsx
import React, { useState, useEffect } from 'react';
import '../App.css';

const Typewriter = ({ staticText, dynamicWords, speed, pause }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState(staticText);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let intervalId = null;

    if (isTyping) {
      let index = 0;
      intervalId = setInterval(() => {
        setDisplayedText(staticText + dynamicWords[currentWordIndex].substring(0, index + 1));
        index++;
        if (index === dynamicWords[currentWordIndex].length) {
          clearInterval(intervalId);
          setIsTyping(false);
        }
      }, speed);
    } else {
      const timeoutId = setTimeout(() => {
        setIsTyping(true);
        setDisplayedText(staticText);
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % dynamicWords.length);
      }, pause);

      return () => clearTimeout(timeoutId);
    }

    return () => clearInterval(intervalId);
  }, [isTyping, currentWordIndex, staticText, dynamicWords, speed, pause]);

  return <div className="typewriter-container">{displayedText}</div>;
};

export default Typewriter;
