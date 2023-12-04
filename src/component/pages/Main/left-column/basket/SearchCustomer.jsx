import React from 'react'
import styled from 'styled-components';
import { theme } from '../../../../../theme/index.jsx';
import { IoPersonAdd } from "react-icons/io5";

export default function SearchCustomer({ placeholder, data, handleClick, handleChange, value, setCurrentPage, setIsModeAdmin }) {

    const handleAdd = () => {
        setIsModeAdmin(true)
        setCurrentPage("customers")
    }

    const filterData = () => {
        return data.filter((element) => (
            element.name.toLowerCase().includes(value.toLowerCase()) ||
            element.surname.toLowerCase().includes(value.toLowerCase()) ||
            element.phoneNumber.toLowerCase().includes(value.toLowerCase())
        ));
    };

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
                {value && filterData().slice(0, 5).map((element) => (
                    <li onClick={() => handleClick(element)} key={element.id}>
                        {element.name} {element.surname}
                    </li>
                ))}
                {value && filterData().length === 0 && (
                    <li className='not-found'>Client introuvable</li>
                )}
            </ul>
            <div className='buttons'>
                <button className="add-button" onClick={handleAdd}>
                    <IoPersonAdd className='add-icon' />
                </button>
            </div>

        </SearchCustomerStyled >
    )
}

const SearchCustomerStyled = styled.div`
    height: 65px;
    display: flex;
    align-items: center;
    position: relative;
    z-index: 1;

    .not-found {
        font-weight: ${theme.fonts.weights.heavy};
    }

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
    padding-left: 0px;
    list-style: none;
    overflow: hidden;
    position: absolute;
    width: 200px;
    display: flex;
    flex-direction: column-reverse;
    margin-top: 50px;
    top: 0;
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

    .buttons {
        display: flex;
        height:50px;
        width:auto;
        align-items: center;

        .add-button {
        top: 15px;
        right: 15px;
        cursor: pointer;
        color: ${theme.colors.primary};
        border: none;
        background: none;

            .add-icon{
                width: 25px;
                height: 25px;
                cursor: pointer;
            }
            &:hover {
                color: ${theme.colors.red}
            }
            &:active{
                color: ${theme.colors.primary}
            }
        }
    }

    @media(min-width: 768px) and (max-width: 1388px) { 
        .inputSearch{
            width: 90%;
        }
        ul{
            width: 180px;
        }
    }
`;
