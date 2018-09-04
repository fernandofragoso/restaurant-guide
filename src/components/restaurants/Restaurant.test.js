import React from 'react';
import { shallow } from 'enzyme';
import Restaurant from './Restaurant';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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

it('render all the elements', () => {
  const wrapper = shallow(<Restaurant restaurant={restaurantMock} />);
  expect(wrapper.find('.Restaurant__name').length).toBe(1);
  expect(wrapper.find('.Restaurant__address').length).toBe(1);
  expect(wrapper.find('.Restaurant__stars').find(FontAwesomeIcon).length).toBe(4);
  expect(wrapper.find('.Restaurant__cuisine').length).toBe(2);
});