import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from "styled-components"
import { theme } from '../../../theme'
import {BsPersonCircle} from "react-icons/bs";
import {IoChevronForward} from "react-icons/io5";
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
    <hr />
    <h2>Connectez vous</h2>
    <div className="input-container">
      <BsPersonCircle className="icon" />
      <input
        type="text"
        placeholder="Entrez votre prénom"
        value={username}
        onChange={handleChange}
        required
      />
    </div>
    <button className="button-container">
    <span>Accéder à mon espace </span>
    <IoChevronForward className="icon"/>
    </button>
  </LoginFormStyled>
  )
}

const LoginFormStyled = styled.form`

  max-width: 500px;
  min-width: 400px;
  margin: 0px auto;
  padding: 2.5rem 2rem;
  border-radius: 5px;
  font-family: "Amatic SC", cursive;

  hr{
    border: 1.5px solid ${theme.colors.primary};
    margin-bottom: 40px;
  }

  h1{
    font-size: ${theme.fonts.P5};
    color: ${theme.colors.white};
  }

  h2{
    font-size: ${theme.fonts.P4};
    color: ${theme.colors.white};

  }

  .input-container{
    border-radius: ${theme.borderRadius.round};
    padding: 18px 24px;;
    display: flex;
    align-items: center;
    margin: 18px 0;
    background-color: ${theme.colors.white};

    .icon {
      font-size: 15px;
      margin-right: 8px; 
      min-width: 1em;  
    }

  }

  input{
    align-items: center;
    width: 100%; 

  }

  .button-container {
    width: 100%;
    border: 1px solid ${theme.colors.primary};
    border-radius: ${theme.borderRadius.round};
    display: inline-flex;
    padding: 18px 24px;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
    font-size: ${theme.fonts.P0};
    font-weight: ${theme.weights.bold};
    line-height: 15px;
    text-align: center;
    font-family: Arial; 

    &:hover {
      background-color: ${theme.colors.white};
      color: ${theme.colors.primary};
      border: 1px solid ${theme.colors.primary};
      transition: all 200ms ease-out;
    }

    &:active {
      color: ${theme.colors.white};
      background-color: ${theme.colors.primary};
      border: 1px solid ${theme.colors.primary};
    }

    .icon {
      color: ${theme.colors.white};
    }
  }

 
`;
