import React, { useContext } from 'react'
import { styled } from 'styled-components';
import { theme } from '../../../../../theme';
import Header from '../../../../reusable-ui/Header.jsx'
import { formatPrice } from '../../../../../utils/maths';
import { calculateSumToPay } from './Helper';
import AdminContext from '../../../../../context/AdminContext';
import CasinoEffect from '../../../../reusable-ui/CasinoEffect';

export default function Total({ }) {

    const { basket, products } = useContext(AdminContext)
    const sumToPay = calculateSumToPay(basket, products)


    return (
        <Header>
            <TotalStyled>
                <span className='total'>Total</span>
                <CasinoEffect count={formatPrice(sumToPay)} />
            </TotalStyled>
        </Header>
    )
}

const TotalStyled = styled.div`
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${theme.colors.primary};
    font-family: ${theme.fonts.family.stylish};
    font-size: ${theme.fonts.size.P4};
    font-weight: ${theme.fonts.weights.bold};
    letter-spacing: 2px;  
`;