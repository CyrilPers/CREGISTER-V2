import { useState } from "react"
import { createInvoiceFromApi, deleteInvoiceFromApi, editInvoiceFromApi } from "../API/invoice"
import { deepClone, removeItemFromArray } from "../utils/arrays"

export const useInvoices = () => {
    const [invoices, setInvoices] = useState([])
    const [customer, setCustomer] = useState()
    const [invoice, setInvoice] = useState()

    const editInvoice = (invoice, newCustomer) => {
        setCustomer(newCustomer)
        editInvoiceFromApi(invoice, newCustomer)
    }


    const createInvoice = async (userId, setInvoiceId) => {
        let newInvoiceApi;
        await createInvoiceFromApi(userId)
            .then(apiResponse => {
                newInvoiceApi = apiResponse;
            });
        setInvoiceId(newInvoiceApi.id);
    }


    const deleteInvoice = async (invoiceId) => {
        await deleteInvoiceFromApi(invoiceId)
        const invoicesCopy = deepClone(invoices)
        const invoicesUpdated = removeItemFromArray(invoiceId, invoicesCopy)
        setInvoices(invoicesUpdated)
    }


    return { invoices, setInvoices, editInvoice, customer, setCustomer, invoice, setInvoice, deleteInvoice, createInvoice }
}

