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
            <span class="extrabold">Descubra os melhores restaurantes na sua cidade</span>
          </div>
          <Search onSearch={this.props.onSearch} />
        </div>
      </div>
    );
  }
}

export default Home;