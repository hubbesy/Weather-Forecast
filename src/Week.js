import React, { Component } from 'react';
import './App.css';
import { myWeek } from './Data.js';
import { Day } from './Day';

export class Week extends Component {
  render(){
    const myweek = myWeek;
    const days = myweek.map(day => {
      return (
        <Day name={day.name} photo = {day.photo} desc={day.desc} min={day.minTemp} max = {day.maxTemp} />
      )
    });

    return <div> {days} </div>;
  }
}
