import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function OrderPage() {


  return (
    <div>
        <h1>`Bonjour ${inputValue}`</h1>
        <br />
        <Link to="/">
        <button onChange={handleClick}>Déconnexion</button>
        </Link>

    </div>
  )
}
