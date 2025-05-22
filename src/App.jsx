import React from 'react'
import Header from './components/Header'

import Home from './components/Home'
import About from './components/About'
import Trust from './components/Trust'
import Feature from './components/Feature'
import Courses from './components/Courses'

const App = () => {
  return (
    <div>
      <Header/>
      <Home/>
      <About/>
      <Trust/>
      <Feature/>
     <Courses/>
     </div>
  )
}

export default App