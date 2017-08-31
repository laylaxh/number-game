import React from 'react';
import PropTypes from 'prop-types';

class NumberTile extends React.Component {
  static propTypes = {
    number: PropTypes.number.isRequired,
    selected: PropTypes.bool, // for isNumberTileSelected
  };

  // Will default propTypes w/o isRequired specified as isRequired
  static defaultProps = {
    selected: false,
  };

  handleClick = () => {
    console.log(props.number);
  }

  render() {
    return (
      <div className="number" 
        onClick={this.handleClick}
        style={ {opacity: this.props.selected ? 0.3 : 1} } // React way: Give style property an object, not string
      >
        {this.props.number}
      </div>
    );
  }
}

export default NumberTile;
