import React from 'react';
import { shallow } from 'enzyme';
import RecipeListContainer from './RecipeListContainer';

describe('RecipeListContainer', () => {
  const container = shallow(<RecipeListContainer/>);

  it('renders', () => {
    expect(container).toMatchSnapshot();
  });

  it('contains a RecipeList component', () => {
    expect(container.find('RecipeList').exists()).toBe(true);
  });
});