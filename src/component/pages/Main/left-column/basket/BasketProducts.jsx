import React from 'react'
import { styled } from 'styled-components';
import { theme } from '../../../../../theme';
import BasketCard from './BasketCard';
import { IMAGE_COMING_SOON } from '../../../../../enum/product.jsx'

export default function BasketProducts({ basket, deleteBasketProduct }) {


    return (
        <BasketProductsStyled>
            {basket.map((basketProduct) =>
                <div className='basket-card' key={basketProduct.id} >
                    <BasketCard
                        {...basketProduct}
                        imageSource={basketProduct.imageSource ? basketProduct.imageSource : IMAGE_COMING_SOON}
                        onDelete={() => deleteBasketProduct(basketProduct.id)}
                    />
                </div>
            )
            }
        </BasketProductsStyled >
    )
}

const BasketProductsStyled = styled.div`

    flex: 1;
    display: flex;
    flex-direction: column;
    box-shadow: ${theme.shadows.leftColumn};
    overflow-y: scroll;
    scrollbar-color: transparent transparent;
    scrollbar-width: thin;

    &:hover {
        scrollbar-color: initial;
        scrollbar-width: thin;
    }
`;