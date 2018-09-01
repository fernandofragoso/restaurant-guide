import React from 'react';
import { shallow } from 'enzyme';
import Restaurants from './Restaurants';

const cityMock = {
  id: '1',
  name: 'name'
};

it('renders without crashing', () => {
  shallow(<Restaurants city={cityMock} />);
});