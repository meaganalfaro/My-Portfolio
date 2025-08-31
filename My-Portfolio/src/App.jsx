import { useState } from 'react'
import './App.css'
import './styles/design-system.css'
import Home from './pages/Home'
import AboutMe from './pages/AboutMe'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Experience from './pages/Experience'

function App() {

  return (
    <>
      <Home />
      <AboutMe />
      <Skills />
      <Projects />
      <Experience />
    </>
  )
}

export default App
