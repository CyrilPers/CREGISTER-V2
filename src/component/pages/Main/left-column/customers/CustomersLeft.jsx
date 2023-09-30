import React from 'react'
import LeftHead from '../../../../reusable-ui/LeftHead.jsx';
import styled from 'styled-components';
import LastCustomers from './LastCustomers.jsx';


export default function CustomersLeft({ customers }) {
    return (
        <CustomersLeftStyled>
            <LeftHead title="NOUVEAUX CLIENTS" />
            <LastCustomers customers={customers} />
        </CustomersLeftStyled>
    )
}

const CustomersLeftStyled = styled.div`
    position: relative;
    height: 65px;
    width: 100%;
`;
