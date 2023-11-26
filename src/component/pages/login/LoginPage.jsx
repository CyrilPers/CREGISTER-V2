import React from 'react'
import LoginForm from './LoginForm'
import { styled } from 'styled-components'
import LoginLeft from './Left/LoginLeft'


export default function LoginPage() {

  return (
    <LoginPageStyled>
      <LoginLeft />
      <LoginForm />
    </LoginPageStyled>

  )
}

const LoginPageStyled = styled.div`
    height: 100vh;
    display: flex;
    box-sizing: border-box;
    width: 100%;
    padding: 0 10%;
    justify-content: space-around;
    align-items: center;

    background: 
        linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
        url('/images/background.png') fixed center/cover;

    @media(max-width: 767px) {
      max-width: 100%;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
`;