import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Search.css';
import axios from 'axios';

const URL = 'https://developers.zomato.com/api/v2.1';
const API_KEY = process.env.REACT_APP_ZOMATO_API_KEY;

class Search extends Component {

  timeout = null;

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      cities: [],
      selected: null
    };
  }

  render() {
    return (
      <div className="Search">
        <section className="Search__area">
          <div className="Search__bar">
            <FontAwesomeIcon className="Search__icon" icon="map-marker-alt" />
            <input 
              className="Search__input" 
              placeholder='Digite a sua cidade' 
              value={this.state.value}
              onChange={(event) => this._handleChange(event)}
              type="text" />
          </div>
          <div className="Search__options">
            {this.state.cities.map((city) => 
              <div className="Search__option-item" onClick={() => this._handleSelect(city)} key={city.id}>
                <div className="city">{city.name}</div>
                <div className="state">{city.state_name || city.country_name}</div>
              </div>
            )}
          </div>
        </section>
        <div className="Search__button">
          <button onClick={() => this._handleSubmit()} disabled={!this.state.selected}>Buscar</button>
        </div>
      </div>
    );
  }

  _handleChange(event) {
    this.setState({value: event.target.value});
    this._searchCities(event.target.value);
  }

  _handleSelect(city) {
    this.setState({
      selected: city,
      cities: [],
      value: city.name
    });
  }

  _handleSubmit() {
    this.props.onSearch(this.state.selected);
  }

  _searchCities(term) {
    clearTimeout(this.timeout);
    if (term !== "") {
      this.timeout = setTimeout(() => {
        let headers = { "user-key": API_KEY };
        axios.get(`${URL}/cities?q=${term}`, { headers }).then(response => {
          this.setState({
            cities: response.data.location_suggestions,
            selected: null
          });
        });
      }, 600);
    } else {
      this.setState({
        cities: [],
        selected: null
      });
    }
  }
}

export default Search;