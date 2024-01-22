// Planet.js
import React from 'react';
import styled from 'styled-components';

const PlanetContainer = styled.div`
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  background-color: ${({ color }) => color};
  border-radius: 50%;
  position: absolute;
  left: ${({ left }) => `${left}%`};
  top: ${({ top }) => `${top}%`};
`;

const Planet = ({ size, color, left, top }) => {
  return <PlanetContainer size={size} color={color} left={left} top={top} />;
};

export default Planet;
