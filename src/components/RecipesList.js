import React, { useContext, useState } from 'react'

import Button from './Button'
import { RecipesContext } from './RecipesStore'
import Recipe from './Recipe'

import styles from './RecipesList.module.css'

const RecipesList = props => {
  const { onEditPressed, onAddPressed } = props

  const [expandedRecipe, setExpandedRecipe] = useState(null)

  const { recipes, deleteRecipe } = useContext(RecipesContext)

  const toggleExpanded = recipe => {
    if (recipe === expandedRecipe) {
      setExpandedRecipe(null)
    } else {
      setExpandedRecipe(recipe)
    }
  }

  return (
    <ul className={styles.list}>
      {recipes.map(recipe => (
        <Recipe key={recipe.id}
          recipe={recipe}
          isExpanded={expandedRecipe === recipe}
          onEditPressed={onEditPressed}
          onDeletePressed={deleteRecipe}
          toggleExpanded={toggleExpanded} />
      ))}
      <div className={styles.buttonContainer}>
        <Button onClick={onAddPressed} type="contained" size="big">
          Add a recipe
        </Button>
      </div>
    </ul>
  )
}

export default RecipesList