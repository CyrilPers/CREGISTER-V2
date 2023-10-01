import React, { useContext, useEffect } from 'react'
import { styled } from 'styled-components';
import { theme } from '../../../../../theme';
import BasketCard from './BasketCard';
import { IMAGE_COMING_SOON } from '../../../../../enum/product.jsx'
import AdminContext from '../../../../../context/AdminContext';
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { basketCardAnimation } from '../../../../../theme/animations';



export default function BasketProducts() {

    const {
        basket,
        deleteBasketProduct,
    } = useContext(AdminContext)

    const handleOnDelete = (id) => {
        deleteBasketProduct(id)
    }

    useEffect(() => { }, [basket])

    console.log("basket", basket)

    return (
        <TransitionGroup component={BasketProductsStyled}>
            {basket.map((basketProduct) =>
                <CSSTransition
                    appear={true}
                    className={"card-transition"}
                    key={basketProduct.id}
                    timeout={300}
                >
                    <div className='basket-card'  >
                        <BasketCard
                            {...basketProduct}
                            imageSource={basketProduct.imageSource ? basketProduct.imageSource : IMAGE_COMING_SOON}
                            onDelete={() => handleOnDelete(basketProduct.id)}
                            className={"card"}
                        />
                    </div>
                </CSSTransition>
            )}
        </TransitionGroup >
    )
}

const BasketProductsStyled = styled.div`

    flex: 1;
    display: flex;
    flex-direction: column;
    box-shadow: ${theme.shadows.leftColumn};
    overflow-y: scroll;
    overflow-x: hidden; // don't show scroll-x while basketcard animation
    scrollbar-color: transparent transparent;
    scrollbar-width: thin;

    &:hover {
        scrollbar-color: initial;
        scrollbar-width: thin;
        overflow-x: hidden;
    }
    ${basketCardAnimation}
`;