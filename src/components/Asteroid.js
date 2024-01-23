// Asteroid.js
import React from 'react';
import styled from 'styled-components';

const AsteroidContainer = styled.div`
 
  background-color: gray;
  border-radius: 50%;
  position: absolute;
  left: ${({ left }) => `${left}%`};
  top: ${({ top }) => `${top}%`};
`;

const Asteroid = ({ size, left, top }) => {
  return <AsteroidContainer size={size} left={left} top={top} />;
};

export default Asteroid;
