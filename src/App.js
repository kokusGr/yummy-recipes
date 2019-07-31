import React from 'react';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.root}>
      <ul className={styles.list}>
        <li className={styles.listItem}>Spaghetti</li>
        <li className={styles.listItem}>Onion Pie</li>
        <button className={styles.button}>Add recipe</button>
      </ul>
    </div>
  );
}

export default App;
