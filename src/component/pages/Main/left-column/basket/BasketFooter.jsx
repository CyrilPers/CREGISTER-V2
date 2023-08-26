import React from 'react'
import { styled } from 'styled-components';
import Header from '../../../../reusable-ui/Header';
import Button from '../../../../reusable-ui/Button.jsx'
import { FaReceipt } from 'react-icons/fa'

export default function BasketFooter() {
    return (
        <Header>
            <BasketFooterStyled>
                <Button
                    className="invoice-button"
                    label="Ticket"
                    Icon={<FaReceipt />}
                />
            </BasketFooterStyled>
        </Header>
    )
}

const BasketFooterStyled = styled.div`
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
`;