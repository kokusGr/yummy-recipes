import React, { useContext, useState } from 'react'

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
      <button onClick={onAddPressed} className={styles.button}>
        Add recipe
      </button>
    </ul>
  )
}

export default RecipesList