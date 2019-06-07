import React from 'react'

import styles from './RepoFinder.module.scss'
import SearchRepos from './../../components/SearchRepos/SearchRepos'

const repoFinder = props => {
  return (
    <div className={styles.RepoFinder}>
      <p>Hello from repofinder</p>
      <SearchRepos />
    </div>
  )
}

export default repoFinder
