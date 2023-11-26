import React, { useContext } from 'react'
import AdminContext from '../../context/AdminContext.jsx'
import styled, { css } from 'styled-components'
import { theme } from '../../theme/index.jsx'

export default function Links() {

    const { setCurrentPage, currentPage } = useContext(AdminContext)

    const goToInvoices = () => {
        setCurrentPage("invoices")
    }

    const goToCustomers = () => {
        setCurrentPage("customers")
    }

    return (
        <LinksStyled>
            <span className={`link ${currentPage === "invoices" && "activeLink"}`} id="invoices" onClick={goToInvoices}>Commandes</span>
            <span className={`link ${currentPage === "customers" && "activeLink"}`} id="customers" onClick={goToCustomers}>Clients</span>
        </LinksStyled>
    )
}

const LinksStyled = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: ${theme.fonts.family.stylish};
    font-size: ${theme.fonts.size.P4};
    font-weight: ${theme.fonts.weights.semiBold};
    color: ${theme.colors.background_dark};
    .link {
        padding: 0 10px;
        &:hover {
            cursor: pointer;
            color: ${theme.colors.background_dark};
            font-size: ${theme.fonts.size.P5};
            font-weight: ${theme.fonts.weights.bold};
        }
        &:active {
            color: ${theme.colors.primary};

        }

    }
    .activeLink{
        color: ${theme.colors.primary};
    }

    @media(max-width: 767px) {
        font-size: ${theme.fonts.size.P0};
        .link {
            padding: 0 5px;
            &:hover {
            font-size: ${theme.fonts.size.P1};
        }
    }

    @media(min-width: 768px) and (max-width: 1388px) { 
        font-size: ${theme.fonts.size.P2};
        .link {
            padding: 0 5px;
            &:hover {
            font-size: ${theme.fonts.size.P1};
            }
        }
    }
}
`; 