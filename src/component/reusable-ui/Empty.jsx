import React from 'react'
import { styled } from 'styled-components';
import { theme } from '../../theme';
import Button from './Button';

export default function Empty({ onClick, title, description, label }) {
  return (
    <EmptyStyled className='no-prodducts'>
      <span className='title'>{title}</span>
      <span className='description'>{description}</span>
      <Button label={label} onClick={onClick} />
    </EmptyStyled>
  )
}

const EmptyStyled = styled.div`
  background-color: ${theme.colors.background_white};
  box-shadow: ${theme.shadows.strong};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 

  .title,
  .description {
    text-align: center;
    font-family: ${theme.fonts.family.stylish};
    color: ${theme.colors.greyBlue};
  }

  .title {
    font-size: ${theme.fonts.size.P4};
    font-weight: ${theme.fonts.weights.semiBold};
  }

  .description {
    font-size: ${theme.fonts.size.P4};
    margin-top: 20px;
  }

  button {
    margin-top: 30px;
    font-size: ${theme.fonts.size.XS};
    width: auto;
  } 
`;