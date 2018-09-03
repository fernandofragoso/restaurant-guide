import React from 'react';
import { shallow } from 'enzyme';
import Restaurant from './Restaurant';

const restaurantMock = {
  id: "6713772",
  name: "Sainte Marie Gastronomia",
  location: {
    locality_verbose: "Vila Sônia, São Paulo"
  },
  cuisines: "Lebanese, Arabian",
  average_cost_for_two: 120,
  currency: "R$",
  user_rating: {
    aggregate_rating: "4.2",
  }
};

it('renders without crashing', () => {
  shallow(<Restaurant restaurant={restaurantMock} />);
});