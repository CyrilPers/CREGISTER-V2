import React from 'react'
import { styled } from 'styled-components';
import Profil from './Profile';


export default function NavbarUser({username}) {
  return (
    <NavbarUserStyled> 
        <div className='admin-button'>Admin button </div>
        <Profil username={username} />
    </NavbarUserStyled>
  )
}

const NavbarUserStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    .admin-button {
      padding-right: 20px;
    }

`;