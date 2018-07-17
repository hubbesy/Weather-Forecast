import React, { Component } from 'react';
import './App.css';
import sun from './img/sun.png';
import cloud from './img/cloud.png';
import mostly_cloud from './img/mostly_cloud.png';
import snow from './img/snow.png';
import rain from './img/rain.png';

export class Day extends Component {
  
  render(){
    let pic;
    if (this.props.desc === 'Sun') {
      pic = sun;
    }
    else if (this.props.desc === "Snow") {
      pic = snow;
    }
    else if (this.props.desc === "Cloud") {
      pic = cloud;
    }
    else if (this.props.desc === "Mostly Cloud") {
      pic = mostly_cloud;
    }
    else if (this.props.desc === "Rain") {
      pic = rain;
    }
    return(
      <div className= "day">
         <h2> {this.props.name} </h2>
         <img src={pic} alt= {this.props.desc} height="100px" width="100px" img />
         <p> {this.props.min} / {this.props.max}</p>
      </div>
    );
  }
}
