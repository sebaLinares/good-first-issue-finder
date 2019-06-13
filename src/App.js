import React from 'react'
import './App.css'

import Hero from './containers/Hero/Hero'
import RepoFinder from './containers/RepoFinder/RepoFinder'

const App = () => {
  return (
    <div className="App">
      <Hero />
      <RepoFinder />
      <hr />
    </div>
  )
}

export default App
