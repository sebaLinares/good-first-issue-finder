import React from 'react';

// Style imports
import './GridRepos.scss';

// UI imports
import RepoCard from '../UI/RepoCard/RepoCard';

const GridRepos = props => {
  const gridArr = [...props.repos];
  const grid = gridArr.map(el => (
    <a key={el.id} rel="noopener noreferrer" href={el.url} target="_blank">
      <RepoCard
        className="repoCard"
        name={el.name}
        updated_at={el.updated_at}
        stars={el.stars}
        img={el.img}
      />
    </a>
  ));

  return (
    <div className="GridRepo">
      <div className="GridContainer">{grid}</div>
    </div>
  );
};

export default GridRepos;
