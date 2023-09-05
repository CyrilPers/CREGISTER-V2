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
                    className="invoice"
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
    
    .invoice {
        width: 200px;
        height: 40px
    }
    .icon {
        margin: 0 5px;
  }
  @media(max-width: 767px) {
        height: 50px;
        justify-content: center;
        .invoice {
            width: 150px;
            height: 30px;
            align-items: center;
            justify-content: center;
    }
    }
  
`;