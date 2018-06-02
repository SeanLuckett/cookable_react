import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  const app = shallow(<App/>);

  it('renders', () => {
    expect(app).toMatchSnapshot();
  });

  it('contains a connected RecipeListContainer', () => {
    expect(app.find('Connect(RecipeListContainer)').exists()).toBe(true);
  });
});