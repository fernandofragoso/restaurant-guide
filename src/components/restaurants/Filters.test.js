import React from 'react';
import { shallow } from 'enzyme';
import Filters from './Filters';

const filtersMock = {
  stars: [],
  costs: [],
  cuisines: []
};

const cuisinesMock = [];

it('renders without crashing', () => {
  shallow(<Filters filters={filtersMock} cuisines={cuisinesMock} />);
});