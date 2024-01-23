// Asteroid.js
import React from 'react';
import styled, { keyframes } from 'styled-components';

// Keyframe animation for asteroid rotation
const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

// Keyframe animation for asteroid floating
const floatAnimation = keyframes`
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

const AsteroidContainer = styled.div`
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  background-color: gray;
  border-radius: 50%;
  position: absolute;
  left: ${({ left }) => `${left}%`};
  top: ${({ top }) => `${top}%`};
  animation: ${rotateAnimation} 10s linear infinite, ${floatAnimation} 5s ease-in-out infinite;
  // Add more styles to customize the appearance of the asteroid
`;

const Asteroid = ({ size, left, top }) => {
  return <AsteroidContainer size={size} left={left} top={top} />;
};

export default Asteroid;
