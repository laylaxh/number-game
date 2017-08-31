import React from 'react';
import PropTypes from 'prop-types';
import NumberTile from './NumberTile';
import store from '../store';

const RandomNumbersPanel = (props) => {
  const isNumberTileSelected = (numberIndex) => {
    return store.getState().selectedNumbers.indexOf(numberIndex) >= 0;
  };

  return (
    <div id= "random-numbers">
      {props.randomNumbers.map((number, index) => (
        <NumberTile 
          selected={isNumberTileSelected(index)}
          number={number} 
          key={index} 
        />
      ))}
    </div>
  );
};

RandomNumbersPanel.propTypes = {
  randomNumbers: PropTypes.arrayOf(PropTypes.number).isRequired,
};


export default RandomNumbersPanel;
