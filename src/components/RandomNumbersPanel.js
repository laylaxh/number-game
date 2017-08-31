import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import NumberTile from './NumberTile';

const RandomNumbersPanel = (props) => {
  const isNumberTileSelected = (numberIndex) => {
    return props.selectedNumbers.indexOf(numberIndex) >= 0;
  };
  return (
    <div id="random-numbers">
      {props.randomNumbers.map((number, index) => (
        <NumberTile
          selected={isNumberTileSelected(index)}
          onClick={props.selectNumber}
          number={number}
          canBeClicked={props.canPlay}
          id={index}
          key={index}
        />
      ))}
    </div>
  );
};

RandomNumbersPanel.propTypes = {
  randomNumbers: PropTypes.arrayOf(PropTypes.number).isRequired,
  selectNumber: PropTypes.func.isRequired,
  selectedNumbers: PropTypes.arrayOf(PropTypes.number).isRequired,
  canPlay: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectNumber: (numberIndex) => {
      dispatch({ type: 'SELECT_NUMBER', payload: { index: numberIndex } });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RandomNumbersPanel);
