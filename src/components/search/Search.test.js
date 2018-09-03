import React from 'react';
import { shallow } from 'enzyme';
import Search from './Search';

const cities = [
  {
    id: 1,
    name: "Test Name",
    state_name: "Test State"
  }
];

const onSearch = jest.fn();

it('renders without crashing', () => {
  shallow(<Search />);
});

it('shows input and button', () => {
  const wrapper = shallow(<Search />);
  expect(wrapper.find('.Search__input').length).toBe(1);
  expect(wrapper.find('.Search__button').length).toBe(1);
});

it('shows city options', () => {
  const wrapper = shallow(<Search />);
  wrapper.setState({ cities });
  expect(wrapper.find('.Search__option-item').length).toBe(1);
});

it('shows city not found message', () => {
  const wrapper = shallow(<Search />);
  wrapper.setState({ notFound: true });
  expect(wrapper.find('.Search__option-not-found').length).toBe(1);
});

it('calls onSearch on city selection', () => {
  const wrapper = shallow(<Search onSearch={onSearch}/>);
  wrapper.setState({ cities });
  wrapper.find('.Search__option-item').simulate('click');
  wrapper.find('.Search__button button').simulate('click');
  expect(onSearch).toHaveBeenCalledTimes(1);
  expect(wrapper.state().cities).toEqual([]);
});