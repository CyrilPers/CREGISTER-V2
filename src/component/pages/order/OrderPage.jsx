import React from 'react'
import Navbar from './Navbar'
import { styled } from 'styled-components'
import { theme } from '../../../theme'
import Main from './Main'
import { useParams } from 'react-router'

export default function OrderPage() {
  // State
  const { username } = useParams()

  // Comportements

  return (
    <OrderPageStyled>
    <div className='container'>
      <Navbar username={username} />
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
    height: 95vh;
    width: 1400px;
    display: flex;
    flex-direction: column;
    padding: 0 20px;
    border-radius: ${theme.borderRadius.extraRound}
  }  
`;