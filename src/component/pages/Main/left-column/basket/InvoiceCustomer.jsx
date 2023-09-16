import React, { useState } from 'react'
import styled from 'styled-components';
import Header from '../../../../reusable-ui/Header';
import { FaCheck } from 'react-icons/fa'
import SearchCustomer from './SearchCustomer';
export default function InvoiceCustomer({ customers, customer }) {

    const [value, setValue] = useState();

    const handleChange = (event) => {
        setValue(event.target.value)
    }

    const handleClick = (element) => {
        setValue(element)
        // ou appliquer le customer à l'invoice
    }
    return (
        <Header>
            <CustomerStyled>
                <SearchCustomer icon={FaCheck} placeholder={"Nom, prénom, numéro..."} data={customers} value={value} handleClick={handleClick} handleChange={handleChange} />
            </CustomerStyled>
        </Header>
    )
}

const CustomerStyled = styled.div`
    height: 65px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
