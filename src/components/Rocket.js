// Rocket.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const RocketContainer = styled.div`
  width: 50px;
  height: 100px;
  background-color: red;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  transition: transform 0.2s;
`;

const Rocket = () => {
  const [position, setPosition] = useState(50);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowLeft' && position > 0) {
        setPosition(position - 10);
      } else if (e.key === 'ArrowRight' && position < 100) {
        setPosition(position + 10);
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [position]);

  return <RocketContainer style={{ transform: `translateX(${position}%)` }} />;
};

export default Rocket;
