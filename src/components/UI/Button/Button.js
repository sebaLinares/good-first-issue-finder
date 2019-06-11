import React from 'react'

import styles from './Button.module.scss'

const Button = props => {
  return (
    <button
      disabled={props.invalid}
      onClick={props.clicked}
      className={styles.button}
    >
      {props.label}
    </button>
  )
}

export default Button
