import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Day } from './Day'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">sydney hubbell</h1>
        </header>
        <p className="App-intro">
           This is a test website to learn ReactJS
        </p>
        <Day />
      </div>
    );
  }
}

export default App;
