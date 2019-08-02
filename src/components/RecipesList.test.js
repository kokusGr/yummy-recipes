import React from 'react'
import { shallow } from 'enzyme'

import RecipesList from './RecipesList'
import { RecipesContext } from './RecipesStore'

it('matches snapshot', () => {
    const context = { recipes: [], deleteRecipe: null }
    expect(shallow(<RecipesContext.Provider value={context}><RecipesList /></RecipesContext.Provider>)).toMatchSnapshot()
})
