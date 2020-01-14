import React from 'react';
import styled from 'styled-components';
import Attack from './Attack';
import Header from './Header';
import Player from './Player';
import GameStatus from './GameStatus';

const Container = styled.div`
  display: flex;
  margin: 50px 50px;
  flex-wrap: wrap;
  align-items: center;
`;

const PlayerContainer = styled.div`
  display flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 50px;
`;

export default function BattleSimulator({
  hero,
  villain,
  gameStatus,
  throwDice,
  updateGameStatus,
  updateHitPoints,
  winner,
  replay,
}) {
  return (
    <Container>
      <Header text="Battle Simulator" />
      <PlayerContainer>
        <Player type="hero" hero={hero} />
        <GameStatus gameStatus={gameStatus} onClick={replay} />
        <Player villain={villain} />
      </PlayerContainer>
      <Attack
        winner={gameStatus.winner}
        text="Attack!"
        onClick={() => {
          throwDice();
          updateHitPoints();
          updateGameStatus();
        }}
      />
    </Container>
  );
}
