import React from 'react'

// Style imports
import styles from './GridRepos.module.scss'

// UI imports
import RepoCard from './../UI/RepoCard/RepoCard'

const GridRepos = props => {
  const gridArr = [...props.repos]
  let grid = gridArr.map(el => (
    <RepoCard
      className={styles.repoCard}
      key={el.id}
      name={el.name}
      updated_at={el.updated_at}
      stars={el.stars}
      img={el.img}
    />
  ))

  return (
    <div className={styles.GridRepo}>
      <div className={styles.GridContainer}>{grid}</div>
    </div>
  )
}

export default GridRepos
