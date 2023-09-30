import React from 'react'
import styled from 'styled-components';
import { theme } from '../../../../../theme';
import { FaVrCardboard } from 'react-icons/fa';
import { getIndex } from '../../../../../utils/arrays';

export default function BestInvoicesMap({ invoices }) {
    const invoicesSorted = invoices.sort((a, b) => b.total - a.total);
    return (
        <BestInvoicesMapStyled>
            {
                invoices.map(({ id, customer, total, index }) => (
                    <div key={id} className='invoice'>
                        <span>{getIndex(id, invoicesSorted) + 1} -</span>
                        <span>Commande: {id}</span>
                        <span>Nom :{customer ? customer.name : "Na"}</span>
                        <span>Total :{total} €</span>
                    </div>
                ))
            }
        </BestInvoicesMapStyled>
    )
};

const BestInvoicesMapStyled = styled.div`
    padding-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    .invoice{
        width: 100%;
        background-color: ${theme.colors.greyLight};
        display: flex;
        flex-direction: row;
        justify-content: start;
        span{
            font-size: ${theme.fonts.size.P3};
            font-family: ${theme.fonts.family.stylish};
            padding: 0 10px;
        }
    }
  
`;