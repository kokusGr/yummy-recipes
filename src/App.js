import React, { useState, useEffect } from 'react';

import AddRecipeModal from './components/AddRecipeModal'
import Recipe from './components/Recipe'

import { initDB } from './db'

import styles from './App.module.css';

const App = () => {
  const [recipes, setRecipes] = useState([])
  const [db, setDB] = useState(null)
  const [expandedRecipe, setExpandedRecipe] = useState(null)
  const [editedRecipe, setEditedRecipe] = useState(null)
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

  const onEditPressed = recipe => {
    setEditedRecipe(recipe)
    setModalVisible(true)
  }

  const editRecipe = ({ name, ingredients }) => {
    if (name !== '' && ingredients !== '' && editedRecipe) {
      const { id } = editedRecipe
      const updatedRecipe = { id, name, ingredients }
      const recipeIndex = recipes.findIndex(recipe => recipe.id === id)
      setRecipes([...recipes.slice(0, recipeIndex), updatedRecipe, ...recipes.slice(recipeIndex + 1, recipes.length)])

      db.put('recipes', updatedRecipe).catch(e => {
        alert('There was a problem updating a recipe, sorry :(')
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

  const toggleExpanded = recipe => {
    if (recipe === expandedRecipe) {
      setExpandedRecipe(null)
    } else {
      setExpandedRecipe(recipe)
    }
  }

  return (
    <div className={styles.root}>
      <ul className={styles.list}>
        {recipes.map(recipe => (
          <Recipe key={recipe.id}
            recipe={recipe}
            isExpanded={expandedRecipe === recipe}
            onEditPressed={onEditPressed}
            onDeletePressed={deleteRecipe}
            toggleExpanded={toggleExpanded} />
        ))}
        <button onClick={() => {
          setModalVisible(true)
        }}
        className={styles.button}>
          Add recipe
        </button>
      </ul>
      {isModalVisible ? (
        <AddRecipeModal onClose={closeModal}
          onSubmit={editedRecipe ? editRecipe : addRecipe}
          initialRecipeName={editedRecipe && editedRecipe.name}
          initialIngredients={editedRecipe && editedRecipe.ingredients.join(', ')} />
      ) : null}
    </div>
  );
}

export default App;
