import { useState } from "react"
import { editInvoiceFromApi } from "../API/invoice"

export const useInvoices = () => {
    const [invoices, setInvoices] = useState([])
    const [customer, setCustomer] = useState()
    const [invoice, setInvoice] = useState()

    const editInvoice = (invoice, newCustomer) => {
        setCustomer(newCustomer)
        editInvoiceFromApi(invoice, newCustomer)
    }


    return { invoices, setInvoices, editInvoice, customer, setCustomer, invoice, setInvoice }
}

