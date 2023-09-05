import React from 'react'
import { styled } from 'styled-components';
import { theme } from '../../../../../theme';

export default function EditInfoMessage() {
  return (
    <EditInfoMessageStyled>
      Cliquer sur un produit pour le modifier {" "}
      <span className='live-update'>en temps réél</span>
    </EditInfoMessageStyled>
  )
}


const EditInfoMessageStyled = styled.span`
    color : ${theme.colors.primary};
    font-size: ${theme.fonts.size.SM};

        .live-update {
            text-decoration: underline;
        }  
    @media(max-width: 767px) {
    font-size: ${theme.fonts.size.XS}; 
  }
`;