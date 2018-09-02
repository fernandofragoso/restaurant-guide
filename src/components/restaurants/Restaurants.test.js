import React from 'react';
import { shallow } from 'enzyme';
import Restaurants from './Restaurants';

const cityMock = {
  id: '1',
  name: 'name'
};

const restaurantsMock = [];

it('renders without crashing', () => {
  shallow(
    <Restaurants 
      city={cityMock} 
      restaurants={restaurantsMock} 
      isLoading={false} 
      onLoadRestaurants={() => {}}/>
  );
});