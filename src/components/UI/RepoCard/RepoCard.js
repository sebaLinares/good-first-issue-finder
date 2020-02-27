import React from 'react';
import PropTypes from 'prop-types';

// Style imports
import styles from './RepoCard.module.scss';

const RepoCard = ({ img, name, stars, updatedAt }) => (
  <div className={styles.RepoCard}>
    <img src={img} alt="repo-avatar" />
    <h3>{name}</h3>
    <p>{stars} &#9733; </p>
    <p>
      Last update:
      {updatedAt}
    </p>
  </div>
);

export default RepoCard;

RepoCard.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  stars: PropTypes.number.isRequired,
  updatedAt: PropTypes.string.isRequired,
};
