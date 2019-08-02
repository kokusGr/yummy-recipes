import React from 'react'
import { shallow } from 'enzyme'

import Recipe from './Recipe'

it('matches snapshot', () => {
    const mockRecipe = {
        id: '21314asd',
        name: 'Pizza',
        ingredients: ['Tomatoes', 'Cheese']
    }
    expect(shallow(<Recipe recipe={mockRecipe} />)).toMatchSnapshot()
})
