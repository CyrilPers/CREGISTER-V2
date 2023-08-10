import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function OrderPage() {

    // State
    const navigate = useNavigate()
    

    // Comportement
    const handleClick = () => {
        navigate('/')
    }



  return (
    <div>
        <h1>`Bonjour ${inputValue}`</h1>
        <br />
        <button onChange={handleClick}>Déconnexion</button>

    </div>
  )
}
