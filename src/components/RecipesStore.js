import React, { useState, useEffect } from 'react'

import { getID } from '../id'

export const RecipesContext = React.createContext(null)

const RecipesStore = ({ children,  db }) => {
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    if (db) {
      const loadRecipes = async() => {
        const data = await db.getAll('recipes')
        setRecipes(data)
      }

      loadRecipes()
    }
  }, [db])

  const addRecipe = ({ name, ingredients }) => {
    // TODO: Proper validation
    if (name !== '' && ingredients !== '') {
      const newRecipe = { id: getID(), name, ingredients }
      setRecipes([...recipes, newRecipe])

      db.add('recipes', newRecipe).catch(e => {
        alert('There was a problem adding new recipe to db, sorry :(')
        console.error(e)
      })
    }
  }

  const editRecipe = (id, { name, ingredients }) => {
    console.log('Editing', { name, ingredients, id })
    if (name !== '' && ingredients !== '' && id) {
      const updatedRecipe = { id, name, ingredients }
      const recipeIndex = recipes.findIndex(recipe => recipe.id === id)
      setRecipes([...recipes.slice(0, recipeIndex), updatedRecipe, ...recipes.slice(recipeIndex + 1, recipes.length)])

      db.put('recipes', updatedRecipe).catch(e => {
        alert('There was a problem updating a recipe, sorry :(')
        console.error(e)
      })
    }
  }

  const deleteRecipe = id => {
    setRecipes(recipes.filter(recipe => recipe.id !== id))
    db.delete('recipes', id).catch(e => {
      alert('There was a problem deleting a recipe from db, sorry :(')
      console.error(e)
    })
  }

  const recipesStoreProps = {
    recipes,
    addRecipe,
    editRecipe,
    deleteRecipe
  }

  return (
    <RecipesContext.Provider value={recipesStoreProps}>
      {children}
    </RecipesContext.Provider>
  )
}

export default RecipesStore