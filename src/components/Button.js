import React from 'react'

import styles from './Button.module.css'

const typeClassName = {
  'contained': styles.contained,
  'outlined': styles.outlined,
  'text': styles.text,
}

const Button = props => {
  const { onClick, children, type } = props

  const className = `${styles.root} ${typeClassName[type]}`

  return (
    <button onClick={onClick} className={className}>{children}</button>
  )
}

export default Button
