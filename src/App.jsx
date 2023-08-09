import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
      <div className="App">
        <header className="App-header">
        <img src={viteLogo} className="logo" alt="Vite logo" />
        <p>Salut</p>
        <a 
        className="App-link"
        href="https://vitejs.dev" 
        target="_blank"
        rel="noopener noreferrer"
        >
          Learn React
        </a>
        </header>
      </div>
  )
}

export default App
