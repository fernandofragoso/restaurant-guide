import React, { Component } from 'react';
import './Restaurants.css';
import Search from '../search/Search';
import Filters from './Filters';
import Restaurant from './Restaurant';

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
        <header className="Restaurants__header">
          <div className="Restaurants__logo">
            <img src='/logo-red.jpg' />
          </div>
          <div className="Restaurants__search">
            <Search onSearch={this.props.onSearch} />
          </div>
        </header>
        {!this.props.isLoading &&
          <div className="Restaurants__content">
            <aside className="Restaurants__filters">
              <Filters filters={this.props.filters} cuisines={this.props.cuisines} />
            </aside>
            <div className="Restaurants__list">
            <span className="semibold">Restaurantes em {this.props.city.name}</span>
              <div className="Restaurants__area">
                {this.props.restaurants.map(({restaurant}) =>
                  <Restaurant key={restaurant.id} restaurant={restaurant} />
                )}
              </div>
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