import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import { theme } from '../../../theme';
import { IoChevronForward } from "react-icons/io5";
import { BsPersonCircle } from "react-icons/bs"
import TextInput from '../../reusable-ui/TextInput';
import PrimaryButton from '../../reusable-ui/PrimaryButton';



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
    
  // Affichage
  return (
    <LoginFormStyled action="submit" onSubmit={handleSubmit}>
    <div>
      <h1>GEREZ VOS COMMANDES !</h1>
      <hr />
      <h2>Connectez vous</h2>
    </div>
    <TextInput 
      value={username} 
      onChange={handleChange} 
      placeholder={"Entrez votre prénom"}
      required
      Icon={<BsPersonCircle className="icon" />}
    />
    <PrimaryButton
      label={"Accéder à mon espace"}
      Icon={<IoChevronForward className="icon"/>}
    />
  </LoginFormStyled>
  )
}

const LoginFormStyled = styled.form`

  max-width: 500px;
  min-width: 400px;
  margin: 0px auto;
  padding: 40px 32px;
  border-radius: ${theme.borderRadius.round};
  font-family: "Amatic SC", cursive;

  hr{
    border: 1.5px solid ${theme.colors.loginLine};
    margin-bottom: 40px;
  }

  h1{
    font-size: ${theme.fonts.P5};
    color: ${theme.colors.white};
  }

  h2{
    font-size: ${theme.fonts.size.P4};
    color: ${theme.colors.white};

  }

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${theme.fonts.size.P0};
  }
  
`;
