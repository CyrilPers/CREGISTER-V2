import React from 'react'
import { styled } from 'styled-components';

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
        background: red;
    }
    .body {
        background: blue;
    }
    .footer {
        background: green;
    }
`;