import React, { useState } from 'react'

import styles from './TextField.module.css'

const TextField = ({ label }) => {

  const [value, setValue] = useState('')

  const onChange = e => {
    setValue(e.currentTarget.value)
  }

  return (
    <div className={styles.modalField}>
      <input onChange={onChange} value={value} className={styles.modalFieldInput} id="name" />
      <label className={`${styles.modalFieldLabel} ${value !== '' ? styles.modaFieldLabelFocused : ''}`}
        htmlFor="name">
          {label}
      </label>
    </div>
  )
}

export default TextField
