import React from 'react'

import styles from './Input.module.scss'

const input = props => {
  let inputElement = null
  switch (props.elementType) {
    case 'select':
      inputElement = (
        <select
          className={styles.SelectElement}
          value={props.value}
          onChange={props.changed}
        >
          <option disabled defaultValue value="">
            {' '}
            -- select an option --{' '}
          </option>
          {props.elementConfig.options.map(el => (
            <option value={el.value} key={el.value}>
              {el.displayValue}
            </option>
          ))}
        </select>
      )
      break
    case 'date':
    case 'number':
      inputElement = (
        <input
          type="number"
          className={styles.InputElement}
          value={props.value}
          onChange={props.changed}
        />
      )
      break
    default:
      inputElement = <input type="input" />
  }

  return (
    <div className={styles.Input}>
      <label className={styles.Label}>{props.label}</label>
      {inputElement}
    </div>
  )
}

export default input
