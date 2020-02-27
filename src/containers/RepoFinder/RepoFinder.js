import React, { useState, useEffect } from 'react';

// Style imports
import axios from 'axios';
import styles from './RepoFinder.module.scss';

// Core
import RepositoryGateway from '../../core/gateways/Respository.gateway';
import RepositoryAdapter from '../../core/adapters/Respository.adapter';

// Container imports
import GridRepos from '../../components/GridRepos/GridRepos';

// UI imports
import DatePickerWidget from '../../components/DatePickerWidget';

const languages = [
  {
    name: 'javascript',
    displayName: 'Javascript',
  },
  {
    name: 'python',
    displayName: 'Python',
  },
  {
    name: 'java',
    displayName: 'Java',
  },
];

const RepoFinder = () => {
  const [url, setUrl] = useState('');
  const [formValues, setFormValues] = useState({
    fromDate: new Date(),
    toDate: new Date(),
    fromStars: 0,
    toStars: 1,
    language: '',
  });

  const [repos, setRepos] = useState('');

  useEffect(() => {
    if (url) {
      axios
        .get(url)
        .then(res => {
          const reposarr = res.data.items.map(el => {
            const date = el.updated_at.split('t');
            return {
              id: el.id,
              name: el.full_name,
              updated_at: date[0],
              stars: el.stargazers_count,
              img: el.owner.avatar_url,
              url: el.html_url,
            };
          });
          setRepos(reposarr);
        })
        .catch(err => console.log(err));
    }
  }, [url]);

  // const onChangeHandler = (event, id) => {
  //   // Copy 1st level
  //   const updatedInputs = {
  //     ...inputs,
  //   };
  //   // Copy 2nd level
  //   const updatedInputElement = {
  //     ...updatedInputs[id],
  //   };
  //   // Update the copy of 2nd level
  //   updatedInputElement.value = event.target.value;
  //   // Update the copy of 1st level
  //   updatedInputs[id] = updatedInputElement;
  //   // Update state with the indirectly with the copied state
  //   setInputs(updatedInputs);
  // };

  // Transform the state into an iterable array for render
  const formElementsArr = [];

  const formHandler = event => {
    event.preventDefault();
    console.log(formElementsArr);

    // Start building the query string for api search
    // base url
  };

  const resetForm = () => {
    setFormValues({
      ...formValues,
      starsCount: 0,
      language: '',
    });
  };

  const submit = async event => {
    event.preventDefault();
    const repositoryAdapter = new RepositoryAdapter();
    const repositoryGateway = new RepositoryGateway(axios, repositoryAdapter);
    const repositories = await repositoryGateway.getRepositories(formValues);
    console.log('repositories: ', repositories);

    // const baseUrl =
    //   'https://api.github.com/search/repositories?q=good-first-issues:>0';
    // const language = `topic:${formValues.language}`;
    // const stars = `stars:${formValues.starsFrom}..${formValues.starsTo}`;
    // const created = `created:${formValues.fromDate}..${formValues.toDate}`;

    // const URL = `${baseUrl}+${language}+${stars}+${created}`;
    // setUrl(URL);
    console.log(URL);
    console.log('formValues: ', formValues);
    resetForm();
  };

  const inputHandler = ({ target: { name, value } }) => {
    console.log(`changing ${name} to ${value}`);
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const form = (
    <form>
      <select
        value={formValues.language}
        name="language"
        onChange={inputHandler}
      >
        <option defaultValue="">Pick a programming language</option>
        {languages.map(language => (
          <option key={language.name} value={language.name}>
            {language.displayName}
          </option>
        ))}
      </select>
      <DatePickerWidget moment="fromDate" handleChange={inputHandler} />
      <DatePickerWidget moment="toDate" handleChange={inputHandler} />
      <input
        name="fromStars"
        type="number"
        placeholder="From what star count"
        onChange={inputHandler}
      />
      <input
        name="toStars"
        type="number"
        placeholder="Up to what star count"
        onChange={inputHandler}
      />

      <button type="button" onClick={submit}>
        Search for repos!
      </button>
    </form>
  );

  return (
    <div className={styles.RepoFinder}>
      {form}
      <GridRepos repos={repos} />
    </div>
  );
};

export default RepoFinder;
