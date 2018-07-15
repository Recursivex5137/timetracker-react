import * as React from 'react';
import './App.css';

import Description from './components/description';
import Header from './components/header';

import logo from './logo.svg';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React and TimeTracker</h1>
        </header>
        <Header name="Matthew" />
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Description countBy={3} />
      </div>
    );
  }
}

export default App;
