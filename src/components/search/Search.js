import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Search.css';
import { searchCities } from '../../utils/api';

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
      <div className={`Search ${(this.props.small) ? 'Search--small' : ''}`}>
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
    this.setState({
      selected: null,
      cities: [],
      value: ''
    });
  }

  _searchCities(term) {
    clearTimeout(this.timeout);
    if (term !== "") {
      this.timeout = setTimeout(() => {
        searchCities(term).then(response => {
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