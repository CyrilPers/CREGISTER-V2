import React, { useContext, useEffect } from 'react'
import { styled } from 'styled-components';
import AdminContext from '../../../../context/AdminContext.jsx'
import BasketFooter from './basket/BasketFooter.jsx';
import BasketProducts from './basket/BasketProducts.jsx';
import EmptyBasket from './basket/EmptyBasket.jsx'
import { theme } from '../../../../theme/index.jsx';
import { isEmpty } from '../../../../utils/arrays.jsx';
import { initialiseBasket } from '../../order/helpers/initialiseUserSession.jsx';
import InvoiceCustomer from './basket/InvoiceCustomer.jsx';

export default function LeftColumn() {
    const { basket, setBasket, invoiceId, customers } = useContext(AdminContext)

    useEffect(() => {
        initialiseBasket(invoiceId, setBasket)
    }, [])


    return (
        <LeftColumnStyled>
            <InvoiceCustomer customers={customers} />
            {isEmpty(basket) ? <EmptyBasket isLoading={basket === undefined} /> : <BasketProducts />}
            <BasketFooter basket={basket} />
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
        max-height: calc(50%);
        overflow-x: hidden;
    }
`;