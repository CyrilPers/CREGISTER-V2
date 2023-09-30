import React, { useContext } from 'react'
import AdminContext from '../../../../../context/AdminContext';
import styled from 'styled-components';
import { theme } from '../../../../../theme';
import LeftHead from '../../../../reusable-ui/LeftHead';
import BestInvoicesMap from './BestInvoicesMap';

export default function InvoicesLeft() {
    const { invoices } = useContext(AdminContext)



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
