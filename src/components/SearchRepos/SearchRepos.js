import React, { useState } from 'react'

import styles from './SearchRepos.module.scss'
import Input from './../../UI/Input/Input'

const SearchRepos = props => {
  // Topics to search
  // const [languages, setLanguages] = ['javascript', 'java', 'python']

  const [inputs, setInputs] = useState({
    language: {
      elementType: 'select',
      value: '',
      elementConfig: {
        options: [
          { value: 'javascript', displayValue: 'Javascript' },
          { value: 'java', displayValue: 'Java' },
          { value: 'python', displayValue: 'Python' },
        ],
      },
    },
    whenCreated: {
      elementType: 'select',
      value: '',
      elementConfig: {
        options: [],
      },
    },
    stargazers: {
      elementType: 'select',
      value: '',
      elementConfig: {
        options: [],
      },
    },
  })

  const onChangeHandler = (event, id) => {
    // Copy 1st level
    const updatedInputs = {
      ...inputs,
    }
    // Copy 2nd level
    const updatedInputElement = {
      ...updatedInputs[id],
    }
    // Update the copy of 2nd level
    updatedInputElement.value = event.target.value
    // Update the copy of 1st level
    updatedInputs[id] = updatedInputElement
    // Update state with the indirectly with the copied state
    setInputs(updatedInputs)
  }

  // Transform the state into an iterable object for render
  const formElementsArr = []
  for (let el in inputs) {
    formElementsArr.push({
      id: el,
      config: inputs[el],
    })
  }

  return (
    <div className={styles.SearchRepos}>
      {formElementsArr.map(el => (
        <Input
          key={el.id}
          elementType={el.config.elementType}
          value={el.config.value}
          changed={event => onChangeHandler(event, el.id)}
          elementConfig={el.config.elementConfig}
        />
      ))}
    </div>
  )
}

export default SearchRepos
