import React from 'react'
import { styled } from 'styled-components';
import { theme } from '../../../theme';
import Menu from './Menu';

export default function Main() {
  return (
    <MainStyled>
        <div className='basket'>basket</div>
        <Menu />
    </MainStyled>
  )
}

const MainStyled = styled.div`
    background-color: ${theme.colors.background_white};
    flex: 1;

    box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset ;
    border-radius: 0px 0px 15px 15px;

    display: grid;
    grid-template-columns: 1fr;

    overflow-y: scroll;
    
    .basket {
      background-color: red;
    }

    `;