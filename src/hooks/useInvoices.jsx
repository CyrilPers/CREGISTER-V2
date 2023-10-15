import { useState } from "react"
import { createInvoiceFromApi, createPdfFromApi, deleteInvoiceFromApi, editInvoiceFromApi } from "../API/invoice"
import { deepClone, removeItemFromArray } from "../utils/arrays"
import { decodePdfToLink } from '../utils/decoder.jsx'

export const useInvoices = () => {
    const [invoices, setInvoices] = useState([])
    const [customer, setCustomer] = useState()
    const [invoice, setInvoice] = useState()

    const editInvoice = (invoice, newCustomer, basket) => {
        setCustomer(newCustomer)
        editInvoiceFromApi(invoice, newCustomer, basket)
    }


    const createInvoice = async (userId, setInvoiceId) => {
        let newInvoiceApi;
        await createInvoiceFromApi(userId)
            .then(apiResponse => {
                newInvoiceApi = apiResponse;
            });
        setInvoiceId(newInvoiceApi.id);
    }

    const getPdf = async (invoiceId) => {
        let pdfEncoded
        await createPdfFromApi(invoiceId)
            .then(apiResponse => {
                pdfEncoded = apiResponse;
            })

        const pdfLink = await decodePdfToLink(pdfEncoded)
        window.open(pdfLink, '_blank');
    }



    const deleteInvoice = async (invoiceId) => {
        await deleteInvoiceFromApi(invoiceId)
        const invoicesCopy = deepClone(invoices)
        const invoicesUpdated = removeItemFromArray(invoiceId, invoicesCopy)
        setInvoices(invoicesUpdated)
    }


    return { getPdf, invoices, setInvoices, editInvoice, customer, setCustomer, invoice, setInvoice, deleteInvoice, createInvoice }
}
