import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Restaurant.css';

class Restaurant extends Component {

  render() {
    const stars = [...Array(Math.round(this.props.restaurant.user_rating.aggregate_rating))].map((star,index) => {
      return <FontAwesomeIcon key={index} icon="star" />
    });
    const price = `${this.props.restaurant.currency}${this.props.restaurant.average_cost_for_two}`;
    const name = this.props.restaurant.name;
    const location = this.props.restaurant.location.locality_verbose;
    const cuisines = this.props.restaurant.cuisines.split(',');

    return (
      <article className="Restaurant">
        <div className="Restaurant__image"></div>
        <div className="Restaurant__content">
          <div className="Restaurant__name semibold">
            {name}
          </div>
          <div className="Restaurant__address light">
            {location}
          </div>
          <div className="Restaurant__stars">
            {stars}
          </div>
          <div className="Restaurant__labels">
            <div className="Restaurant__price">
              <FontAwesomeIcon icon="user-friends" />
              &nbsp;
              {price}
            </div>
            {cuisines.map((cuisine) => 
              <div key={cuisine} className="Restaurant__cuisine">
                {cuisine}
              </div>
            )}
          </div>
        </div>
      </article>
    );
  }
}

export default Restaurant;