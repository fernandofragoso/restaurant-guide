import React from 'react';
import { shallow } from 'enzyme';
import Restaurants from './Restaurants';
import Search from '../search/Search';
import Filters from './Filters';
import Restaurant from './Restaurant';

const cityMock = {
  id: '1',
  name: 'name'
};

const restaurantsMock = [
  {
    restaurant: {
      id: "1",
      name: "Name Test 1",
      location: {
        locality_verbose: "Location Test 1"
      },
      cuisines: "Cuisine 1, Cuisine 2",
      average_cost_for_two: 120,
      currency: "R$",
      user_rating: {
        aggregate_rating: "4.2",
      }
    }
  },
  {
    restaurant: {
      id: "2",
      name: "Name Test 2",
      location: {
        locality_verbose: "Location Test 2"
      },
      cuisines: "Cuisine 1, Cuisine 2",
      average_cost_for_two: 30,
      currency: "R$",
      user_rating: {
        aggregate_rating: "2.9",
      }
    }
  }

];

const filtersMock = {
  stars: [],
  cuisines: [],
  costs: []
};

it('renders without crashing', () => {
  shallow(
    <Restaurants 
      city={cityMock} 
      restaurants={restaurantsMock}
      filters={filtersMock}
      isLoading={false} 
      onLoadCuisines={() => {}}
      onLoadRestaurants={() => {}}/>
  );
});

it('renders all the components', () => {
  const wrapper = shallow(
    <Restaurants 
      city={cityMock} 
      restaurants={restaurantsMock} 
      filters={filtersMock}
      isLoading={false} 
      onLoadCuisines={() => {}}
      onLoadRestaurants={() => {}}/>
  );

  expect(wrapper.find(Search).length).toBe(1);
  expect(wrapper.find(Filters).length).toBe(1);
  expect(wrapper.find(Restaurant).length).toBe(2);
});

it('shows loading', () => {
  const wrapper = shallow(
    <Restaurants 
      city={cityMock} 
      restaurants={restaurantsMock} 
      filters={filtersMock}
      isLoading={true} 
      onLoadCuisines={() => {}}
      onLoadRestaurants={() => {}}/>
  );

  expect(wrapper.find('.loading').length).toBe(1);
});

it('filters the restaurants by cost', () => {
  const filters = {
    costs: [1],
    stars: [],
    cuisines: []
  }

  const wrapper = shallow(
    <Restaurants 
      city={cityMock} 
      restaurants={restaurantsMock} 
      filters={filters}
      isLoading={false} 
      onLoadCuisines={() => {}}
      onLoadRestaurants={() => {}}/>
  );

  expect(wrapper.find(Restaurant).length).toBe(1);
});

it('filters the restaurants by cost and stars', () => {
  const filters = {
    costs: [1],
    stars: [1],
    cuisines: []
  }

  const wrapper = shallow(
    <Restaurants 
      city={cityMock} 
      restaurants={restaurantsMock} 
      filters={filters}
      isLoading={false} 
      onLoadCuisines={() => {}}
      onLoadRestaurants={() => {}}/>
  );

  expect(wrapper.find(Restaurant).length).toBe(0);
});