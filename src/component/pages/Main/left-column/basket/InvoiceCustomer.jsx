import React, { useState } from 'react'
import styled from 'styled-components';
import Header from '../../../../reusable-ui/Header';
import { FaCheck } from 'react-icons/fa'
export default function InvoiceCustomer({ customers }) {

    const data = customers
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
                {/* décomposer en utilisant composant reusable searchbar */}
                <div className='inputSearch'>
                    <input
                        type="text"
                        name="search-bar"
                        id="search-bar"
                        placeholder="Nom, prénom, numéro..."
                        value={value}
                        onChange={handleChange}
                    />
                    <FaCheck className="icon" />
                </div>
                <ul>
                    {value &&
                        data.filter((element) => {
                            return element.name.includes(value) ||
                                element.surname.includes(value) ||
                                element.phoneNumber.includes(value);
                        }).map((element) => <li onClick={() => handleClick(element.name)} key={element.id}>{element.name} {element.surname} </li>)
                    }
                </ul>
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
