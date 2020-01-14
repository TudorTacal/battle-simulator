import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './modules/reducers';
import BattleSimulatorContainer from './containers/BattleSimulatorContainer';
import BattleSimulator from './components/BattleSimulator';

const composedEnhancers = composeWithDevTools();
export const initialState = {
  hero: {
    name: 'Hero',
    img: {
      alt: 'Hero',
      src: 'Hero.png',
    },
    dice: {
      dice1: 6,
      dice2: 6,
    },
    hitPoints: 100,
  },
  villain: {
    name: 'Villain',
    img: {
      alt: 'Villain',
      src: 'Villain.webp',
    },
    dice: {
      dice1: 6,
      dice2: 6,
    },
    hitPoints: 100,
  },
  gameStatus: {
    message: 'Press Attack to start playing',
    winner: null,
  },
};
const store = createStore(rootReducer, initialState, composedEnhancers);

ReactDOM.render(
  <Provider store={store}>
    <BattleSimulatorContainer childComponent={BattleSimulator} />
  </Provider>,
  document.getElementById('root')
);
