import React from 'react';
import PropTypes from 'prop-types';
import { randomNumberGenerator } from '../store/util.js';
import RandomNumbersPanel from './RandomNumbersPanel';

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

    this.target = this.randomNumbers
      .slice(0, props.numberCount - 2)
      .reduce((acc, curr) => acc + curr);
  }

  render() {
    return (
      <div>
        <div id="target">{this.target}</div>
        <RandomNumbersPanel randomNumbers={this.randomNumbers}/>
      </div>
    );
  }
}

// props.NumberCount (going to be coming from App.js)


export default Game;
