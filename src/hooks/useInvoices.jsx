import { useState } from "react"

export const useInvoices = () => {
    const [invoices, setInvoices] = useState([])

    return { invoices, setInvoices }
}

