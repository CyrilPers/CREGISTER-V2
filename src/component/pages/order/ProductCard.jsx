import React from 'react'
import { styled } from 'styled-components';
import { theme } from '../../../theme';

export default function ProductCard({title, price, imageSource, index}) {
  return (
    <ProductCardStyled key={index} className='product'>
    <div className='image'>
      <img src={imageSource} alt={title} />
    </div>
      <div className='description'>
        <div className='title'>{title}</div>
        <div className='price'>{price}</div>
        <button className='add-to-cart'>Ajouter</button>
      </div>
    </ProductCardStyled>
  )
}

const ProductCardStyled = styled.div`
  width: 240px;
  height: 330px;
  box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
  border-radius: ${theme.borderRadius.extraRound};
  
  .title {

  }

  .image {
    border: 1px solid fuchsia;
    width: 100px;
    height: auto;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  
  }   

`;