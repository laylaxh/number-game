/*
State:
  // Sum of numbers you Selected
  // Win/Lose
*/

import * as Redux from 'redux';

const initialState = {
  selectedNumbers: []
};

const actionFunctions = {
  'SELECT_NUMBER': (state, payload) => {
    return {
      ...state,
      selectedNumbers: [...state.selectedNumbers, payload.index],
    };
  },
};

const reducer = (state, action) => {
  const actionFunction = actionFunctions[action.type];
  if (!actionFunction) {
    return state;
  }
  return actionFunction(state, action.payload);
};

const store = Redux.createStore(reducer, initialState);
// // console.log(store);
// console.log('getState', store.getState());
// //
// store.dispatch({ type: 'SELECT_NUMBER', payload: { index: 3 } });
// console.log('getState', store.getState());
// store.dispatch({ type: 'SELECT_NUMBER', payload: { index: 0 } });
// console.log('getState', store.getState());
// store.dispatch({ type: 'SELECT_NUMBER', payload: { index: 6 } });
// console.log('getState', store.getState());

export default store;
