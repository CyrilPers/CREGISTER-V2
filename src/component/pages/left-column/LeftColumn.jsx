import React from 'react'
import { styled } from 'styled-components';
import { theme } from '../../../theme/index.jsx'

export default function LeftColumn() {
    return (
        <LeftColumnStyled>
            <div className='header'>Header</div>
            <div className='body'>body</div>
            <div className='footer'>footer</div>
        </LeftColumnStyled>
    )
}

const LeftColumnStyled = styled.div`
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
        box-shadow: ${theme.shadows.leftColumn};
    }
    .footer {
        height: 70px;
        background: ${theme.colors.background_dark};
    }
`;