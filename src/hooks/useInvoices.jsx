import { useState } from "react"
import { editInvoiceFromApi } from "../API/invoice"

export const useInvoices = () => {
    const [invoices, setInvoices] = useState([])
    const [customer, setCustomer] = useState()

    const editInvoice = (invoiceId, newCustomer) => {
        setCustomer(newCustomer)
        editInvoiceFromApi(invoiceId, newCustomer)
    }


    return { invoices, setInvoices, editInvoice, customer, setCustomer }
}

