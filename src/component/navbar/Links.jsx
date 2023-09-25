import React, { useContext } from 'react'
import AdminContext from '../../context/AdminContext.jsx'
import styled from 'styled-components'
import { theme } from '../../theme/index.jsx'

export default function Links() {

    const { setCurrentPage } = useContext(AdminContext)

    const goToInvoices = () => {
        setCurrentPage("invoices")
    }

    const goToCustomers = () => {
        setCurrentPage("customers")
    }

    return (
        <LinksStyled>
            <span className="link" onClick={goToInvoices}>Commandes</span>
            <span className="link" onClick={goToCustomers}>Clients</span>
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
            color: ${theme.colors.primary};
            font-size: ${theme.fonts.size.P5};
            font-weight: ${theme.fonts.weights.bold};
        }
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