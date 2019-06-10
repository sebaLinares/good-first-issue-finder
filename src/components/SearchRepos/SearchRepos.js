import React, { useState } from 'react'

import styles from './SearchRepos.module.scss'
import Input from './../../UI/Input/Input'
import Button from './../../UI/Button/Button'

const SearchRepos = props => {
  // Topics to search
  // const [languages, setLanguages] = ['javascript', 'java', 'python']

  const [inputs, setInputs] = useState({
    language: {
      label: 'Programming language',
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
    monthCreatedFrom: {
      label: 'From what month',
      elementType: 'date',
      value: '',
      elementConfig: {
        options: [],
      },
    },
    monthCreatedTo: {
      label: 'To what month',
      elementType: 'date',
      value: '',
      elementConfig: {
        options: [],
      },
    },
    yearCreatedFrom: {
      label: 'From what year',
      elementType: 'date',
      value: '',
      elementConfig: {
        options: [],
      },
    },
    yearCreatedTo: {
      label: 'To what year',
      elementType: 'date',
      value: '',
      elementConfig: {
        options: [],
      },
    },
    starsFrom: {
      label: 'Min # of stars',
      elementType: 'number',
      value: '',
      elementConfig: {
        options: [],
      },
    },
    startsTo: {
      label: 'Max # of stars',
      elementType: 'number',
      value: '',
      elementConfig: {
        options: [],
      },
    },
  })

  const formHandler = event => {
    event.preventDefault()
    console.log(formElementsArr)
  }

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

  let form = (
    <form onSubmit={formHandler}>
      {formElementsArr.map(el => (
        <Input
          key={el.id}
          elementType={el.config.elementType}
          value={el.config.value}
          changed={event => onChangeHandler(event, el.id)}
          elementConfig={el.config.elementConfig}
          label={el.config.label}
        />
      ))}
      <Button disabled={false} label={'Get repos'} clicked={formHandler} />
    </form>
  )

  return <div className={styles.SearchRepos}>{form}</div>
}

export default SearchRepos
