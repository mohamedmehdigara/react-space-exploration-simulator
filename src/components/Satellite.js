// Satellite.js
import React from 'react';
import styled, { keyframes } from 'styled-components';

// Keyframe animation for satellite rotation
const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const SatelliteContainer = styled.div`
  width: 20px;
  height: 40px;
  background-color: white;
  position: absolute;
  left: ${({ left }) => `${left}%`};
  top: ${({ top }) => `${top}%`};
  border-radius: 50%;
  animation: ${rotateAnimation} 10s linear infinite; // Add rotation animation
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.8); // Add a glow effect
  // Add more styles to customize the appearance of the satellite
`;

const Satellite = ({ left, top }) => {
  return <SatelliteContainer left={left} top={top} />;
};

export default Satellite;
