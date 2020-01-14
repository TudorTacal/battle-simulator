import React, { Fragment } from 'react';
import styled from 'styled-components';

const PlayerImage = styled.img`
  height: 150px;
  width: 150px;
`;

const PlayerHealth = styled.div`
  width: 30px;
  height: 200px;
  background: ${props =>
    `linear-gradient(to top, green 0%, green ${props.hitPoints}%, transparent ${props.hitPoints}%), linear-gradient(red 0%, red 100%)`};
`;

const DiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Dice = styled.img`
  height: 40px;
  width: 40px;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.1); }
`;

const PlayerName = styled.p`
  font-family: 'Press Start 2P', cursive;
  text-align: center;
  fonst-size: 32px;
`;

const PlayerDetails = styled.div`
  display: flex;
  flex-direction: column;
  height: 200px;
  justify-content: space-between;
`;

export default function Player({ hero, villain, type }) {
  return type === 'hero' ? (
    <Fragment>
      <PlayerDetails>
        <PlayerImage alt={hero.img.alt} src={hero.img.src}></PlayerImage>
        <PlayerName>{hero.name}</PlayerName>
      </PlayerDetails>
      <PlayerHealth hitPoints={hero.hitPoints} />
      <DiceContainer>
        <Dice src={`Dice${hero.dice.dice1}.png`}></Dice>
        <Dice src={`Dice${hero.dice.dice2}.png`}></Dice>
      </DiceContainer>
    </Fragment>
  ) : (
    <Fragment>
      <DiceContainer>
        <Dice src={`Dice${villain.dice.dice1}.png`}></Dice>
        <Dice src={`Dice${villain.dice.dice2}.png`}></Dice>
      </DiceContainer>
      <PlayerHealth hitPoints={villain.hitPoints} />
      <PlayerDetails>
        <PlayerImage alt={villain.img.alt} src={villain.img.src}></PlayerImage>
        <PlayerName>{villain.name}</PlayerName>
      </PlayerDetails>
    </Fragment>
  );
}
