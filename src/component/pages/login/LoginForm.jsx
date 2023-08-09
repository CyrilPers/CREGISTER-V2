import React, { useState } from 'react'

export default function LoginForm() {

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
    <form action="submit" onSubmit={handleSubmit}>
    <h1>Bienvenue chez nous !</h1>
    <br />
    <h2>Connectez vous</h2>
    <input
      type="text"
      placeholder="Entrez votre prénom..."
      value={inputValue}
      onChange={handleChange}
      required
    />
    <button>Accéder à votre espace</button>
  </form>
  )
}
