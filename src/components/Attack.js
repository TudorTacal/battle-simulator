import React, { Fragment } from 'react';
import styled from 'styled-components';

const AttackButton = styled.button`
  font-family: 'Press Start 2P', cursive;
  width: 20%;
  margin: auto;
  height: 50px;
  font-style: italic;
  border-radius: 10px;
  background-color: light-green;
  font-size: 16px;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2); }
  :hover {
    transform: translateY(-0.3rem);
  }
  :disabled {
    border: 1px solid #999999;
    background-color: #cccccc;
    color: #666666;
    transform: translateY(0);
  }
`;

export default function Attack({ text, onClick, winner }) {
  return (
    <AttackButton onClick={onClick} disabled={!!winner}>
      {text}
    </AttackButton>
  );
}
