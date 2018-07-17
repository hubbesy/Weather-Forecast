import React, { Component } from 'react';
import './App.css';

export class DayHourly extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const dayId = e.target.id;
    this.props.onClick(dayId);
  }
  render(){
    return (
      <div id = "4" onClick = {this.handleClick}>
      <p id = "0" style= {{ float: 'left' }} > text </p>
      </div>
    );
  }
}
