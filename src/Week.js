import React, { Component } from 'react';
import './App.css';
import { WeatherData } from './WeatherData';



export class Week extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dayIndexHourly: -1
    };
    this.changeIndex = this.changeIndex.bind(this);
  }

  changeIndex(chunkId) {
    this.setState({
      dayIndexHourly: chunkId
    });
  }

  render(){
    return (
      <div>
        <WeatherData city = {this.props.city} onClick={this.changeIndex} />
      </div>
    );
  }
}
