import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import backgroundImage from './assets/new-background.png'
import './App.css'
import './styles/design-system.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Hero />
      <style>
        {`
          body {
            background-image: url(${backgroundImage});
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            background-attachment: fixed;
          }
        `}
      </style>
    </>
  )
}

export default App
