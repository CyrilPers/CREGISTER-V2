import React, { useState } from 'react'
import styled from 'styled-components';
import Header from '../../../../reusable-ui/Header';
import SearchCustomer from './SearchCustomer';
import CustomerBlock from './CustomerBlock';
export default function InvoiceCustomer({ invoice, customers, customer, editInvoice }) {

    const [value, setValue] = useState();

    const handleChange = (event) => {
        setValue(event.target.value)
    }

    const handleClick = (element) => {
        setValue(element.name)
        editInvoice(invoice, element)
    }

    const handleDelete = () => {
        setValue()
        editInvoice(invoice, null)
    }

    return (
        <Header>
            <CustomerStyled>
                {customer ? (
                    <CustomerBlock
                        customer={customer}
                        handleDelete={handleDelete}
                    />
                ) : (
                    <SearchCustomer
                        placeholder={"Nom, prénom, numéro..."}
                        data={customers}
                        value={value}
                        handleClick={handleClick}
                        handleChange={handleChange}
                        handleDelete={handleDelete}
                    />
                )}
            </CustomerStyled>
        </Header>
    )
}
const CustomerStyled = styled.div`
    display: flex;
    height: 65px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
