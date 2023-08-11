import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from "styled-components"
import { theme } from '../../../theme'
import {BsPersonCircle} from "react-icons/bs";

export default function LoginForm() {

  // State
  const [username, setUsername] = useState("")
  const navigate = useNavigate()

  // Comportement
  const handleSubmit = (event) => {
    event.preventDefault()
    navigate(`/order/${username}`)
  }

  const handleChange = (event) => { 
    setUsername(event.target.value)
    }
    


  return (
    <LoginFormStyled action="submit" onSubmit={handleSubmit}>
    <h1>Bienvenue chez nous !</h1>
    <div className="hr"></div>
    <h2>Connectez vous</h2>
    <div className="input">
      <BsPersonCircle />
      <input
        type="text"
        placeholder="Entrez votre prénom"
        value={username}
        onChange={handleChange}
        required
      />
    </div>
    <button>Accéder à mon espace</button>
  </LoginFormStyled>
  )
}

const LoginFormStyled = styled.form`
  /*
  
  background: green;
  text-align: center; 
  display: flex;
  flex-direction: column;
  align-items: center;

  h1{
    font-size: ${theme.fonts.P5};
    color: ${theme.colors.white};
    font-family: Amatic SC; 
  }

  .hr{
    width: 400px;
    border: 1px solid ${theme.colors.primary}
  }

  h2{
    font-size: ${theme.fonts.P4};
    color: ${theme.colors.white};
    font-family: Amatic SC; 

  }

  .input{
    border-radius: ${theme.borderRadius.round};
    padding: 18 18 24 24;
    width: 400px;
    height: 53px;
    background-color: ${theme.colors.white}
    
  }

  input{
    align-items: center;

  }

  button {
    /*margin-top: 18px;    
    border: 1px solid ${theme.colors.primary};
    border-radius: ${theme.borderRadius.round};
    display: flex;
    width: 400px;
    height: 53px;
    padding: 18px;
    justify-content: center;
    align-items: flex-start;
    flex-shrink: 0; 
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
    font-size: ${theme.fonts.P0};
    font-weight: ${theme.weights.bold};
    line-height: 15px;
    text-align: center;
    font-family: Arial; 
    
  }
 */
`;
