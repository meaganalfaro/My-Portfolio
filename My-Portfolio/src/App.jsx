import { useState } from 'react'
import './App.css'
import './styles/design-system.css'
import Home from './pages/Home'
import AboutMe from './pages/AboutMe'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home />
      <AboutMe />
    </>
  )
}

export default App
