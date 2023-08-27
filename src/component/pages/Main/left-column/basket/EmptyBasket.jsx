import React from 'react'
import { styled } from 'styled-components';
import { theme } from '../../../../../theme';

export default function EmptyBasket() {
    return (
        <EmptyBasketStyled>
            <span>Votre commande est vide.</span>
        </EmptyBasketStyled>
    )
}


const EmptyBasketStyled = styled.span`
background: ${theme.colors.background_white};
flex: 1;
box-shadow: ${theme.shadows.leftColumn};

    span {
    padding : 0 16px;
    display: flex;
    height: calc(85vh - 70px - 70px);
    text-align: center;
    flex: 1;
    justify-content: center;
    align-items: center;
    align-self: center;
    line-height: 2;
    font-family: ${theme.fonts.family.stylish};
    font-size: ${theme.fonts.size.P4};
    color: ${theme.colors.greyBlue}
    }
`;