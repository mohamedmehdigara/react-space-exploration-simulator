// Planet.js
import React from 'react';
import styled, { keyframes } from 'styled-components';

// Keyframe animation for planet rotation
const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const PlanetContainer = styled.div`
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  background-color: ${({ color }) => color};
  border-radius: 50%;
  position: absolute;
  left: ${({ left }) => `${left}%`};
  top: ${({ top }) => `${top}%`};
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5); // Add a shadow effect
  animation: ${rotateAnimation} 15s linear infinite; // Add rotation animation
  // Add more styles to customize the appearance of the planet
`;

const Planet = ({ size, color, left, top }) => {
  return <PlanetContainer size={size} color={color} left={left} top={top} />;
};

export default Planet;
