import React, { useState } from 'react'
import styled from 'styled-components';
import Header from '../../../../reusable-ui/Header';
import { FaSearch } from 'react-icons/fa'
export default function InvoiceCustomer({ customers }) {



    const data = { customers }

    console.log("data", data)

    const [value, setValue] = useState("");

    const handleChange = (event) => {
        setValue(event.target.value)
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
                    // onkeyDown={handleKeyDown}
                    />
                    <button><FaSearch className="icon" /></button>
                </div>
                <ul>
                    {
                        data.map((element) => <li>{element}</li>)
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
