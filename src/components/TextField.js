import React from 'react'

import styles from './TextField.module.css'

const TextField = ({ label, helperText, onChange, value }) => {
  return (
    <div>
      <div className={styles.inputContainer}>
        <input onChange={onChange} value={value} className={styles.input} id="name" />
        <label className={`${styles.label} ${value !== '' ? styles.labelFilled : ''}`}
          htmlFor="name">
            {label}
        </label>
      </div>
      {helperText ? <div className={styles.helperText}>{helperText}</div> : null}
    </div>
  )
}

export default TextField
