import React, { useState, useEffect } from 'react';
import styles from './App.module.css';

const fakeRecipes = [
  { id: 1, name: 'Spaghetti' },
  { id: 2, name: 'Onion Pie' },
]

function App() {

  const [recipes, setRecipes] = useState([])
  const [isModalVisible, setModalVisible] = useState(false)

  useEffect(() => {
    setRecipes(fakeRecipes)
  }, [])

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
          <div onClick={() => {
            setModalVisible(false)
          }}
          className={styles.modalOverlay} />
          <div className={styles.modalContainer}>
            <h2 className={styles.modalHeader}>Add recipe</h2>
            <div className={styles.modalField}>
              <label className={styles.modalFieldLabel}>
                <input className={styles.modalFieldInput} />
              </label>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default App;
