import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { randomNumberGenerator } from '../store/util';
import RandomNumbersPanel from './RandomNumbersPanel';

class Game extends React.Component {
  static propTypes = {
    numberCount: PropTypes.number.isRequired,
    selectedNumbers: PropTypes.arrayOf(PropTypes.number).isRequired,
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
  gameStatus = () => {
    const sumSelected = this.props.selectedNumbers.reduce((acc, curr) => acc + this.randomNumbers[curr], 0);
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
  render() {
    const gameStatus = this.gameStatus(); // Every time I render I need to compute the game status
    return (
      <div id="game">
        <div id="target">{this.target}</div>
        <RandomNumbersPanel randomNumbers={this.randomNumbers} />
        {gameStatus}
      </div>
    );
  }
}

export default connect((state) => ({
  selectedNumbers: state.selectedNumbers
}))(Game);
