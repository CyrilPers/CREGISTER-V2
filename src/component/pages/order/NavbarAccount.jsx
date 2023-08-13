import React from 'react'
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export default function NavbarAccount({username}) {
  return (
    <NavbarAccountStyled> 
        Bonjour,{username}
        <Link to="/">
        <button>Déconnexion</button>
        </Link>
    </NavbarAccountStyled>
  )
}

const NavbarAccountStyled = styled.div`
  
`;