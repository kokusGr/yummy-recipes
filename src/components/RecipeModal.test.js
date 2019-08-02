import React from 'react'
import { shallow } from 'enzyme'

import RecipeModal from './RecipeModal'
import { RecipesContext } from './RecipesStore'

it('matches snapshot', () => {
    const context = { editRecipe: null, addRecipe: null }
    expect(shallow(<RecipesContext.Provider value={context}><RecipeModal /></RecipesContext.Provider>)).toMatchSnapshot()
})
