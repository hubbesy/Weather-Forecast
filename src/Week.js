import React, { Component } from 'react';
import './App.css';
import { myWeek } from './Data.js';
import { Day } from './Day';
//import { DayHourly } from './DayHourly';

export class Week extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayingHourly: false,
      dayIndexHourly: -1
    };
    this.displayHourly = this.displayHourly.bind(this);
  }

  displayHourly(dayId) {
    this.setState({
      displayingHourly: !(this.state.displayingHourly),
      dayIndexHourly: dayId
    });
  }

  render(){
    const myweek = myWeek;
    const days = myweek.map((day, i) => {
      return (
        <div>
        <Day
          onClick={this.displayHourly}
          name={day.name}
          photo = {day.photo}
          desc={day.desc}
          min={day.minTemp}
          max = {day.maxTemp}
          id={i}
        />
        </div>
      )
    });

    return (
      <div>
        <div> {days} </div>
        <p> State: {(this.state.displayingHourly).toString()} {this.state.dayIndexHourly} </p>
      </div>
    );
  }
}
