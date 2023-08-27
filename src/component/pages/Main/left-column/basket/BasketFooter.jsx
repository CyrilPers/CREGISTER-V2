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
                    className="invoice-icon"
                    label="Ticket"
                    Icon={<FaReceipt />}
                />
            </BasketFooterStyled>
        </Header>
    )
}

const BasketFooterStyled = styled.div`
    height: 65px;
    display: flex;
    justify-content: center;
    align-items: center;
    
    .icon {
        margin: 0 5px;
  }
`;