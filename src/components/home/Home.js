import React, { Component } from 'react';
import Search from '../search/Search';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="Home__logo">
          <img src='/logo-white.jpg' />
        </div>
        <div className="Home__center">
          <div className="Home__header">
            <h2>Descubra os melhores restaurantes na sua cidade</h2>
          </div>
          <Search />
        </div>
      </div>
    );
  }
}

export default Home;