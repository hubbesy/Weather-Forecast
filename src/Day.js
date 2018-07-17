import React, { Component } from 'react';
import './App.css';
import sun from './sun.jpg';

export class Day extends Component {
  render(){
    return(
      <div className= "day">
         <h2> Monday </h2>
         <img src={sun} alt= "Sunny" height="100px" width="100px" img />
         <p> 78 F </p>
      </div>
    );
  }
}
