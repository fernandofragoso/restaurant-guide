import React, { Component } from 'react';
import Home from './components/home/Home';
import Restaurants from './components/restaurants/Restaurants';
import { getCuisinesByCity, getRestaurantsByCity } from './utils/api';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMapMarkerAlt, faStar, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import './App.css';

library.add(faMapMarkerAlt, faStar, faUserFriends);

class App extends Component {

  constructor() {
    super();
    this.state = {
      city: null,
      cuisines: [],
      filters: {
        stars: [],
        costs: [],
        cuisines: []
      },
      restaurants: [],
      restaurantsCurrent: 0,
      restaurantsTotal: 0,
      hasMore: true,
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
            hasMore={this.state.hasMore}
            onSearch={(city) => this._search(city)}
            onLoadCuisines={() => this._loadCuisines()}
            onLoadRestaurants={() => this._loadRestaurants()}
            onChangeFilters={(filters, reload) => this._changeFilters(filters, reload)} /> :
          <Home 
            isLoading={this.state.isLoading} 
            onSearch={(city) => this._search(city)} />}
      </div>
    );
  }

  _search(city) {
    this.setState({
      city,
      restaurantsTotal: 0,
      restaurantsCurrent: 0,
      hasMore: true
    });
  }

  async _loadCuisines() {
    this._setLoading(true);
    this._clearRestaurants();
    const { data: { cuisines } } = await getCuisinesByCity(this.state.city.id);
    this.setState({
      cuisines,
      isLoading: false
    });
  }

  async _loadRestaurants() {
    const start = this.state.restaurantsCurrent;
    const cuisinesFilter = (this.state.filters.cuisines.length!==0) ? this.state.filters.cuisines : null;
    const { 
      data: { 
        restaurants, 
        results_found, 
        results_start, 
        results_shown 
      } 
    } = await getRestaurantsByCity(start, this.state.city.id, cuisinesFilter);
    this.setState((prevState) => {

      let hasMore = true;
      if (results_shown === 0){
        hasMore = false;
      } else if (results_start + results_shown < 100 - results_shown && results_start + results_shown < results_found) {
        hasMore = true;
      }

      return {
        restaurantsTotal: results_found,
        restaurantsCurrent: results_start + results_shown, 
        hasMore,
        restaurants: [...prevState.restaurants, ...restaurants]
      };
    });
  }

  _changeFilters(filters, reload) {
    if (reload) {
      this.setState({
        filters,
        restaurantsTotal: 0,
        restaurantsCurrent: 0,
        restaurants: [],
        hasMore: true
      });
    } else {
      this.setState({
        filters
      });
    }
    
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
