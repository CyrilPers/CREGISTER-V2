import React, { useState } from 'react'
import { styled } from 'styled-components';
import { fakeMenu2 } from '../../../fakeData/fakeMenu';


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


  .produit {
    background: yellow;
    width: 240px;
    height: 330px;

  }
`;