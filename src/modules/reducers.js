import {
  THROW_DICE,
  UPDATE_GAME_STATUS,
  UPDATE_HIT_POINTS,
  REPLAY,
} from './actions';
import { generateRandomDice, getDiceDifference, getGameStatus } from '../utils';
import { initialState } from '../index';

const throwDice = state => ({
  ...state,
  hero: {
    ...state.hero,
    dice: {
      dice1: generateRandomDice(),
      dice2: generateRandomDice(),
    },
  },
  villain: {
    ...state.villain,
    dice: {
      dice1: generateRandomDice(),
      dice2: generateRandomDice(),
    },
  },
});

const updateGameStatus = state => {
  let diceDifference = getDiceDifference({
    hero: state.hero,
    villain: state.villain,
  });

  return {
    ...state,
    gameStatus: {
      ...state.gameStatus,
      ...getGameStatus({
        diceDifference,
        hero: state.hero,
        villain: state.villain,
      }),
    },
  };
};

const updateHitPoints = state => {
  let diceDifference = getDiceDifference({
    hero: state.hero,
    villain: state.villain,
  });

  return {
    ...state,
    hero: {
      ...state.hero,
      hitPoints:
        diceDifference < 0
          ? state.hero.hitPoints - Math.abs(diceDifference)
          : state.hero.hitPoints,
    },
    villain: {
      ...state.villain,
      hitPoints:
        diceDifference > 0
          ? state.villain.hitPoints - diceDifference
          : state.villain.hitPoints,
    },
  };
};

const replay = state => ({
  ...state,
  ...initialState,
});

const reducer = {
  [THROW_DICE]: throwDice,
  [UPDATE_GAME_STATUS]: updateGameStatus,
  [UPDATE_HIT_POINTS]: updateHitPoints,
  [REPLAY]: replay,
};

export default (state = {}, action) =>
  action.type && reducer[action.type]
    ? reducer[action.type](state, action)
    : state;
