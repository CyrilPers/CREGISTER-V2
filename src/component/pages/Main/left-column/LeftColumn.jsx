import React, { useContext } from 'react'
import { styled } from 'styled-components';
import Total from './basket/Total.jsx';
import { formatPrice } from '../../../../utils/maths.jsx'
import AdminContext from '../../../../context/AdminContext.jsx';
import BasketFooter from './basket/BasketFooter.jsx';
import BasketProducts from './basket/BasketProducts.jsx';
import EmptyBasket from './basket/EmptyBasket.jsx'

export default function LeftColumn() {

    const { basket } = useContext(AdminContext)

    const isBasketEmpty = basket.length === 0

    return (
        <LeftColumnStyled>
            <Total amountToPay={formatPrice(0)} />
            {isBasketEmpty ? <EmptyBasket /> : <BasketProducts basket={basket} />}
            <BasketFooter />
        </LeftColumnStyled>
    )
}

const LeftColumnStyled = styled.div`
    background: pink;
    display: flex;
    flex-direction: column;

`;