import React from 'react'
import { styled } from 'styled-components';
import Header from '../../../../reusable-ui/Header';
import Button from '../../../../reusable-ui/Button.jsx'
import { FaReceipt } from 'react-icons/fa'

export default function LeftColumnFooter() {
    return (
        <Header>
            <LeftColumnFooterStyled>
                <Button
                    className="invoice-button"
                    label="Ticket"
                    Icon={<FaReceipt />}
                />
            </LeftColumnFooterStyled>
        </Header>
    )
}

const LeftColumnFooterStyled = styled.div`
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
`;