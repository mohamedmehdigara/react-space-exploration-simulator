// SpaceStation.js
import React from 'react';
import styled, { keyframes } from 'styled-components';

// Keyframe animation for space station rotation
const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const SpaceStationContainer = styled.div`
  width: 80px;
  height: 80px;
  background-color: #f0f0f0;
  border: 4px solid #333;
  border-radius: 50%;
  position: absolute;
  left: ${({ left }) => `${left}%`};
  top: ${({ top }) => `${top}%`};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${rotateAnimation} 15s linear infinite; // Add rotation animation
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.8); // Add a subtle glow effect
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1); // Add a scale effect on hover
  }
`;

const Antenna = styled.div`
  width: 8px;
  height: 40px;
  background-color: #333;
  position: absolute;
  top: -10px;
`;

const SpaceStation = ({ left, top, onClick }) => {
  return (
    <SpaceStationContainer left={left} top={top} onClick={onClick}>
      <Antenna />
    </SpaceStationContainer>
  );
};

export default SpaceStation;
