import React from 'react'
import { styled } from 'styled-components';

export default function EmptyMenuAdmin( onClick ) {
  return (
    <EmptyMenuAdminStyled className='no-prodducts'>
        <span>Pas de produit</span>
        <button onClick={onClick}>Reset Menu</button>
        </EmptyMenuAdminStyled>
  )
}

const EmptyMenuAdminStyled  = styled.div`
  
`;