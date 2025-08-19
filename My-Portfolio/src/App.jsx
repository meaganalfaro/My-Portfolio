import { useState } from 'react'
import './App.css'
import './styles/design-system.css'
import Home from './pages/Home'
import AboutMe from './pages/AboutMe'
import Skills from './pages/Skills'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home />
      <AboutMe />
      <Skills />
    </>
  )
}

export default App
