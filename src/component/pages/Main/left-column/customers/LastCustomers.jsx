import React from 'react'
import styled from 'styled-components';
import { theme } from '../../../../../theme';
import { isEmpty } from '../../../../../utils/arrays';

export default function LastCustomers({ customers }) {
    return (
        <LastCustomersStyled>
            <div className='titles'>
                <span>Prénom</span>
                <span>Nom</span>
                <span>Ville</span>
            </div>
            {!isEmpty(customers) &&
                customers.slice(-5).reverse().map(({ id, name, surname, address }) => (
                    <div key={id} className='customer'>
                        <span>{name ? name : "inc."}</span>
                        <span>{surname ? surname : "inc."}</span>
                        <span>{address.city ? address.city : "inc."}</span>
                    </div>
                ))}
        </LastCustomersStyled>
    )
}

const LastCustomersStyled = styled.div`
    padding-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    font-size: ${theme.fonts.size.P3};
    font-family: ${theme.fonts.family.stylish};
    span {
    padding: 0 10px;
    }

    .titles {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
    margin: 5px 0px;
    }

    .customer{
        width: 100%;
        background-color: ${theme.colors.greyLight};
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        margin: 5px 0px;}
    @media(max-width: 767px) { 
        font-size: ${theme.fonts.size.SM};
    }
`;