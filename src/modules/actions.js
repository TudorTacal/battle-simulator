export const THROW_DICE = 'THROW_DICE';
export const UPDATE_GAME_STATUS = 'UPDATE_GAME_STATUS';
export const UPDATE_HIT_POINTS = 'UPDATE_HIT_POINTS';
export const REPLAY = 'REPLAY';

export const throwDiceAction = () => ({
  type: THROW_DICE,
});

export const updateGameStatusAction = () => ({
  type: UPDATE_GAME_STATUS,
});

export const updateHitPointsAction = () => ({
  type: UPDATE_HIT_POINTS,
});

export const replayAction = () => ({
  type: REPLAY,
});
