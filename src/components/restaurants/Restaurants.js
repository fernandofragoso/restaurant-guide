import React, { Component } from 'react';
import './Restaurants.css';
import Search from '../search/Search';
import Filters from './Filters';

class Restaurants extends Component {

  componentDidMount() {
    this.props.onLoadRestaurants(this.props.city)
  }

  componentDidUpdate(prevProps) {
    if (this.props.city !== prevProps.city) {
      console.log('componentDidUpdate');
      this.props.onLoadRestaurants(this.props.city);
    }
  }

  render() {
    return (
      <div className="Restaurants">
        <header className="Restaurant__header">
          <div className="Restaurant__logo">
            <img src='/logo-red.jpg' />
          </div>
          <div className="Restaurant__search">
            <Search small onSearch={this.props.onSearch} />
          </div>
        </header>
        {!this.props.isLoading &&
          <div className="Restaurant__content">
            <div className="Restaurant__filters">
              <Filters filters={this.props.filters} cuisines={this.props.cuisines} />
            </div>
            <div className="Restaurant__list">
              <span className="semibold">Restaurantes em {this.props.city.name}</span>
              <ul>
                {this.props.restaurants.map(({restaurant}) =>
                  <li key={restaurant.id}>{restaurant.name}</li>
                )}
              </ul>
            </div>
          </div>
        }
        {this.props.isLoading &&
          <div className="loading"></div>
        }
      </div>
    );
  }
}

export default Restaurants;