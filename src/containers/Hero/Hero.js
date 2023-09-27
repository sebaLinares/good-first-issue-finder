import React from 'react';

import './Hero.scss';

const Hero = props => (
  <div className="Hero">
    <h1>Good First Issue Finder V2.0</h1>
    <h2>Make you first open source contribution!</h2>
    <div className="Contibute">
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
