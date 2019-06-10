import React, { useState, useEffect } from 'react'

import axios from 'axios'

import styles from './SearchRepos.module.scss'
import Input from './../../UI/Input/Input'
import Button from './../../UI/Button/Button'

const SearchRepos = props => {
  // Topics to search
  // const [languages, setLanguages] = ['javascript', 'java', 'python']
  const [url, setUrl] = useState('')
  const [formValid, setFormValid] = useState(false)
  useEffect(() => {
    axios
      .get(url)
      .then(res => {
        console.log(res)
      })
      .catch(err => console.log(err))
  }, [url])

  const [inputs, setInputs] = useState({
    language: {
      label: 'What programming language you want to get issues of ',
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
      elementType: 'select',
      value: '',
      elementConfig: {
        options: [
          { value: '01', displayValue: 'January' },
          { value: '02', displayValue: 'February' },
          { value: '03', displayValue: 'March' },
          { value: '04', displayValue: 'April' },
          { value: '05', displayValue: 'May' },
          { value: '06', displayValue: 'June' },
          { value: '07', displayValue: 'July' },
          { value: '08', displayValue: 'August' },
          { value: '09', displayValue: 'September' },
          { value: '10', displayValue: 'October' },
          { value: '11', displayValue: 'November' },
          { value: '12', displayValue: 'December' },
        ],
      },
    },
    yearCreatedFrom: {
      label: 'Of which year',
      elementType: 'select',
      value: '',
      elementConfig: {
        options: [
          { value: '2007', displayValue: '2007' },
          { value: '2008', displayValue: '2008' },
          { value: '2009', displayValue: '2009' },
          { value: '2010', displayValue: '2010' },
          { value: '2011', displayValue: '2011' },
          { value: '2012', displayValue: '2012' },
          { value: '2013', displayValue: '2013' },
          { value: '2014', displayValue: '2014' },
          { value: '2015', displayValue: '2015' },
          { value: '2016', displayValue: '2016' },
          { value: '2017', displayValue: '2017' },
          { value: '2018', displayValue: '2018' },
          { value: '2019', displayValue: '2019' },
        ],
      },
    },
    monthCreatedTo: {
      label: 'To what month',
      elementType: 'select',
      value: '',
      elementConfig: {
        options: [
          { value: '01', displayValue: 'January' },
          { value: '02', displayValue: 'February' },
          { value: '03', displayValue: 'March' },
          { value: '04', displayValue: 'April' },
          { value: '05', displayValue: 'May' },
          { value: '06', displayValue: 'June' },
          { value: '07', displayValue: 'July' },
          { value: '08', displayValue: 'August' },
          { value: '09', displayValue: 'September' },
          { value: '10', displayValue: 'October' },
          { value: '11', displayValue: 'November' },
          { value: '12', displayValue: 'December' },
        ],
      },
    },
    yearCreatedTo: {
      label: 'Of which year',
      elementType: 'select',
      value: '',
      elementConfig: {
        options: [
          { value: '2007', displayValue: '2007' },
          { value: '2008', displayValue: '2008' },
          { value: '2009', displayValue: '2009' },
          { value: '2010', displayValue: '2010' },
          { value: '2011', displayValue: '2011' },
          { value: '2012', displayValue: '2012' },
          { value: '2013', displayValue: '2013' },
          { value: '2014', displayValue: '2014' },
          { value: '2015', displayValue: '2015' },
          { value: '2016', displayValue: '2016' },
          { value: '2017', displayValue: '2017' },
          { value: '2018', displayValue: '2018' },
          { value: '2019', displayValue: '2019' },
        ],
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

    // Start building the query string for api search
    // base url
    const baseUrl =
      'https://api.github.com/search/repositories?q=good-first-issues:>0'
    const language = `topic:${formElementsArr[0].config.value}`
    const stars = `stars:${formElementsArr[5].config.value}..${
      formElementsArr[6].config.value
    }`
    const created = `created:${formElementsArr[2].config.value}-${
      formElementsArr[1].config.value
    }-01..${formElementsArr[4].config.value}-${
      formElementsArr[3].config.value
    }-01`

    const URL = `${baseUrl}+${language}+${stars}+${created}`
    setUrl(URL)
    console.log(URL)
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
