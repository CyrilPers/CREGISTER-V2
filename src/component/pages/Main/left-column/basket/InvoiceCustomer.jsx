import React, { useState } from 'react'
import styled from 'styled-components';
import Header from '../../../../reusable-ui/Header';
import { FaCheck } from 'react-icons/fa'
import SearchCustomer from './SearchCustomer';
import CustomerBlock from './CustomerBlock';
export default function InvoiceCustomer({ customers, customer }) {

    const [value, setValue] = useState();

    const handleChange = (event) => {
        setValue(event.target.value)
    }

    const handleClick = (element) => {
        setValue(element)
        // appliquer le customer à l'invoice
    }

    const handleDelete = () => {
        setValue()
        // appliquer customer invoice null
    }

    return (
        <Header>
            <CustomerStyled>
                {customer ? <CustomerBlock customer={customer} /> :
                    <SearchCustomer
                        icon={FaCheck}
                        placeholder={"Nom, prénom, numéro..."}
                        data={customers}
                        value={value}
                        handleClick={handleClick}
                        handleChange={handleChange}
                        handleDelete={handleDelete}
                    />}
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
