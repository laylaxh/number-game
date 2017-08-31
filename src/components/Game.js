import React from 'react';
import PropTypes from 'prop-types';
import { randomNumberGenerator } from '../store/util.js';

// initial data:
//  Target
//  X numbers of randoms

class Game extends React.Component {
  
  static propTypes = {
    numberCount: PropTypes.number.isRequired,  // define what it is in here
  }

  constructor(props){
    super();
    // we are importing randomNumberGenerator from store/util.js 
    this.randomNumbers = Array.from({ 
      length: props.numberCount,
    }).map(() => randomNumberGenerator());
  }

  render() {
    return (
      <div>
        <div id="target">...</div>
        <div id="random-numbers">
          TESTING: {this.props.numberCount} --
          {this.randomNumbers}
        </div>
      </div>
    );
  }
}

// props.NumberCount (going to be coming from App.js)


export default Game;
