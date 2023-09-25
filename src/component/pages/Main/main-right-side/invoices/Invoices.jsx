import React, { useEffect } from 'react'
import styled from 'styled-components';

export default function Invoices() {
    const { invoices, userId } = useContext(AdminContext)

    useEffect(() => {
        initialiseInvoices(userId, setCustomers)
    }, [])

    return (
        <div> Invoices</div>
    )
}

const InvoicesStyled = styled.div`
  
`;