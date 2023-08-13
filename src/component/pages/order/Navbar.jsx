import React from 'react'
import Logo from '../../reusable-ui/Logo';
import { styled } from 'styled-components';
import { theme } from '../../../theme';
import { Link } from 'react-router-dom';

export default function Navbar({username}) {


  return (
    <NavbarStyled>
    <Logo className="logo"/>   
    <div className="account"> 
        Hey,{username}
        <Link to="/">
        <button>Déconnexion</button>
        </Link>
    </div>
    </NavbarStyled>

  )
}

const NavbarStyled = styled.div`
    background-color: ${theme.colors.blue};
    height: 10vh;
    display: inline-flex;
  
  .logo {

  }

  .account {

  } 
`;