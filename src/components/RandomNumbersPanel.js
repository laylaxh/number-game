import React from 'react';
import PropTypes from 'prop-types';

const RandomNumbersPanel = (props) => {
  return (
    <div id= "random-numbers">
      {props.randomNumbers.map((number, index) => 
        <div key={index}>{number}</div>)
      }
    </div>
  );
};

RandomNumbersPanel.propTypes = {
  randomNumbers: PropTypes.arrayOf(PropTypes.number).isRequired,
};


export default RandomNumbersPanel;
