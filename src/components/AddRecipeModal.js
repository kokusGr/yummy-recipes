import React, { useState } from 'react'

import TextField from './TextField'
import Button from './Button'

import styles from './AddRecipeModal.module.css'

const AddRecipeModal = props => {
  const { onClose, onSubmit } = props

  const [recipeName, setRecipeName] = useState('')
  const [ingredients, setIngredients] = useState('')

  const onChangeRecipeName = ({ currentTarget: { value }}) => {
    setRecipeName(value)
  }

  const onChangeIngredients = ({ currentTarget: { value }}) => {
    setIngredients(value)
  }

  const internalOnSubmit = () => {
    onSubmit({ name: recipeName, ingredients: ingredients.split(',') })
  }

  return (
    <div className={styles.root}>
      <div onClick={onClose} className={styles.overlay} />
      <div className={styles.container}>
        <div className={styles.headerContainer}>
          <h2 className={styles.header}>Add a recipe</h2>
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
          <Button onClick={internalOnSubmit} type="contained">Add Recipe</Button>
        </div>
      </div>
    </div>
  )
}

export default AddRecipeModal
