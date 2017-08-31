import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { randomNumberGenerator } from '../store/util';
import RandomNumbersPanel from './RandomNumbersPanel';
import { decrementTime } from '../store/actions';

class Game extends React.Component {
  static propTypes = {
    numberCount: PropTypes.number.isRequired,
    selectedNumbers: PropTypes.arrayOf(PropTypes.number).isRequired,
    decrementTime: PropTypes.func.isRequired,
    remainingSeconds: PropTypes.number.isRequired,
  };
  constructor(props) {
    super();
    this.randomNumbers = Array.from({
      length: props.numberCount,
    }).map(() => randomNumberGenerator());
    this.target = this.randomNumbers
      .slice(0, props.numberCount - 2)
      .reduce((acc, curr) => acc + curr);
  }

  // Lifecycle methods, there are 7 - steps like constructor runs first, renders, mounts, componentDidMount, etc. 
  // Used to customize when things happen 
  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.props.decrementTime();
    }, 1000);
  }

  // Before React removes from DOM
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  gameStatus = () => {
    const sumSelected = this.props.selectedNumbers.reduce(
      (acc, curr) => acc + this.randomNumbers[curr], 
      0,
    );
    if (this.props.remainingSeconds <= 0) {
      return 'lost';
    }
    if (sumSelected < this.target) {
      return 'playing';
    }
    if (sumSelected === this.target) {
      return 'won';
    }
    if (sumSelected > this.target) {
      return 'lost';
    }
  };

  targetPanelColor(gameStatus){
    if(gameStatus === 'playing'){
      return;
    }
    return gameStatus === 'won'? 'green' : 'red';
  }

 render() {
    const gameStatus = this.gameStatus();
    return (
      <div id="game">
        <div>
          {this.props.remainingSeconds}
        </div>
        <div
          id="target"
          style={{
            backgroundColor: this.targetPanelColor(gameStatus),
          }}
        >
          {this.target}
        </div>
        <RandomNumbersPanel
          canPlay={gameStatus === 'playing'}
          randomNumbers={this.randomNumbers}
        />
      </div>
    );
  }
}

export default connect(
  (state) => ({
    selectedNumbers: state.selectedNumbers,
    remainingSeconds: state.remainingSeconds,
  }),
  { decrementTime },
)(Game);
