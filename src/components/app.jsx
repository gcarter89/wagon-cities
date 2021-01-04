import React, { Component } from 'react';
import CityList from '../containers/city_list';


// TODO: remove this and use Redux

const cities = [
  { name: 'Paris', address: '16 Villa Gaudelet, 75011 Paris', slug: 'paris' },
  { name: 'London', address: '14-22 Elder St, London E1 6BT', slug: 'london' },
  { name: 'Berlin', address: 'Rudi-Dutschke-Straße 26, 10969 Berlin', slug: 'berlin' },
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: cities,
      SelectedCity: cities[0]
    };
  }

  selectCity = (city) => {
    this.setState({
      SelectedCity: city
    });
  };

  render() {
    const url = `https://kitt.lewagon.com/placeholder/cities/${this.state.SelectedCity.slug}`;
    return (
      <div className="app">
        <CityList cities={this.state.cities} selectCity={this.selectCity} />
        <div className="active-city">
          <h3>{this.state.SelectedCity.name}</h3>
          <p>{this.state.SelectedCity.address}</p>
          <img src={url} alt="" width="100%" />
        </div>
      </div>
    );
  }
}

// const App = () => {
//   return (
//     <div className="app">
//       <CityList cities={cities} />
//       <ActiveCity />
//     </div>
//   );
// };

export default App;
