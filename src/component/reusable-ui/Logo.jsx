import React from 'react'
import { styled } from 'styled-components';
import { theme } from '../../theme';

export default function Logo() {
  return (
    <LogoStyled>
    <div>
        <h1>CRAZY <img src='src/pictures/logo-orange.png' alt="logo" />BURGER</h1>

    </div>
    </LogoStyled>
  )
}

const LogoStyled = styled.div`


    background: blue;
    color: ${theme.colors.primary};
    text-align: center;
    font-family: Amatic SC;
    font-style: normal;
    font-size: ${theme.fonts.P5};
    font-weight: ${theme.weights.bold};
    text-transform: uppercase; 



    img {
        width: 200px;
        height: 150px;
        flex-shrink: 0;
    }
`;

