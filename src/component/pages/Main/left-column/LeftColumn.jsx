import React, { useContext, useEffect } from 'react'
import { styled } from 'styled-components';
import AdminContext from '../../../../context/AdminContext.jsx'
import { theme } from '../../../../theme/index.jsx';
import InvoicesLeft from './invoices/InvoicesLeft.jsx';
import CustomersLeft from './customers/CustomersLeft.jsx';
import InvoiceLeft from './basket/InvoiceLeft.jsx';

export default function LeftColumn() {
    const { setCurrentPage, setIsModeAdmin, getPdf, setTotalBasket, totalBasket, initialiseBasket, initialiseInvoice, editInvoice, basket, setBasket, invoices, invoiceId, invoice, customers, setCustomer, customer, setInvoice, currentPage } = useContext(AdminContext)

    useEffect(() => {
        initialiseBasket(invoiceId, setBasket)
        initialiseInvoice(invoiceId, setCustomer, setInvoice, setTotalBasket)
    }, [invoiceId])

    return (
        <LeftColumnStyled>
            {currentPage === "invoice" && <InvoiceLeft setCurrentPage={setCurrentPage} setIsModeAdmin={setIsModeAdmin} invoiceId={invoiceId} getPdf={getPdf} totalBasket={totalBasket} basket={basket} customers={customers} customer={customer} setCustomer={setCustomer} editInvoice={editInvoice} invoice={invoice} />}
            {currentPage === "invoices" && <InvoicesLeft invoices={invoices} />}
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