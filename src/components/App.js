import React from 'react';
import Game from './Game';

class App extends React.Component {
  constructor(){
    super();
  };

  render() {
    return (
      <div>
        <Game numberCount={5} />
        <Game numberCount={7} />
      </div>
    );
  }
}

export default App;
