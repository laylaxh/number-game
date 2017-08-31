/*
State:
  // Sum of numbers you selected
  // Win/Lose
*/

/* First in terminal: npm i redux react-redux
  When we use Redux, anything that goes to a state has to go to the redux store which means 
  the state is not connected to React anymore. Redux and React are now 2 separate memory 
  spaces so we have to tie them together. react-redux makes connecting easier.
*/
import * as Redux from 'redux';

const initialState = {
  // This is how we were faking it by selecting the indexes clicked by user:
  // selectedNumbers: [0, 2] 
  selectedNumbers: []  // No need to fake anymore
};

// Whatever you return from this reducer will be the new state 
const reducer = (state, action) => {         
  // console.log('calling reducer', action);
  // if(action.type === 'TEST') {
  //   // Instead of `state.counter = 1;`, return a new object, copy original state, and do modification
  //   // Immutable way to manage a state
  //   return {
  //     ...state, 
  //     counter: 1,
  //   }; 
  // }
  // if(action.type === 'TEST2') {    
  //   return {
  //     ...state, 
  //     counter: state.counter + 1;,
  //   }; 
  // }
  return state;      
};

const store = Redux.createStore(reducer, initialState); 

// store.dispatch({type: 'TEST'}); // Everytime I dispatch, the reducer is called with my action
// console.log('getState', store.getState()); // Gives getState > {selectedNumbers: Array(2), counter:1}

// store.dispatch({type: 'TEST2'}); // Everytime I dispatch, the reducer is called with my action
// console.log('getState', store.getState()); // Gives getState > {selectedNumbers: Array(2), counter:2}

// store.dispatch({type: 'TEST2'}); // Everytime I dispatch, the reducer is called with my action
// console.log('getState', store.getState()); // Gives getState > {selectedNumbers: Array(2), counter:3}

export default store;
