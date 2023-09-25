import React, { useContext } from 'react'
import Admin from '../../order/admin/Admin';
import Menu from '../../order/menu/Menu.jsx'
import { styled } from 'styled-components';
import { theme } from '../../../../theme';
import AdminContext from '../../../../context/AdminContext.jsx';
import Customers from './customers/customers.jsx';


export default function MainRightSide() {

    const { isModeAdmin, userId, currentPage } = useContext(AdminContext)


    return (
        <MainRightSideStyled>
            {currentPage === "invoice" && userId && <Menu />}
            {currentPage === "customers" && userId && <Customers />}
            {isModeAdmin && <Admin />}
        </MainRightSideStyled>
    )
}

const MainRightSideStyled = styled.div`
    position: relative;
    overflow-y: hidden;
    display: grid;
    border-bottom-right-radius: ${theme.borderRadius.extraRound};

    @media(max-width: 767px) {
        height: 50vh;
    }
`;