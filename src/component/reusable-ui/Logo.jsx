import React from 'react'
import { styled } from 'styled-components';
import { theme } from '../../theme';

export default function Logo({className}) {
  return (
    <LogoStyled className={className}>
        <h1>MY</h1>
        <img src='/images/logo-orange.png' alt="logo" />
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
    font-size: ${theme.fonts.P4};
    font-weight: ${theme.weights.bold};
    text-transform: uppercase; 
    letter-spacing: 1.5px;
    font-family: Amatic SC, cursive;
    }


    img {
        object-fit: contain;
        object-position: center;
        width: 80px;
        height: 60px;
        margin: 0 5px;
    }
`;

