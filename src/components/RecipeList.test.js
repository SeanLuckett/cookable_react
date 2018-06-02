import React from 'react';
import { shallow } from 'enzyme';
import RecipeList from './RecipeList';

describe('RecipeList', () => {
  const recipeList = shallow(<RecipeList/>);

  it('renders', () => {
    expect(recipeList).toMatchSnapshot();
  });
});