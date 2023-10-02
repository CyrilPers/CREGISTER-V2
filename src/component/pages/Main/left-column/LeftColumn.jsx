import React, { useContext, useEffect } from 'react'
import { styled } from 'styled-components';
import AdminContext from '../../../../context/AdminContext.jsx'
import BasketFooter from './basket/BasketFooter.jsx';
import BasketProducts from './basket/BasketProducts.jsx';
import EmptyBasket from './basket/EmptyBasket.jsx'
import { theme } from '../../../../theme/index.jsx';
import { isEmpty } from '../../../../utils/arrays.jsx';
import InvoiceCustomer from './basket/InvoiceCustomer.jsx';
import InvoicesLeft from './invoices/InvoicesLeft.jsx';
import CustomersLeft from './customers/CustomersLeft.jsx';

export default function LeftColumn() {
    const { initialiseBasket, initialiseInvoice, editInvoice, basket, setBasket, invoices, invoiceId, invoice, customers, setCustomer, setCustomers, customer, setInvoice, currentPage } = useContext(AdminContext)

    useEffect(() => {
        initialiseBasket(invoiceId, setBasket)
        initialiseInvoice(invoiceId, setCustomer, setInvoice)
    }, [invoiceId])

    return (
        <LeftColumnStyled>


            {/*!!!!!!!!!!!!!! A REFACTORISER !!!!!!!!!!!!!!!*/}


            {/* INVOICE */}
            {currentPage === "invoice" && <InvoiceCustomer customers={customers} customer={customer} setCustomer={setCustomer} editInvoice={editInvoice} invoice={invoice} />}
            {currentPage === "invoice" && (isEmpty(basket) ? <EmptyBasket isLoading={basket === undefined} /> : <BasketProducts />)}
            {currentPage === "invoice" && <BasketFooter basket={basket} />}

            {/* INVOICES */}
            {currentPage === "invoices" && <InvoicesLeft invoices={invoices} />}

            {/* CUSTOMERS */}
            {currentPage === "customers" && <CustomersLeft customers={customers} />}

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