// SpaceStation.js
import React from 'react';
import styled from 'styled-components';

const SpaceStationContainer = styled.div`
  width: 80px;
  height: 80px;
  background-color: white;
  position: absolute;
  left: ${({ left }) => `${left}%`};
  top: ${({ top }) => `${top}%`};
  cursor: pointer;
`;

const SpaceStation = ({ left, top, onClick }) => {
  return <SpaceStationContainer left={left} top={top} onClick={onClick} />;
};

export default SpaceStation;
