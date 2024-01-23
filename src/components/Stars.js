// Stars.js
import React from 'react';
import styled, { keyframes } from 'styled-components';

const generateRandomValue = (min, max) => Math.random() * (max - min) + min;

// Keyframe animation for twinkling stars
const twinkleAnimation = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
`;

const Star = styled.div`
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  background-color: ${({ color }) => color || 'white'};
  position: absolute;
  left: ${({ left }) => `${left}%`};
  top: ${({ top }) => `${top}%`};
  animation: ${twinkleAnimation} ${({ duration }) => duration || '3s'} linear infinite;
`;

const Stars = ({ count, size, color, duration }) => {
  const stars = Array.from({ length: count }, (_, index) => (
    <Star
      key={index}
      size={size || generateRandomValue(1, 3)} // Random size between 1 and 3 pixels
      color={color}
      duration={duration}
      left={Math.random() * 100}
      top={Math.random() * 100}
    />
  ));

  return <>{stars}</>;
};

export default Stars;
