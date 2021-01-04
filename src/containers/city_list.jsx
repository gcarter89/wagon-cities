import React, { Component } from 'react';
import City from "./city";

class CityList extends Component {
  render() {
    return (
      <div className="city-list cities">
        {this.props.cities.map(city => <City city={city} key={city.name} selectCity={this.props.selectCity} />)}
      </div>
    );
  }
}

export default CityList;
