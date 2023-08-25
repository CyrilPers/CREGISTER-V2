import React from 'react'
import { styled } from 'styled-components';
import { theme } from '../../../theme/index.jsx'

export default function Basket() {
    return (
        <BasketStyled>
            <div className='header'>Header</div>
            <div className='body'>body</div>
            <div className='footer'>footer</div>
        </BasketStyled>
    )
}

const BasketStyled = styled.div`
    background: pink;
    display: flex;
    flex-direction: column;

    .header {
        height: 70px;
        background: ${theme.colors.background_dark};
    }
    .body {
        background: ${theme.colors.background_white};
        flex: 1;
    }
    .footer {
        height: 70px;
        background: ${theme.colors.background_dark};
    }
`;