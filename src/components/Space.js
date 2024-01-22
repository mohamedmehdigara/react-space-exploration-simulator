// Space.js
import React from 'react';
import styled from 'styled-components';
import Stars from './Stars';
import Planet from './Planet';

const SpaceContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
  position: relative;
  overflow: hidden;
`;

const Space = () => {
  return (
    <SpaceContainer>
      <Stars count={100} />
      <Planet size={50} color="orange" left={20} top={60} />
      <Planet size={30} color="blue" left={80} top={30} />
    </SpaceContainer>
  );
};

export default Space;
