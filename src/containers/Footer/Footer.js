import React from 'react';

// Import styles
import styles from './Footer.module.scss';

const Footer = props => (
  <div className={styles.Footer}>
    <p>
      You can collaborate to this repo in{' '}
      <a href="https://github.com/sebaLinares/good-first-issue-finder">
        this github repository
      </a>
    </p>
  </div>
);

export default Footer;
