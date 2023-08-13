import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Navbar from './Navbar'
import { styled } from 'styled-components'
import { theme } from '../../../theme'
import Main from './Main'

export default function OrderPage() {
  // State
  const { username } = useParams()

  // Comportements

  return (
    <OrderPageStyled>
    <div className='container'>
      <Navbar 
        username={username}
      />
      <Main />
      </div>
    </OrderPageStyled>
  )
}

const OrderPageStyled = styled.div`  
  background-color: ${theme.colors.primary};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    background: red;
    height: 95vh;
    width: 1400px;
    display: flex;
    flex-direction: column;
    /* Utiliser min-width 1400px et width:100% */
  }  
`;