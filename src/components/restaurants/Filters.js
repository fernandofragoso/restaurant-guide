import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-regular-svg-icons'
import './Filters.css';

class Filter extends Component {

  render() {
    return (
      <div className="Filter"> 
        <span className="Filter__title">NOTA</span>
        <section className="Filter__section">
          <ul>
            {[...Array(5).keys()].map((item) => 
              <li key={item+1}>
                <input type="checkbox"/>
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
            <li><input type="checkbox"/> Até R$50</li>
            <li><input type="checkbox"/> De R$50 a R$80</li>
            <li><input type="checkbox"/> De R$80 a R$110</li>
            <li><input type="checkbox"/> Acima de R$110</li>
          </ul>
        </section>
        <span className="Filter__title">TIPO DE COZINHA</span>
        <section className="Filter__section">
          <ul>
            {this.props.cuisines.map(({cuisine}) => 
              <li key={cuisine.cuisine_id}>
                <input type="checkbox"/> {cuisine.cuisine_name}
              </li>
            )}
          </ul>
        </section>
      </div>
    );
  }
}

export default Filter;