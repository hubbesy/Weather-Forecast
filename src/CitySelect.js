import React, { Component } from 'react';
import './App.css';

export class CitySelect extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const city = e.target.value;
    this.props.onChange(city);
  }

  render() {
    return (
      <div>
        <select id = "cities" onChange= {this.handleChange} >
          <option value="4930956"> Boston </option>
          <option value="4887398"> Chicago </option>
          <option value="4684888"> Dallas </option>
          <option value="5368361"> Los Angeles </option>
          <option value="4164138"> Miami </option>
          <option value="5125771"> New York City </option>
          <option value="5809844"> Seattle </option>
        </select>
      </div>
    )
  }
}
