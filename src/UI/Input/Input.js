import React from 'react'

import styles from './Input.module.scss'

const input = props => {
  let inputElement = null
  switch (props.elementType) {
    case 'select':
      inputElement = (
        <select
          className={styles.InputElement}
          value={props.value}
          onChange={props.changed}
        >
          <option disabled selected value="">
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
    // case 'input':
    //   switch(props.elementTypeDetail){
    //     case('date'):
    //       inputElement = <input
    //         type="date"
    //   }
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