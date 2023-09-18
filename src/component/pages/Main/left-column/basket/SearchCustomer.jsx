import React from 'react'
import styled from 'styled-components';
import { theme } from '../../../../../theme/index.jsx';

export default function SearchCustomer({ placeholder, data, handleClick, handleChange, value }) {
    return (
        <SearchCustomerStyled>
            <div className='inputSearch'>
                <input
                    type="text"
                    name="search-bar"
                    id="search-bar"
                    placeholder={placeholder}
                    value={value}
                    onChange={handleChange}
                />
            </div>
            <ul>
                {value &&
                    data.filter((element) => {
                        return element.name.toLowerCase().includes(value.toLowerCase()) ||
                            element.surname.toLowerCase().includes(value.toLowerCase()) ||
                            element.phoneNumber.toLowerCase().includes(value.toLowerCase());
                    }).map((element) => (
                        <li onClick={() => handleClick(element)} key={element.id}>{element.name} {element.surname} </li>
                    ))}
            </ul>
        </SearchCustomerStyled>
    )
}

const SearchCustomerStyled = styled.div`
    padding-top: 25px;
    height: 65px;
    display: flex;
    align-items: center;
    position: relative;
    flex-direction: column;
    padding-right: 50px;


    .inputSearch {
        box-sizing: border-box;
        padding: 5px;
        display:flex;
        width: 200px;
        height: 40px;        
        border: 2px solid ${theme.colors.primary};
        border-radius: ${theme.borderRadius.round};
        color: black;
        background-color: ${theme.colors.greyLight};
        overflow-x: hidden;
        text-overflow: ellipsis;
        input{
            width: 100%; 
            box-sizing: border-box;
            border: none;
            background-color: ${theme.colors.greyLight};
            font-size: ${theme.fonts.size.P0};
            &:focus {
            outline: none; 
            }
        }
    }
    ul {
    margin-top: 40px;
    padding-left: 0px;
    list-style: none;
    overflow: hidden;
    position: absolute;
    width: 200px;
    }

    ul li {
        padding-left: 10px;
    cursor: pointer;
    height: 30px;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.greyLight};
    border: 1px solid ${theme.colors.primary};
    border-radius: ${theme.borderRadius.round};
    font-size: ${theme.fonts.size.P3};
    font-family: ${theme.fonts.family.stylish};
    }
     
`;
