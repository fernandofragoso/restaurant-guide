import React, { Component } from 'react';
import Home from './components/home/Home';
import Restaurants from './components/restaurants/Restaurants'
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      city: null,
      filters: {
        stars: [],
        costs: [],
        types: []
      }
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.city ? 
          <Restaurants city={this.state.city} filters={this.state.filters} /> :
          <Home />}
      </div>
    );
  }
}

export default App;
