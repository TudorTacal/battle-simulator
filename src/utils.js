export const generateRandomDice = () =>
  Math.floor(Math.random() * (6 - 1 + 1)) + 1;

export const getDiceDifference = ({ hero, villain }) =>
  hero.dice.dice1 + hero.dice.dice2 - (villain.dice.dice1 + villain.dice.dice2);

export const getGameStatus = ({ diceDifference, hero, villain }) => {
  let message;
  let winner;

  if (diceDifference > 0) {
    message = `You hit for ${Math.abs(diceDifference)}!`;
  } else if (diceDifference < 0) {
    message = `You were hit for ${Math.abs(diceDifference)}!`;
  } else {
    message = `You were equal!`;
  }

  if (hero.hitPoints <= 0) {
    message = 'Game Over';
    winner = 'Villain';
  }

  if (villain.hitPoints <= 0) {
    message = 'You Win';
    winner = 'Hero';
  }

  return { message, winner };
};
