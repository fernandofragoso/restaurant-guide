import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Restaurants from './components/restaurants/Restaurants';
import Home from './components/home/Home';

it('renders without crashing', () => {
  shallow(<App />);
});

it('renders the landing page', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(Home).length).toBe(1);
});