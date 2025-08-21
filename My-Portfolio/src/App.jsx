import { useState } from 'react'
import './App.css'
import './styles/design-system.css'
import Home from './pages/Home'
import AboutMe from './pages/AboutMe'
import Skills from './pages/Skills'
import Projects from './pages/Projects'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home />
      <AboutMe />
      <Skills />
      <Projects />
    </>
  )
}

export default App
