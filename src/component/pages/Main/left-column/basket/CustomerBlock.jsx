import React from 'react'
import styled from 'styled-components';
import { theme } from '../../../../../theme';
import { TiDelete } from 'react-icons/ti'

export default function CustomerBlock({ customer, handleDelete }) {
    return (
        <CustomerBlockStyled>

            <div className='customer'>{customer.surname} {customer.name}</div>
            <div className='buttons'>
                <button className="delete-button" onClick={handleDelete}>
                    <TiDelete className='delete-icon' />
                </button>
            </div>

        </CustomerBlockStyled>

    )
}

const CustomerBlockStyled = styled.div`
    height: 65px;
    width: auto;
    display: flex;
    align-items: center;


    .customer {
        box-sizing: border-box;
        padding: 5px;
        display:flex;
        width: 200px;
        height: 40px;
        font-size: ${theme.fonts.size.P3};
        font-family: ${theme.fonts.family.stylish};
        border: 2px solid ${theme.colors.primary};
        border-radius: ${theme.borderRadius.round};
        color: black;
        background-color: ${theme.colors.greyLight};
        overflow-x: hidden;
        text-overflow: ellipsis;
    }
    .buttons {
        display: flex;
        height:50px;
        width:auto;
        align-items: center;

        .delete-button {
        top: 15px;
        right: 15px;
        cursor: pointer;
        color: ${theme.colors.primary};
        border: none;
        background: none;

            .delete-icon{
                width: 40px;
                height: 40px;
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
`;