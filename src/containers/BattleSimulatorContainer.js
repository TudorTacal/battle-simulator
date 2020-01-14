import React from 'react';
import { connect } from 'react-redux';
import {
  throwDiceAction as throwDice,
  updateGameStatusAction as updateGameStatus,
  updateHitPointsAction as updateHitPoints,
  replayAction as replay,
} from '../modules/actions';

function BattleSimulatorContainer({
  childComponent: ChildComponent,
  ...props
}) {
  return <ChildComponent {...props} />;
}

const mapStateToProps = ({ hero, villain, gameStatus }) => ({
  hero,
  villain,
  gameStatus,
});

const mapDispatchToProps = dispatch => ({
  throwDice: () => dispatch(throwDice()),
  updateGameStatus: () => dispatch(updateGameStatus()),
  updateHitPoints: () => dispatch(updateHitPoints()),
  replay: () => dispatch(replay()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BattleSimulatorContainer);
