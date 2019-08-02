import React, { useState, useEffect } from 'react';

import RecipeModal from './components/RecipeModal'
import RecipesList from './components/RecipesList'
import RecipesStore from './components/RecipesStore'

import { initDB } from './db'

import styles from './App.module.css';

const App = () => {
  const [db, setDB] = useState(null)
  const [editedRecipe, setEditedRecipe] = useState(null)
  const [isModalVisible, setModalVisible] = useState(false)

  useEffect(() => {
    initDB().then(db => {
      setDB(db)
    }).catch(e => {
      alert('There was a problem connecting to db, sorry :(')
      console.error(e)
    })
  }, [])

  const closeModal = () => {
    setEditedRecipe(null)
    setModalVisible(false)
  }

  const openModal = () => {
    setModalVisible(true)
  }

  const onEditPressed = recipe => {
    setEditedRecipe(recipe)
    setModalVisible(true)
  }

  return (
    <RecipesStore db={db}>
      <header className={styles.appHeader}>
        <h1 className={styles.appTitle}>Yummy Recipes</h1>
      </header>
      <div className={styles.root}>
        <RecipesList onEditPressed={onEditPressed} onAddPressed={openModal} />
        {isModalVisible ? (
          <RecipeModal onClose={closeModal}
            recipe={editedRecipe} />
        ) : null}
      </div>
    </RecipesStore>
  );
}

export default App;
