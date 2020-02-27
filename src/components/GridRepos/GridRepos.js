import React from 'react';
import PropTypes from 'prop-types';

// Style imports
import styles from './GridRepos.module.scss';

// UI imports
import RepoCard from '../UI/RepoCard/RepoCard';

const GridRepos = ({ repos }) => {
  const grid = repos.map(el => (
    <a key={el.id} rel="noopener noreferrer" href={el.url} target="_blank">
      <RepoCard
        className={styles.repoCard}
        name={el.name}
        updated_at={el.updated_at}
        stars={el.stars}
        img={el.img}
      />
    </a>
  ));

  return (
    <div className={styles.GridRepo}>
      <div className={styles.GridContainer}>{grid}</div>
    </div>
  );
};

export default GridRepos;

GridRepos.propTypes = {
  repos: PropTypes.instanceOf(Array),
};
