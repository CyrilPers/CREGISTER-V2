import React, { useContext } from 'react'
import { styled } from 'styled-components';
import AdminContext from '../../../../context/AdminContext.jsx'
import Total from './basket/Total.jsx';
import BasketFooter from './basket/BasketFooter.jsx';
import BasketProducts from './basket/BasketProducts.jsx';
import EmptyBasket from './basket/EmptyBasket.jsx'
import { theme } from '../../../../theme/index.jsx';
import { isEmpty } from '../../../../utils/arrays.jsx';

export default function LeftColumn() {
    const { basket, products } = useContext(AdminContext)

    return (
        <LeftColumnStyled>
            <Total />
            {isEmpty(basket) ? <EmptyBasket isLoading={products === undefined} /> : <BasketProducts />}
            <BasketFooter />
        </LeftColumnStyled>
    )
}

const LeftColumnStyled = styled.div`
    background: ${theme.colors.background_white};
    box-shadow: ${theme.shadows.leftColumn};
    border-bottom-left-radius: ${theme.borderRadius.extraRound};
    display: flex;
    flex-direction: column;
    height: 85vh;   

    @media(max-width: 767px) {
        height: 40vh;
    }
`;