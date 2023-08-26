import React from 'react'
import { styled } from 'styled-components';
import { theme } from '../../../../../theme';
import EmptyBasket from './EmptyBasket';

export default function BasketBody() {
    return (
        <BasketBodyStyled>

        </BasketBodyStyled>
    )
}

const BasketBodyStyled = styled.div`
        background: ${theme.colors.background_white};
        flex: 1;
        box-shadow: ${theme.shadows.leftColumn};
`;