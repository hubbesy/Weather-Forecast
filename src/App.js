import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Week } from './Week'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Boston, MA</h1>
          <h1 className="App-title">Weather Forecast</h1>
        </header>
        <h3 className="App-intro">
           5 Day, 3 Hour Weather Forecast
        </h3>
        <Week />
      </div>
    );
  }
}

export default App;
