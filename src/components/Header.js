import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.h1`
  font-family: 'Press Start 2P', cursive;
  width: 100%;
  text-align: center;
  margin: 50px 0;
`;

export default function Header({ text }) {
  return <StyledHeader>{text}</StyledHeader>;
}
