import React from 'react'
import Logo from '../../../reusable-ui/Logo';
import { theme } from '../../../../theme';
import styled from 'styled-components';
import { fadeInFromTopLog } from '../../../../theme/animations';

export default function LoginLeft() {
  return (
    <LoginLeftStyled>
      <Logo className={"logo-login-page"} />
      <h1 className='info'>Votre gestionnaire de commande</h1>
      <h2 className='info'>Simple d'utilisation</h2>
    </LoginLeftStyled>
  )
}

const LoginLeftStyled = styled.div`
display: flex;
width: 50%;
flex-direction: column;
justify-content: center;
align-items: center;
font-family: ${theme.fonts.family.stylish};
animation: ${fadeInFromTopLog} ease-out ${theme.animation.speed.verySlow};


.info {
    font-weight: ${theme.fonts.weights.light};
    color: ${theme.colors.white};

}
h1{
    font-size: ${theme.fonts.size.P4};
  }

h2{
    font-size: ${theme.fonts.size.P4};
  }     
  
.logo-login-page {
    transform: scale(2.5);
    margin-bottom: 50px;
  }

  @media(max-width: 767px) {
    .info {
      display: none;
    }
    .logo-login-page {
      transform: scale(2);
      margin-bottom: 10px;
    }
  }
`;