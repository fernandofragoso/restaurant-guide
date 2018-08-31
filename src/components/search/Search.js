import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Search.css';

class Search extends Component {
  render() {
    return (
      <div className="Search">
        <div className="Search__area">
          <FontAwesomeIcon className="Search__icon" icon="map-marker-alt" />
          <input className="Search__input" placeholder='Digite sua cidade' type="text" />
        </div>
        <div className="Search__button">
          <button>Buscar</button>
        </div>
      </div>
    );
  }
}

export default Search;