import React, { useState } from 'react'
import { styled } from 'styled-components';
import Profil from './Profile';
import ToggleButton from '../reusable-ui/ToggleButton';


export default function NavbarUser({username}) {
  return (
    <NavbarUserStyled> 
        <ToggleButton  
          labelIfChecked='DÉSACTIVER LE MODE ADMIN' 
          labelIfUnchecked='ACTIVER LE MODE ADMIN'
        />
        <Profil username={username} />
    </NavbarUserStyled>
  )
}

const NavbarUserStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;