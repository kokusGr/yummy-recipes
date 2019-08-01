import React, { useState, useEffect } from 'react';

import Button from './components/Button'
import AddRecipeModal from './components/AddRecipeModal'

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

  const addRecipe = ({ name, ingredients }) => {
    // TODO: Proper validation
    if (name !== '' && ingredients !== '') {
      setRecipes([...recipes, { id: recipes.length + 1, name, ingredients }])
    }
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
        <AddRecipeModal onClose={closeModal} onSubmit={addRecipe} />
      ) : null}
    </div>
  );
}

export default App;
