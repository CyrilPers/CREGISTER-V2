import React from 'react'
import { styled } from 'styled-components';
import { theme } from '../../../../../theme';

export default function BasketProducts() {
    return (
        <BasketProductsStyled>
            Products
        </BasketProductsStyled>
    )
}

const BasketProductsStyled = styled.div`
        background: ${theme.colors.background_white};
        flex: 1;
        box-shadow: ${theme.shadows.leftColumn};
`;