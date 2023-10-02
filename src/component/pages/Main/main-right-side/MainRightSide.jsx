import React, { useContext, useEffect } from 'react'
import Admin from '../../order/admin/Admin';
import Menu from '../../order/menu/Menu.jsx'
import { styled } from 'styled-components';
import { theme } from '../../../../theme';
import AdminContext from '../../../../context/AdminContext.jsx';
import Invoices from './invoices/Invoices.jsx';
import Customers from './customers/Customers';



export default function MainRightSide() {

    const { isModeAdmin, userId, currentPage } = useContext(AdminContext)

    useEffect(() => { }, [currentPage])

    console.log("currentPage", currentPage)

    return (
        <MainRightSideStyled>
            {/* CREER FICHIER CONFIG POUR TRAITER LE CONTENU A AFFICHER currentPage.content COMME POUR ADMIN */}
            {currentPage === "invoice" && userId && <Menu />}
            {currentPage === "customers" && userId && <Customers />}
            {currentPage === "invoices" && userId && <Invoices />}

            {isModeAdmin && currentPage !== "invoices" && <Admin />}
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