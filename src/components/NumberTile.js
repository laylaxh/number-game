import React from 'react';
import PropTypes from 'prop-types';

class NumberTile extends React.Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    number: PropTypes.number.isRequired,
    selected: PropTypes.bool, // for isNumberTileSelected
    onClick: PropTypes.func.isRequired,
    canPlay: PropTypes.bool.isRequired,
  };

  // Will default propTypes w/o isRequired specified as isRequired
  static defaultProps = {
    selected: false,
  };

  handleClick = () => {
    // if you select it you can't select it again
    if(!this.props.selected && this.props.canBeClicked){
      this.props.onClick(this.props.id);
    }
  };

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
