import React from 'react'

import styles from './Button.module.css'

const typeClassName = {
  'contained': styles.contained,
  'outlined': styles.outlined,
  'text': styles.text,
}

const sizeClassName = {
  'big': styles.big,
  'medium': styles.medium,
}

const Button = props => {
  const { onClick, children, type, color, size = 'medium' } = props

  const className = `${styles.root} ${typeClassName[type]} ${sizeClassName[size]}`

  return (
    <button onClick={onClick} className={className} style={{ color: color }}>{children}</button>
  )
}

export default Button
