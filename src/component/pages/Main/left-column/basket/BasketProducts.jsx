import React, { useContext } from 'react'
import { styled } from 'styled-components';
import { theme } from '../../../../../theme';
import BasketCard from './BasketCard';
import { IMAGE_COMING_SOON } from '../../../../../enum/product.jsx'
import AdminContext from '../../../../../context/AdminContext';

export default function BasketProducts() {

    const {
        username,
        basket,
        deleteBasketProduct,
    } = useContext(AdminContext)

    const handleOnDelete = (id, username) => {
        deleteBasketProduct(id, username)
    }

    return (
        <BasketProductsStyled>
            {basket.map((basketProduct) =>
                <div className='basket-card' key={basketProduct.id} >
                    <BasketCard
                        {...basketProduct}
                        imageSource={basketProduct.imageSource ? basketProduct.imageSource : IMAGE_COMING_SOON}
                        onDelete={() => handleOnDelete(basketProduct.id, username)}
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