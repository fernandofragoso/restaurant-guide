import React, { Component } from 'react';
import Home from './components/home/Home';
import Restaurants from './components/restaurants/Restaurants'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faMapMarkerAlt, faStar, faUserFriends } from '@fortawesome/free-solid-svg-icons'
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
        types: []
      },
      restaurants: []
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.city ? 
          <Restaurants 
            city={this.state.city} 
            restaurants={this.state.restaurants}
            filters={this.state.filters} /> :
          <Home />}
      </div>
    );
  }
}

export default App;
