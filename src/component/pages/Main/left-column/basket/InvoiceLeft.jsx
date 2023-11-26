import React from 'react'
import InvoiceCustomer from './InvoiceCustomer'
import EmptyBasket from './EmptyBasket'
import { isEmpty } from '../../../../../utils/arrays.jsx'
import BasketProducts from './BasketProducts'
import BasketFooter from './BasketFooter'

export default function InvoiceLeft({
    totalBasket,
    basket,
    customers,
    customer,
    setCustomer,
    editInvoice,
    getPdf,
    invoice,
    invoiceId,
    setCurrentPage,
    setIsModeAdmin }) {
    return (
        <>
            <InvoiceCustomer setCurrentPage={setCurrentPage} setIsModeAdmin={setIsModeAdmin} basket={basket} customers={customers} customer={customer} setCustomer={setCustomer} editInvoice={editInvoice} invoice={invoice} />
            {isEmpty(basket) ? <EmptyBasket isLoading={basket === undefined} /> : <BasketProducts />}
            <BasketFooter invoiceId={invoiceId} getPdf={getPdf} totalBasket={totalBasket} basket={basket} />
        </>
    )
}
