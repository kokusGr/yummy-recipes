import React, { useState } from 'react'

import styles from './TextField.module.css'

const TextField = ({ label, helperText }) => {

  const [value, setValue] = useState('')

  const onChange = e => {
    setValue(e.currentTarget.value)
  }

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
