import React, { Component } from 'react';

class City extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.city !== this.props.city;
  }
  handleClick = () => {
    if (this.props.selectCity) {
      this.props.selectCity(this.props.city);
    }
  }
  render () {
    return (
      <div className="city list-group-item" onClick={this.handleClick}>
        <h3>{this.props.city.name}</h3>
      </div>);
  }
}

export default City;
