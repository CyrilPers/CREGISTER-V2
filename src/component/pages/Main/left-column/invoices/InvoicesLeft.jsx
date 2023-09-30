import React from 'react'
import styled from 'styled-components';
import LeftHead from '../../../../reusable-ui/LeftHead';
import BestInvoicesMap from './BestInvoicesMap';

export default function InvoicesLeft({ invoices }) {



    return (
        <InvoicesLeftStyled>
            <LeftHead title="MEILLEURES VENTES" />
            <BestInvoicesMap invoices={invoices} />
        </InvoicesLeftStyled>
    )
}


const InvoicesLeftStyled = styled.div`
    position: relative;
    height: 65px;
    width: 100%;
`;
