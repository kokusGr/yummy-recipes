import React from 'react'

import Button from './Button'

import styles from './Recipe.module.css'

const Recipe = props => {
  const { recipe, isExpanded, toggleExpanded, onEditPressed, onDeletePressed } = props

  const handleEditPressed = e => {
    e.stopPropagation()
    onEditPressed(recipe, e)
  }

  const handleDeletePressed = e => {
    e.stopPropagation()
    onDeletePressed(recipe.id, e)
  }

  return (
    <li className={`${styles.root} ${isExpanded ? styles.rootExpanded : ''}`}
      onClick={() => { toggleExpanded(recipe) }}>
    <div className={`${styles.header} ${isExpanded ? styles.headerExpanded : ''}`}>
      <h2 className={styles.title}>{recipe.name}</h2>
      {isExpanded ? (
        <>
          <Button type="text" onClick={handleEditPressed}>Edit</Button>
          <Button type="text" color="red" onClick={handleDeletePressed}>Delete</Button>
        </>
      ): null}
    </div>
    {isExpanded ? (
      <>
        <div className={styles.ingredientsContainer}>
          <h3 className={styles.ingredientsTitle}>Ingredients</h3>
          <ul className={styles.ingredientsList}>
            {recipe.ingredients.map(ingredient => (
              <li className={styles.ingredientsListItem} key={ingredient}>{ingredient}</li>
            ))}
          </ul>
        </div>
      </>
    ) : null}
  </li>
  )
}

export default Recipe
