import React from 'react'
import { styled } from 'styled-components';
import { theme } from '../../theme';


export default function Logo({ className, onClick }) {
  return (
    <LogoStyled className={className} onClick={onClick}>
      <h1>MY</h1>
      <img src='/images/logo.png' alt="logo" />
      <h1>POS</h1>
    </LogoStyled>
  )
}

const LogoStyled = styled.div`
    display: flex;
    align-items: center;
    
    h1{
    display: inline;
    color: ${theme.colors.primary};
    font-style: normal;
    line-height: 1em;
    font-size: ${theme.fonts.size.P4};
    font-weight: ${theme.fonts.weights.bold};
    text-transform: uppercase; 
    letter-spacing: 1.5px;
    font-family:  ${theme.fonts.family.stylish};
    }


    img {
        object-fit: contain;
        object-position: center;
        width: 80px;
        height: 80px;
        margin: 0;
    }
`;

