import React from 'react'
import InvoiceCustomer from './InvoiceCustomer'
import EmptyBasket from './EmptyBasket'
import BasketFooter from './BasketFooter'
import { isEmpty } from '../../../../../utils/arrays.jsx'
import BasketProducts from './BasketProducts'

export default function InvoiceLeft({ isLoading,
    basket,
    customers,
    customer,
    setCustomer,
    editInvoice,
    invoice }) {
    return (
        <>
            <InvoiceCustomer customers={customers} customer={customer} setCustomer={setCustomer} editInvoice={editInvoice} invoice={invoice} />
            {isEmpty(basket) ? <EmptyBasket isLoading={basket === undefined} /> : <BasketProducts />}
            <BasketFooter basket={basket} />
        </>
    )
}
