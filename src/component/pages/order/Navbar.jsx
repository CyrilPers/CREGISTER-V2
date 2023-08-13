import React from 'react'
import Logo from '../../reusable-ui/Logo';
import { styled } from 'styled-components';
import { theme } from '../../../theme';
import NavbarAccount from './NavbarAccount';
import { refreshPage } from '../../../utils/window';

export default function Navbar({username}) {

  return (
    <NavbarStyled>
    <Logo onClick={refreshPage} className={"logo-order-page"} />   
    <NavbarAccount username={username} /> 
    </NavbarStyled>

  )
}

const NavbarStyled = styled.div`
    background-color: ${theme.colors.white};
    height: 10vh;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;

    border-top-left-radius: ${theme.borderRadius.extraRound};
    border-top-right-radius: ${theme.borderRadius.extraRound};

    .logo-order-page {
      cursor: pointer;
    }

`;