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
    <div className={styles.root}>
      {recipes.length !== 0 ? (
        <ul className={styles.list}>
          {recipes.map(recipe => (
            <Recipe key={recipe.id}
              recipe={recipe}
              isExpanded={expandedRecipe === recipe}
              onEditPressed={onEditPressed}
              onDeletePressed={deleteRecipe}
              toggleExpanded={toggleExpanded} />
          ))}
        </ul>
      ) : (
        <div className={styles.emptyListPlaceholder}>
          You don't have any recipes saved. Use button below to add your first yummy recipe <span role="img" aria-label="Smilling emoji">&#x1F60A;</span>
        </div>
      )}
        <div className={styles.buttonContainer}>
          <Button onClick={onAddPressed} type="contained" size="big">
            Add a recipe
          </Button>
        </div>
    </div>
  )
}

export default RecipesList