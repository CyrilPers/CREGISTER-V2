import React from 'react'
import { useState } from "react"


export default function LoginPage() {

    // State
    const [inputValue, setInputValue] = useState("")


    // Comportement
    const handleSubmit = (event) => {
      event.preventDefault()
      alert(`Bonjour ${inputValue}`)
      setInputValue("")
    }

    const handleChange = (event) => { 
      setInputValue(event.target.value)
     }
    
  return (
    <div> 
    <h1>Bienvenue chez nous !</h1>
    <br />
    <h2>Connectez vous</h2>
      <form action="submit" onSubmit={handleSubmit}>
          <input
          type="text"
          Placeholder="Entrez votre prénom..."
          value={inputValue}
          onChange={handleChange}
          required
          />
          <button>Accéder à votre espace</button>
      </form>
    </div>
  )
}
