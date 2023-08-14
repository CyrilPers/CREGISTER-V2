import React, { useState } from 'react'
import { styled } from 'styled-components';
import { fakeMenu2 } from '../../../fakeData/fakeMenu';
import { theme } from '../../../theme';


export default function Menu() {

  const [products, setProducts] = useState(fakeMenu2)

  return (
    <MenuStyled className='menu'>
        {products.map((produit, index)=>{
          return <div key={index} className='produit'>{produit.title}</div>
        })}
    </MenuStyled>
  )
}

const MenuStyled = styled.div`
  background-color: blue;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 60px;
  padding: 50px 50px 150px;
  justify-items: center;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  background: ${theme.colors.background_white};



  .produit {
    width: 240px;
    height: 330px;
    box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
    border-radius: ${theme.borderRadius.extraRound}
  }
`;