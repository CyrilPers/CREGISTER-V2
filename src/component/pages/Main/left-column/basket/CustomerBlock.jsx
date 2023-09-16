import React from 'react'
import styled from 'styled-components';
import { theme } from '../../../../../theme';
import { TiDelete } from 'react-icons/ti'

export default function CustomerBlock({ customer }) {
    return (
        <CustomerBlockStyled>

            <div className='customer'>{customer.surname} {customer.name}</div>
            <div className='buttons'>
                <TiDelete className='button' />
            </div>
        </CustomerBlockStyled>

    )
}

const CustomerBlockStyled = styled.div`
    display: inline-block;

    .customer {
        width: 100px;
        height: 50px;
        font-size: ${theme.fonts.size.P2};
        font-family: ${theme.fonts.family.stylish};
        border: 2px solid ${theme.colors.primary};
        border-radius: ${theme.borderRadius.round};
        color: black;
        background-color: ${theme.colors.greyLight}
    }
    .buttons {
        height:50px;
        width:auto;
        .button {
            height:50px;
            width:auto;
        }
    }
`;