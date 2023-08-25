import React from 'react'
import { styled } from 'styled-components';
import Header from './Header';
import Button from './Button.jsx'
import { FaReceipt } from 'react-icons/fa'

export default function Footer() {
    return (
        <Header>
            <FooterStyled>
                <Button
                    className="invoice-button"
                    label="Ticket"
                    Icon={<FaReceipt />}
                />
            </FooterStyled>
        </Header>
    )
}

const FooterStyled = styled.div`
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
`;