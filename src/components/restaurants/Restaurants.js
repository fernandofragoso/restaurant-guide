import React, { Component } from 'react';
import './Restaurants.css';

class Restaurants extends Component {
  render() {
    return (
      <div className="Restaurants">
        <h1>Restaurants @ {this.props.city.name}</h1>
      </div>
    );
  }
}

export default Restaurants;