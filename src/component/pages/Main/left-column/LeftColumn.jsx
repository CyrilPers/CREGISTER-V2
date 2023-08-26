import React from 'react'
import { styled } from 'styled-components';
import { theme } from '../../../../theme/index.jsx'
import LeftColumnFooter from './basket/LeftColumnFooter.jsx';
import Total from './basket/Total.jsx';
import { formatPrice } from '../../../../utils/maths'
import LeftColumnBody from './basket/LeftColumnBody.jsx';

export default function LeftColumn() {

    return (
        <LeftColumnStyled>
            <Total amountToPay={formatPrice(0)} />
            <LeftColumnBody />
            <LeftColumnFooter />
        </LeftColumnStyled>
    )
}

const LeftColumnStyled = styled.div`
    background: pink;
    display: flex;
    flex-direction: column;

`;