import React, { useContext } from 'react'
import { styled } from 'styled-components';
import Header from '../../../../reusable-ui/Header';
import Button from '../../../../reusable-ui/Button.jsx'
import { FaReceipt } from 'react-icons/fa'
import CasinoEffect from '../../../../reusable-ui/CasinoEffect';
import { formatPrice } from '../../../../../utils/maths';
import { theme } from '../../../../../theme';
import AdminContext from '../../../../../context/AdminContext';

export default function BasketFooter({ totalBasket, getPdf, invoiceId }) {

    const { userId } = useContext(AdminContext)

    const handleClick = () => {
        getPdf(invoiceId)
    }

    return (
        <Header>
            <BasketFooterStyled>
                <span className='total'>Total</span>
                <CasinoEffect count={formatPrice(totalBasket)} />
                <Button
                    className="invoice-button"
                    label="Facture"
                    Icon={<FaReceipt />}
                    onClick={handleClick}
                />

            </BasketFooterStyled>
        </Header>
    )
}

const BasketFooterStyled = styled.div`
    color: ${theme.colors.primary};
    font-family: ${theme.fonts.family.stylish};
    font-size: ${theme.fonts.size.P4};
    font-weight: ${theme.fonts.weights.bold};
    height: 65px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    
    .invoice-button {
        width: 100px;
        height: 40px
    }
    .icon {
        margin: 0 5px;
  }
  @media(max-width: 767px) {
    font-family: ${theme.fonts.family.stylish};
    font-size: ${theme.fonts.size.P3};
    font-weight: ${theme.fonts.weights.bold};
    height: 50px;
        .invoice-button {
            width: 150px;
            height: 30px;
            align-items: center;
            justify-content: center;
        }
    }
    @media(min-width: 768px) and (max-width: 1388px) { 
        font-size: ${theme.fonts.size.P3};
        .invoice-button {
        width: 90px;
        height: 40px
    }
    }
`;