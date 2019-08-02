import React from 'react'

import Button from './Button'
import Transition from './Transition'

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
    <li className={styles.root}
      onClick={() => { toggleExpanded(recipe) }}>
      <div className={`${styles.header} ${isExpanded ? styles.headerExpanded : ''}`}>
        <h2 className={`${styles.title} ${isExpanded ? styles.titleExpanded : ''}`}>{recipe.name}</h2>
        {isExpanded ? (
          <>
            <Button type="text" color="black" onClick={handleEditPressed}>Edit</Button>
            <div className={styles.spacer} />
            <Button type="text" color="red" onClick={handleDeletePressed}>Delete</Button>
          </>
        ) : null}
      </div>
      <Transition isActive={isExpanded} timeout={300}>
        {activeClassName => (
          <div className={`${styles.ingredientsContainer} ${activeClassName === 'enter' ? styles.ingredientsContainerEnter : null}`}>
            <h3 className={styles.ingredientsTitle}>Ingredients</h3>
            <ul className={styles.ingredientsList}>
              {recipe.ingredients.map(ingredient => (
                <li className={styles.ingredientsListItem} key={ingredient}>{ingredient}</li>
              ))}
            </ul>
          </div>
        )}
      </Transition>
    </li>
  )
}

export default Recipe
