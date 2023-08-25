import React from 'react'
import { styled } from 'styled-components';
import { theme } from '../../../../theme/index.jsx'
import Footer from '../../../reusable-ui/Footer.jsx';
import Total from './basket/Total.jsx';
import { formatPrice } from '../../../../utils/maths'

export default function LeftColumn() {

    return (
        <LeftColumnStyled>
            <Total amountToPay={formatPrice(0)} />
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