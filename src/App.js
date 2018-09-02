import React, { Component } from 'react';
import Home from './components/home/Home';
import Restaurants from './components/restaurants/Restaurants';
import { getCuisinesByCity, getRestaurantsByCity } from './utils/api';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMapMarkerAlt, faStar, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import './App.css';

library.add(faMapMarkerAlt);
library.add(faStar);
library.add(faUserFriends);

class App extends Component {

  constructor() {
    super();
    this.state = {
      city: null,
      filters: {
        stars: [],
        costs: [],
        cuisines: []
      },
      restaurants: [],
      cuisines: [],
      isLoading: false
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.city ? 
          <Restaurants 
            isLoading={this.state.isLoading}
            city={this.state.city} 
            restaurants={this.state.restaurants}
            filters={this.state.filters}
            cuisines={this.state.cuisines}
            onSearch={(city) => this._onSearch(city)}
            onLoadRestaurants={(city) => this._onLoadRestaurants(city)} /> :
          <Home 
            isLoading={this.state.isLoading} 
            onSearch={(city) => this._onSearch(city)} />}
      </div>
    );
  }

  async _onSearch(city) {
    this.setState({
      city,
    });
  }

  async _onLoadRestaurants(city) {
    this._setLoading(true);
    this._clearRestaurants();
    const { data: { cuisines } } = await getCuisinesByCity(city.id);
    const { data: { restaurants } } = await getRestaurantsByCity(city.id);
    this.setState({
      cuisines,
      restaurants,
      isLoading: false
    });
  }

  _setLoading(bool) {
    this.setState({
      isLoading: bool
    });
  }

  _clearRestaurants() {
    this.setState({
      restaurants: [],
      cuisines: []
    });
  }
}

export default App;
