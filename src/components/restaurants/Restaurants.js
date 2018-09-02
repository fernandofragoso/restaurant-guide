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

    // let items = [];
    let items = this.props.restaurants.map(({restaurant}, index) =>
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
              <Filters filters={this.props.filters} cuisines={this.props.cuisines} />
            </aside>
            <div className="Restaurants__list">
              <span className="semibold">Restaurantes em {this.props.city.name}</span>
              <InfiniteScroll
                initialLoad={true}
                pageStart={0}
                loadMore={this.props.onLoadRestaurants}
                hasMore={true}
                loader={<span key="1">Carregando...</span>}>
                <div className="Restaurants__area">
                  {items}
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