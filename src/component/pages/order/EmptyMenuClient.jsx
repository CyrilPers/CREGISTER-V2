import React from 'react'
import { styled } from 'styled-components';

export default function EmptyMenuClient() {
  return (
    <EmptyMenuClientStyled className='no-prodducts'>
        <span>Pas de produit disponibles</span>
        </EmptyMenuClientStyled>
  )
}

const EmptyMenuClientStyled = styled.div`
  
`;