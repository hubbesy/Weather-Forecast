import React, { Component } from 'react';
import './App.css';
import { WeatherData } from './WeatherData';



export class Week extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayingHourly: false,
      dayIndexHourly: -1
    };
    this.displayHourly = this.displayHourly.bind(this);
  }

  displayHourly(chunkId) {
    this.setState({
      displayingHourly: !(this.state.displayingHourly),
      dayIndexHourly: chunkId
    });
  }

  render(){
    return (
      <div>
        <WeatherData onClick={this.displayHourly} />
      </div>
    );
  }
}
