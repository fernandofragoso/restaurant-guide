import React from 'react';
import { shallow } from 'enzyme';
import Filters from './Filters';

const filtersMock = {
  stars: [],
  costs: [],
  cuisines: []
};

const onChangeFilters = jest.fn();

const cuisinesMock = [
  {
    "cuisine": {
      "cuisine_id": 1,
      "cuisine_name": "Cuisine 1"
    }
  },
  {
    "cuisine": {
      "cuisine_id": 2,
      "cuisine_name": "Cuisine 2"
    }
  }
];

it('renders without crashing', () => {
  shallow(<Filters filters={filtersMock} cuisines={cuisinesMock} />);
});

it('renders all the elements', () => {
  const wrapper = shallow(<Filters filters={filtersMock} cuisines={cuisinesMock} />);
  expect(wrapper.find('.Filter__section').length).toBe(3);
});