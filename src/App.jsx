import React from 'react'
import Header from './components/Header'

import Home from './components/Home'
import About from './components/About'
import Trust from './components/Trust'
import Feature from './components/Feature'
import Courses from './components/Courses'
import Learningplatform from './components/Learningplatform'
import Subscriber from './components/Subscriber'
import Populartopic from './components/Populartopic'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Header/>
      <Home/>
      <About/>
      <Trust/>
      <Feature/>
     <Courses/>
     <Learningplatform/>
     <Subscriber/>
     <Populartopic/>
     <Footer/>
     </div>
  )
}

export default App