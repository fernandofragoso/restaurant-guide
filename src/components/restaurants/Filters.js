import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-regular-svg-icons'
import './Filters.css';

class Filter extends Component {

  handleChange(event, type) {
    const name = event.target.name;
    const isChecked = event.target.checked;
    let filters = this.props.filters;

    if (isChecked) {
      filters[type].push(name);
    } else {
      const index = filters[type].indexOf(name);
      filters[type].splice(index, 1);
    }

    this.props.onChangeFilters(filters, type==='cuisines');
  }

  render() {
    return (
      <div className="Filter"> 
        <span className="Filter__title">NOTA</span>
        <section className="Filter__section">
          <ul>
            {[...Array(5).keys()].map((item) => 
              <li key={item+1}>
                <input name={item+1} onChange={(e) => this.handleChange(e, 'stars')} type="checkbox"/>
                {[...Array(item+1)].map((star, index) => 
                  <FontAwesomeIcon key={index} className="Search__icon" icon={faStar} />
                )}
              </li>
            )}
          </ul>
        </section>
        <span className="Filter__title">CUSTO PARA DUAS PESSOAS</span>
        <section className="Filter__section">
          <ul>
            <li><input name="1" onChange={(e) => this.handleChange(e, 'costs')} type="checkbox"/> Até R$50</li>
            <li><input name="2" onChange={(e) => this.handleChange(e, 'costs')} type="checkbox"/> De R$50 a R$80</li>
            <li><input name="3" onChange={(e) => this.handleChange(e, 'costs')} type="checkbox"/> De R$80 a R$110</li>
            <li><input name="4" onChange={(e) => this.handleChange(e, 'costs')} type="checkbox"/> Acima de R$110</li>
          </ul>
        </section>
        <span className="Filter__title">TIPO DE COZINHA</span>
        <section className="Filter__section">
          <ul>
            {this.props.cuisines.map(({cuisine}) => 
              <li key={cuisine.cuisine_id}>
                <input name={cuisine.cuisine_id} onChange={(e) => this.handleChange(e, 'cuisines')} type="checkbox"/> {cuisine.cuisine_name}
              </li>
            )}
          </ul>
        </section>
      </div>
    );
  }
}

export default Filter;