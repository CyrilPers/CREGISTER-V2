import React, { useContext } from 'react'
import { styled } from 'styled-components';
import { theme } from '../../../../../theme';
import Header from '../../../../reusable-ui/Header.jsx'
import { formatPrice } from '../../../../../utils/maths';
import { calculateSumToPay } from './helper';
import AdminContext from '../../../../../context/AdminContext';

export default function Total({ }) {

    const { basket, products } = useContext(AdminContext)
    const sumToPay = calculateSumToPay(basket, products)


    return (
        <Header>
            <TotalStyled>
                <span className='total'>Total</span>
                <span className='amount'>{formatPrice(sumToPay)}</span>
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