import React, { useState, useEffect } from 'react';

import TextField from './components/TextField'

import styles from './App.module.css';

const fakeRecipes = [
  { id: 1, name: 'Spaghetti' },
  { id: 2, name: 'Onion Pie' },
]

const App = () => {
  const [recipes, setRecipes] = useState([])
  const [isModalVisible, setModalVisible] = useState(false)

  useEffect(() => {
    setRecipes(fakeRecipes)
  }, [])

  const closeModal = () => {
    setModalVisible(false)
  }

  return (
    <div className={styles.root}>
      <ul className={styles.list}>
        {recipes.map(recipe => (
          <li className={styles.listItem} key={recipe.id}>{recipe.name}</li>
        ))}
        <button onClick={() => {
          setModalVisible(true)
        }}
        className={styles.button}>
          Add recipe
        </button>
      </ul>
      {isModalVisible ? (
        <div className={styles.modalRoot}>
          <div onClick={closeModal} className={styles.modalOverlay} />
          <div className={styles.modalContainer}>
            <div className={styles.modalHeaderContainer}>
              <h2 className={styles.modalHeader}>Add a recipe</h2>
              <div onClick={closeModal} className={styles.modalHeaderIcon}>x</div>
            </div>
            <div className={styles.modalForm}>
              <TextField label="Recipe Name" />
              <div className={styles.spacer} />
              <TextField label="Ingredients" helperText="*coma seperated values"/>
            </div>
            <div className={styles.modalButtonsContainer}>
              <button className={styles.modalSubmitButton}>Add Recipe</button>
              <button className={styles.modalCancelButton}>Cancel</button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default App;
