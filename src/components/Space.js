// Space.js
import React from 'react';
import styled from 'styled-components';
import Stars from './Stars';
import Planet from './Planet';
import Asteroid from './Asteroid';
import Satellite from './Satellite';
import SpaceStation from './SpaceStation';
import keyframes from 'styled-components';

const SpaceContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
  position: relative;
  overflow: hidden;
`;

const Cloud = styled.div`
  width: 150px;
  height: 80px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  position: absolute;
  top: ${({ top }) => `${top}%`};
  left: ${({ left }) => `${left}%`};
  transform: translateX(-50%);
  animation: cloudAnimation 20s linear infinite alternate;
`;

const cloudAnimation = keyframes`
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(100%);
  }
`;

const Clouds = () => {
  return (
    <>
      <Cloud top={10} left={20} />
      <Cloud top={30} left={60} />
      <Cloud top={50} left={10} />
    </>
  );
};

const Space = () => {
  const handleSpaceStationClick = () => {
    alert('Space Station Clicked!');
  };

  return (
    <SpaceContainer>
      <Stars count={100} />
      <Planet size={50} color="orange" left={20} top={60} />
      <Planet size={30} color="blue" left={80} top={30} />
      <Asteroid size={20} left={50} top={20} />
      <Satellite left={70} top={50} />
      <SpaceStation left={40} top={10} onClick={handleSpaceStationClick} />
      <Clouds />
    </SpaceContainer>
  );
};

export default Space;
