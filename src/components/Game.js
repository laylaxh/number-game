import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { randomNumberGenerator } from '../store/util';
import RandomNumbersPanel from './RandomNumbersPanel';
import { decrementTime } from '../store/actions';
import shuffle from 'lodash.shuffle'; // npm i lodash.shuffle first

class Game extends React.Component {
  static propTypes = {
    numberCount: PropTypes.number.isRequired,
    selectedNumbers: PropTypes.arrayOf(PropTypes.number).isRequired,
    decrementTime: PropTypes.func.isRequired,
    remainingSeconds: PropTypes.number.isRequired,
    resetGame: PropTypes.func.isRequired,
    updateScore: PropTypes.func.isRequired,
  };
  constructor(props) {
    super();
    this.randomNumbers = Array.from({
      length: props.numberCount,
    }).map(() => randomNumberGenerator());
    this.target = this.randomNumbers
      .slice(0, props.numberCount - 2)
      .reduce((acc, curr) => acc + curr);
    this.randomNumbers = shuffle(this.randomNumbers);
  }

  // Lifecycle methods, there are 7 - steps like constructor runs first, renders, mounts, componentDidMount, etc. 
  // Used to customize when things happen 
  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.props.decrementTime();
      if(this.props.remainingSeconds === 0){
        clearInterval(this.intervalId);  // completely remove the timer
      }
    }, 1000);
  }

  // Done updating, if game status is 1, update the score
  componentDidUpdate() {
    if (this.gameStatus() === 'won') {
      this.props.updateScore(this.props.remainingSeconds);
    }
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
    clearInterval(this.intervalId);
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
    return gameStatus === 'won'? 'lightgreen' : 'indianred';
  }

  canPlay = () => {
    return this.gameStatus() === 'playing';
  };

 render() {
    const gameStatus = this.gameStatus();
    return (
      <div id="game">
        <div id="time">{this.props.remainingSeconds}</div>
        <div
          id="target"
          style={{
            backgroundColor: this.targetPanelColor(gameStatus),
          }}
        >
          {this.target}
        </div>
        <RandomNumbersPanel
          canPlay={this.canPlay}
          randomNumbers={this.randomNumbers}
        />

        {gameStatus !== 'playing' && (
          <button onClick={this.props.resetGame}>Play Again</button>
        )}
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
