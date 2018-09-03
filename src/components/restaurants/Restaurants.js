import React, { Component } from 'react';
import './Restaurants.css';
import Search from '../search/Search';
import Filters from './Filters';
import Restaurant from './Restaurant';
import InfiniteScroll from 'react-infinite-scroller'

class Restaurants extends Component {

  componentDidMount() {
    this.props.onLoadCuisines();
  }

  componentDidUpdate(prevProps) {
    if (this.props.city !== prevProps.city) {
      this.props.onLoadCuisines();
    }
  }

  render() {
    const filters = this.props.filters;
    let restaurants = this.props.restaurants.filter(({restaurant}) => {
      if (filters.stars.length !== 0) {
        const restaurantRating = Math.round(restaurant.user_rating.aggregate_rating);
        return filters.stars.some((star) => {
          return (restaurantRating === parseInt(star, 10)); 
        });
      }
      return true;
    }).filter(({restaurant}) => {
      if (filters.costs.length !== 0) {
        const restaurantCost = restaurant.average_cost_for_two;
        return filters.costs.some((cost) => {
          switch(parseInt(cost, 10)) {
            case 1:
              return (restaurantCost <= 50);
            case 2:
              return (restaurantCost > 50 && restaurantCost <= 80);
            case 3:
              return (restaurantCost > 80 && restaurantCost <= 110);
            case 4:
              return (restaurantCost > 110);
            default:
              return true;
          }
        });
      }
      return true;
    }).map(({restaurant}, index) =>
      <Restaurant key={index} restaurant={restaurant} />
    );

    return (
      <div className="Restaurants">
        <header className="Restaurants__header">
          <div className="Restaurants__logo">
            <img src='/logo-red.jpg' alt='uaifood logo' />
          </div>
          <div className="Restaurants__search">
            <Search onSearch={this.props.onSearch} />
          </div>
        </header>
        {!this.props.isLoading &&
          <div className="Restaurants__content">
            <aside className="Restaurants__filters">
              <Filters 
                filters={this.props.filters} 
                onChangeFilters={this.props.onChangeFilters} 
                cuisines={this.props.cuisines} />
            </aside>
            <div className="Restaurants__list">
              <span className="semibold">Restaurantes em {this.props.city.name}</span>
              <InfiniteScroll
                initialLoad={true}
                pageStart={0}
                loadMore={this.props.onLoadRestaurants}
                hasMore={this.props.hasMore}
                threshold={100}
                loader={<span key="1">Carregando...</span>}>
                <div className="Restaurants__area">
                  {restaurants}
                </div>
              </InfiniteScroll>
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