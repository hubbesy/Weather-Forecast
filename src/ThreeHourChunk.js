import React, { Component } from 'react';
import './App.css';
import { DateTime } from './DateTime';
import p01d from './img/01d.png';
import p01n from './img/01n.png';
import p02d from './img/02d.png';
import p02n from './img/02n.png';
import p03d from './img/03d.png';
import p03n from './img/03n.png';
import p04d from './img/04d.png';
import p04n from './img/04n.png';
import p09d from './img/09d.png';
import p09n from './img/09n.png';
import p10d from './img/10d.png';
import p10n from './img/10n.png';
import p11d from './img/11d.png';
import p11n from './img/11n.png';
import p13d from './img/13d.png';
import p13n from './img/13n.png';
import p50d from './img/50d.png';
import p50n from './img/50n.png';

var icons = {
  '01d': p01d,
  '01n': p01n,
  '02d': p02d,
  '02n': p02n,
  '03d': p03d,
  '03n': p03n,
  '04d': p04d,
  '04n': p04n,
  '09d': p09d,
  '09d': p09n,
  '10d': p10d,
  '10n': p10n,
  '11d': p11d,
  '11n': p11n,
  '13d': p13d,
  '13n': p13n,
  '50d': p50d,
  '50n': p50n
};

export class ThreeHourChunk extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const chunkId = e.target.id;
    this.props.onClick(chunkId);
  }

  render(){
    var pic = icons[this.props.icon];
    return(
      <div className= "threeHourChunk" onClick = {this.handleClick} id ={this.props.id}>
         <DateTime id ={this.props.id} name={this.props.name} />
         <img id ={this.props.id} src={pic} alt= {this.props.desc} img />
         <p id= {this.props.id}> {this.props.desc} </p>
         <p id ={this.props.id}> {this.props.minTemp}F / {this.props.maxTemp}F </p>
      </div>
    );
  }
}
