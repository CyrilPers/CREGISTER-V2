import React, { useContext } from 'react'
import { styled } from 'styled-components';
import Total from './basket/Total.jsx';
import { formatPrice } from '../../../../utils/maths.jsx'
import AdminContext from '../../../../context/AdminContext.jsx';
import BasketFooter from './basket/BasketFooter.jsx';
import BasketProducts from './basket/BasketProducts.jsx';
import EmptyBasket from './basket/EmptyBasket.jsx'
import { theme } from '../../../../theme/index.jsx';

export default function LeftColumn() {

    const { basket } = useContext(AdminContext)
    const isBasketEmpty = basket.length === 0

    const basketTotal = basket.reduce((total, basketProduct) => {

        return total += basketProduct.price * basketProduct.quantity
    }, 0)


    return (
        <LeftColumnStyled>
            <Total amountToPay={formatPrice(basketTotal)} />
            {isBasketEmpty ? <EmptyBasket /> : <BasketProducts basket={basket} />}
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
`;