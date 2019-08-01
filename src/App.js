import React, { useState, useEffect } from 'react';

import Button from './components/Button'
import AddRecipeModal from './components/AddRecipeModal'

import styles from './App.module.css';

const fakeRecipes = [
  { id: 1, name: 'Spaghetti', ingredients: ['Pasta', 'Tomatoes', 'Garlic', 'Minced meat', 'Olive oil'] },
  { id: 2, name: 'Onion Pie', ingredients: ['Onions?'] },
]

const App = () => {
  const [recipes, setRecipes] = useState([])
  const [expandedRecipe, setExpandedRecipe] = useState(null)
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

  const toggleExpanded = id => {
    if (id === expandedRecipe) {
      setExpandedRecipe(null)
    } else {
      setExpandedRecipe(id)
    }
  }

  return (
    <div className={styles.root}>
      <ul className={styles.list}>
        {recipes.map(recipe => (
          <li className={`${styles.recipeRoot} ${expandedRecipe === recipe.id ? styles.recipeRootExpanded : ''}`} onClick={() => { toggleExpanded(recipe.id) }}>
            <h2 className={`${styles.recipeTitle} ${expandedRecipe === recipe.id ? styles.recipeTitleExpanded : ''}`} key={recipe.id}>{recipe.name}</h2>
            {expandedRecipe === recipe.id ? (
              <div className={styles.ingredientsContainer}>
                <h3 className={styles.ingredientsTitle}>Ingredients</h3>
                <ul className={styles.ingredientsList}>
                  {recipe.ingredients.map(ingredient => (
                    <li className={styles.ingredientsListItem} key={ingredient}>{ingredient}</li>
                  ))}
                </ul>
              </div>
            ) : null}
          </li>
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
