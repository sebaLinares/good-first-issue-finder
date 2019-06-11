import React from 'react'
import './App.css'

import Hero from './containers/Hero/Hero'
import RepoFinder from './containers/RepoFinder/RepoFinder'
import Footer from './containers/Footer/Footer'

const App = () => {
  return (
    <div className="App">
      <Hero />
      <RepoFinder />
      <hr />
      <Footer />
    </div>
  )
}

export default App
