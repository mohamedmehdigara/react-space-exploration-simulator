// Stars.js
import React from 'react';
import styled from 'styled-components';

const Star = styled.div`
  width: 2px;
  height: 2px;
  background-color: white;
  position: absolute;
  left: ${({ left }) => `${left}%`};
  top: ${({ top }) => `${top}%`};
`;

const Stars = ({ count }) => {
  const stars = Array.from({ length: count }, (_, index) => (
    <Star key={index} left={Math.random() * 100} top={Math.random() * 100} />
  ));

  return <>{stars}</>;
};

export default Stars;
