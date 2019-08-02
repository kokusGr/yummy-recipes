import React, { useState, useContext } from 'react'

import TextField from './TextField'
import Button from './Button'
import { RecipesContext } from './RecipesStore'

import styles from './RecipeModal.module.css'

const RecipeModal = props => {
  const { onClose, recipe } = props

  const { editRecipe, addRecipe } = useContext(RecipesContext)

  const initialRecipeName = recipe ? recipe.name : ''
  const initialIngredients = recipe ? recipe.ingredients.join(', ') : ''

  const [recipeName, setRecipeName] = useState(initialRecipeName)
  const [ingredients, setIngredients] = useState(initialIngredients)

  const onChangeRecipeName = ({ currentTarget: { value }}) => {
    setRecipeName(value)
  }

  const onChangeIngredients = ({ currentTarget: { value }}) => {
    setIngredients(value)
  }

  const onSubmit = () => {
    const newRecipe = { name: recipeName.trim(), ingredients: ingredients.trim().split(',')}

    if (recipe) {
      editRecipe(recipe.id, newRecipe)
    } else {
      addRecipe(newRecipe)
    }

    onClose()
  }

  const title = recipe ? 'Edit a recipe ' : 'Add a recipe'

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.headerContainer}>
          <h2 className={styles.header}>{title}</h2>
        </div>
        <div className={styles.form}>
          <TextField value={recipeName} onChange={onChangeRecipeName} label="Recipe Name" />
          <div className={styles.spacer} />
          <TextField value={ingredients}
            onChange={onChangeIngredients}
            label="Ingredients"
            helperText="*coma seperated values"/>
        </div>
        <div className={styles.buttonsContainer}>
          <Button onClick={onClose} type="text">Cancel</Button>
          <div className={styles.horizontalSpacer} />
          <Button onClick={onSubmit} type="contained">{title}</Button>
        </div>
      </div>
    </div>
  )
}

export default RecipeModal
