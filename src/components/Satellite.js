// Satellite.js
import React from 'react';
import styled from 'styled-components';

const SatelliteContainer = styled.div`
  width: 20px;
  height: 40px;
  background-color: white;
  position: absolute;
  left: ${({ left }) => `${left}%`};
  top: ${({ top }) => `${top}%`};
`;

const Satellite = ({ left, top }) => {
  return <SatelliteContainer left={left} top={top} />;
};

export default Satellite;
