import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {CitySelect} from './CitySelect';
import { WeatherData } from './WeatherData';

var cities = {
  "4930956": "Boston",
  "4887398": "Chicago",
  "4684888": "Dallas",
  "5368361": "Los Angeles",
  "4164138": "Miami",
  "5125771": "New York City",
  "5809844": "Seattle"
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: ""
    };
    this.changeCity= this.changeCity.bind(this);
  }

  changeCity(selectedCity) {
    this.setState({
      city: selectedCity
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{cities[this.state.city]}</h1>
          <h1 className="App-title">Weather Forecast</h1>
        </header>
        <h3 className="App-intro">
           5 Day, 3 Hour Weather Forecast
        </h3>
        <CitySelect onChange={this.changeCity} />
        <WeatherData city={this.state.city} />
      </div>
    );
  }
}

export default App;
