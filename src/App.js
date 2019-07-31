import React, { useState, useEffect } from 'react';
import styles from './App.module.css';

const fakeRecipes = [
  { id: 1, name: 'Spaghetti' },
  { id: 2, name: 'Onion Pie' },
]

function App() {

  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    setRecipes(fakeRecipes)
  }, [])

  return (
    <div className={styles.root}>
      <ul className={styles.list}>
        {recipes.map(recipe => (
          <li className={styles.listItem} key={recipe.id}>{recipe.name}</li>
        ))}
        <button className={styles.button}>Add recipe</button>
      </ul>
    </div>
  );
}

export default App;
