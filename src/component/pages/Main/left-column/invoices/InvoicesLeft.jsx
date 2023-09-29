import React, { useContext } from 'react'
import AdminContext from '../../../../../context/AdminContext';
import styled from 'styled-components';
import { theme } from '../../../../../theme';
import LeftHead from '../../../../reusable-ui/LeftHead';

export default function InvoicesLeft() {
    const { invoices } = useContext(AdminContext)

    const invoicesSorted = invoices.sort((a, b) => b.total - a.total);

    return (
        <InvoicesLeftStyled>
            <LeftHead title="MEILLEURES VENTES" />
            {invoices.map(({ id, customer, total }) => (
                <div key={id}>
                    <span>{id}</span>
                    <span>{customer.name}</span>
                    <span>{total}</span>
                </div>
            ))}
        </InvoicesLeftStyled>
    )
}


const InvoicesLeftStyled = styled.div`
    display: flex;
    height: 65px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
