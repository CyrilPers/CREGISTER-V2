import React from 'react'
import { styled } from 'styled-components';
import { theme } from '../../../../../theme';
import BasketCard from './BasketCard';

export default function BasketProducts({ basket }) {
    return (
        <BasketProductsStyled>
            {basket.map((basketProduct) =>
                <div className='basket-card'>
                    <BasketCard {...basketProduct}
                        key={basketProduct.id}
                    />
                </div>
            )}
        </BasketProductsStyled>
    )
}

const BasketProductsStyled = styled.div`

    flex: 1;
    display: flex;
    flex-direction: column;
    box-shadow: ${theme.shadows.leftColumn};
    overflow-y: scroll;
    scrollbar-color: transparent transparent;

    &:hover {
        scrollbar-color: initial;
    }

    .basket-card {
        margin: 10px 16px;
        height: 85px;
        box-sizing: border-box;
        &:first-child {
            margin-top: 20px;
        }
        &:last-child {
            margin-bottom: 20px;
        }
    }
`;