import React from 'react';

// Style imports
import './RepoCard.scss';

const RepoCard = props => (
  <div className="RepoCard">
    <img src={props.img} alt="repo-avatar" />
    <h3>{props.name}</h3>
    <p>{props.stars} &#9733;</p>
    <p>Last update: {props.updated_at}</p>
  </div>
);

export default RepoCard;
