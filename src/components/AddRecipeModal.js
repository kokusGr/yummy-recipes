import React from 'react'

import TextField from './TextField'
import Button from './Button'

import styles from './AddRecipeModal.module.css'

const AddRecipeModal = props => {
  const { onClose } = props

  return (
    <div className={styles.root}>
      <div onClick={onClose} className={styles.overlay} />
      <div className={styles.container}>
        <div className={styles.headerContainer}>
          <h2 className={styles.header}>Add a recipe</h2>
          <div onClick={onClose} className={styles.headerIcon}>x</div>
        </div>
        <div className={styles.form}>
          <TextField label="Recipe Name" />
          <div className={styles.spacer} />
          <TextField label="Ingredients" helperText="*coma seperated values"/>
        </div>
        <div className={styles.buttonsContainer}>
          <Button onClick={onClose} type="text">Cancel</Button>
          <div className={styles.horizontalSpacer} />
          <Button type="contained">Add Recipe</Button>
        </div>
      </div>
    </div>
  )
}

export default AddRecipeModal
