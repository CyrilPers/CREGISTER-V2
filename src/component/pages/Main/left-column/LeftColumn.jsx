import React from 'react'
import { styled } from 'styled-components';
import { theme } from '../../../../theme/index.jsx'
import Header from '../../../reusable-ui/Header.jsx';
import Footer from '../../../reusable-ui/Footer.jsx';

export default function LeftColumn() {
    return (
        <LeftColumnStyled>
            <Header
            />
            <div className='body'>body</div>
            <Footer
            />
        </LeftColumnStyled>
    )
}

const LeftColumnStyled = styled.div`
    background: pink;
    display: flex;
    flex-direction: column;
    
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