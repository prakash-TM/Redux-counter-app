import React, { Component } from 'react';

import EnhancedCounter from './Containers/EnhancedCounter';

class App extends Component {
  render() {
    return (
      <div>
        <header >
          <h1>Simple Counter</h1>
        </header>
        <EnhancedCounter />
      </div>
    );
  }
}

export default App;
