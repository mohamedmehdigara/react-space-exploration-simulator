// Space.js
import React from 'react';
import styled from 'styled-components';
import Stars from './Stars';
import Planet from './Planet';
import Asteroid from './Asteroid';
import Satellite from './Satellite';
import SpaceStation from './SpaceStation';

const SpaceContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
  position: relative;
  overflow: hidden;
`;

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
    </SpaceContainer>
  );
};

export default Space;
