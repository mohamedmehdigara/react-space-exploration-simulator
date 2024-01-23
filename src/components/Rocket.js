// Rocket.js
import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

// Keyframe animation for rocket flame
const flameAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
`;

const RocketContainer = styled.div`
  width: 50px;
  height: 100px;
  background-color: red;
  position: absolute;
  bottom: 0;
  left: ${({ position }) => `${position}%`};
  transform: translateX(-50%);
  transition: left 0.2s;
  display: flex;
  align-items: flex-end;
`;

const Flame = styled.div`
  width: 20px;
  height: 30px;
  background-color: orange;
  border-radius: 10px;
  position: absolute;
  bottom: -5px;
  left: 50%;
  transform: translateX(-50%);
  animation: ${flameAnimation} 0.5s ease-in-out infinite alternate;
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

  return (
    <RocketContainer position={position}>
      <Flame />
    </RocketContainer>
  );
};

export default Rocket;
