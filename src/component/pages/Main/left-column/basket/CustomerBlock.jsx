import React from 'react'
import styled from 'styled-components';
import { theme } from '../../../../../theme';
import { TiDelete } from 'react-icons/ti'

export default function CustomerBlock({ customer, handleDelete }) {
    return (
        <CustomerBlockStyled>

            <div className='customer'>{customer.surname} {customer.name}</div>
            <div className='buttons'>
                <TiDelete className='delete-button' onClick={handleDelete} />
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
        justify-content: start;
        width: 200px;
        height: 50px;
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
            height:40px;
            width:auto;
            color: ${theme.colors.primary};

        }
    }
`;