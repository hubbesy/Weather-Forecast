import React, { Component } from 'react';
import './App.css';

var months ={
  '01': 'January',
  '02': 'February',
  '03': 'March',
  '04': 'April',
  '05': 'May',
  '06': 'June',
  '07': 'July',
  '08': 'August',
  '09': 'September',
  '10': 'October',
  '11': 'November',
  '12': 'December'
}

export class DateTime extends Component {

  render(){
    var month = months[this.props.name.substring(5,7)];
    var day = this.props.name.substring(8,10);
    var hour = this.props.name.substring(11,13);
    var h = parseInt(hour, 10);
    var minute = this.props.name.substring(14,16);
    let amPm;
    if (h === 0) {
      hour = '12'
      amPm = 'AM'
    } else if (h < 12) {
      amPm = 'AM';
    } else if (h === 12) {
      amPm = 'PM'
    } else {
      var temp = h - 12;
      hour = ''+temp;
      amPm = 'PM';
    }
    return(
      <h2 id= {this.props.id}> {month} {day}  {hour}:{minute}{amPm} </h2>
    );
  }
}
