import React, { Fragment } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  align-items: center;
`;

const StyledGameStatus = styled.p`
  font-family: 'Press Start 2P', cursive;
  text-align: center;
  margin: 24px 0;
  font-size: ${({ winner }) => (winner ? '48px' : '24px')};
  ${({ winner }) => winner && `color: ${winner === 'Hero' ? 'green' : 'red'}`}
`;

const Replay = styled.img`
  height: 35px;
  width: 35px;
  :hover {
    transform: translateY(-0.3rem);
  }
`;

export default function GameStatus({ gameStatus, onClick }) {
  return (
    <Container>
      <StyledGameStatus winner={gameStatus.winner}>
        {gameStatus.message}
      </StyledGameStatus>
      {gameStatus.winner && (
        <Replay src="Replay.png" alt="Replay" onClick={onClick} />
      )}
    </Container>
  );
}
