import React, { Component } from 'react';
import './App.css';
import sun from './sun.jpg';
import { myWeek } from './Data.js';
import { Day } from './Day';

export class Week extends Component {
  render(){
    const myweek = ["day1", "day2", "day 3", "day 4", "day 5"];
    const days = myweek.map(day => {
      return (
        <Day />
      )
    });

    return <div> {days} </div>;
  }
}
