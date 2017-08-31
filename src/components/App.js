import React from 'react';
import Game from './Game';
import store from '../store';
import PropTypes from 'prop-types';

class App extends React.Component {
  constructor(){
    super();
  }

  // Return values of our context
  getChildContext(){
    return { store: storeConfig() }; // same as { store: store};
  }

  // Design our context - just like prop types but for contexts
  static childContextTypes = {
    store: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div>
        <Game numberCount={5} />
      </div>
    );
  }
}

export default App;
