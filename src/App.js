import React, { useState, useEffect } from 'react';

import AddRecipeModal from './components/AddRecipeModal'
import Button from './components/Button'

import { initDB } from './db'

import styles from './App.module.css';

const App = () => {
  const [recipes, setRecipes] = useState([])
  const [db, setDB] = useState(null)
  const [expandedRecipe, setExpandedRecipe] = useState(null)
  const [isModalVisible, setModalVisible] = useState(false)

  useEffect(() => {
    initDB().then(db => {
      db.getAll('recipes').then(data => {
        setRecipes(data)
        setDB(db)
      })
    }).catch(e => {
      alert('There was a problem connecting to db, sorry :(')
      console.error(e)
    })
  }, [])

  const closeModal = () => {
    setModalVisible(false)
  }

  const addRecipe = ({ name, ingredients }) => {
    // TODO: Proper validation
    if (name !== '' && ingredients !== '') {
      const newRecipe = { id: recipes.length + 1, name, ingredients }
      setRecipes([...recipes, newRecipe])

      db.add('recipes', newRecipe).catch(e => {
        alert('There was a problem adding new recipe to db, sorry :(')
        console.error(e)
      })
    }
  }

  const deleteRecipe = id => {
    setRecipes(recipes.filter(recipe => recipe.id !== id))
    db.delete('recipes', id).catch(e => {
      alert('There was a problem deleting a recipe from db, sorry :(')
      console.error(e)
    })
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
          <li key={recipe.id} className={`${styles.recipeRoot} ${expandedRecipe === recipe.id ? styles.recipeRootExpanded : ''}`} onClick={() => { toggleExpanded(recipe.id) }}>
            <div className={`${styles.recipeHeader} ${expandedRecipe === recipe.id ? styles.recipeHeaderExpanded : ''}`}>
              <h2 className={styles.recipeTitle} key={recipe.id}>{recipe.name}</h2>
              {expandedRecipe === recipe.id ? (
                <>
                  <Button type="text">Edit</Button>
                  <Button type="text" color="red" onClick={() => {
                    deleteRecipe(recipe.id)
                  }}>Delete</Button>
                </>
              ): null}
            </div>
            {expandedRecipe === recipe.id ? (
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
