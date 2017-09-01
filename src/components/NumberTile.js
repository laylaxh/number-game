import React from 'react';
import PropTypes from 'prop-types';

class NumberTile extends React.PureComponent {
  static propTypes = {
    id: PropTypes.number.isRequired,
    number: PropTypes.number.isRequired,
    selected: PropTypes.bool, // for isNumberTileSelected
    onClick: PropTypes.func.isRequired,
    canBeClicked: PropTypes.func.isRequired,
  };

  // Will default propTypes w/o isRequired specified as isRequired
  static defaultProps = {
    selected: false,
  };

  handleClick = () => {
    // if you select it you can't select it again
    if(!this.props.selected && this.props.canBeClicked()){
      this.props.onClick(this.props.id);
    }
  };

  componentWillUpdate(nextProps, nextState) {
    console.log(this.props, nextProps);
    console.log(this.state, nextState);
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
