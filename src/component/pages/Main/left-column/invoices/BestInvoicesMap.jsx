import React from 'react'
import styled from 'styled-components';
import { theme } from '../../../../../theme';
import { isEmpty } from '../../../../../utils/arrays.jsx';
import { getIndex } from '../../../../../utils/arrays';
import { formatPrice } from '../../../../../utils/maths';

export default function BestInvoicesMap({ invoices }) {
    const invoicesSorted = invoices.sort((a, b) => b.total - a.total);
    return (
        <BestInvoicesMapStyled>
            <div className='titles'>
                <span>#</span>
                <span>Commande</span>
                <span>Nom</span>
                <span>Total</span>
            </div>
            {!isEmpty(invoices) &&
                invoices.slice(0, 5).map(({ id, customer, total }) => (
                    <div key={id} className='invoice'>
                        <span>{getIndex(id, invoicesSorted) + 1}</span>
                        <span>{id}</span>
                        <span>{customer ? customer.name : "Na"}</span>
                        <span>{formatPrice(total)}</span>
                    </div>
                ))}
        </BestInvoicesMapStyled>
    )
};

const BestInvoicesMapStyled = styled.div`
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
    grid-template-columns: repeat(4, 1fr);
    width: 100%;
    margin: 5px 0px;
    }

    .invoice{
        width: 100%;
        background-color: ${theme.colors.greyLight};
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        margin: 5px 0px;}
    @media(max-width: 767px) { 
        font-size: ${theme.fonts.size.SM};
    }
`;