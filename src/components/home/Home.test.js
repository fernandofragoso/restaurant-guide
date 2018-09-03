import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home';
import Search from '../search/Search';

it('renders without crashing', () => {
  shallow(<Home />);
});

it('shows the search bar', () => {
  const wrapper = shallow(<Home />);
  expect(wrapper.find(Search).length).toBe(1);
});