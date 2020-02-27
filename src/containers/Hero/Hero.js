import React from 'react';

import styles from './Hero.module.scss';

const Hero = () => (
  <div className={styles.Hero}>
    <h1>Good First Issue Finder</h1>
    <h2>Make you first open source contribution!</h2>
    <div className={styles.Contribute}>
      <p>Contribute to this repo</p>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/sebaLinares/good-first-issue-finder"
      >
        here
      </a>
    </div>
  </div>
);

export default Hero;
