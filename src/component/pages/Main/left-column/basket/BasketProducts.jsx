import React, { useContext } from 'react'
import { styled } from 'styled-components';
import { theme } from '../../../../../theme';
import BasketCard from './BasketCard';
import { IMAGE_COMING_SOON } from '../../../../../enum/product.jsx'
import AdminContext from '../../../../../context/AdminContext';
import { CSSTransition, TransitionGroup } from 'react-transition-group'



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
        <TransitionGroup component={BasketProductsStyled}>
            {basket.map((basketProduct) =>
                <CSSTransition
                    appear={true}
                    classNames={"card-transition"}
                    key={basketProduct.id}
                    timeout={500} // {{ enter: 500, exit: 500 }}
                >
                    <div className='basket-card'  >
                        <BasketCard
                            {...basketProduct}
                            imageSource={basketProduct.imageSource ? basketProduct.imageSource : IMAGE_COMING_SOON}
                            onDelete={() => handleOnDelete(basketProduct.id, username)}
                            className={"card"}
                        />
                    </div>
                </CSSTransition>
            )}
        </TransitionGroup>

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
    
    .card-transition-appear {
        .card{
        transform: translateX(100%);
        opacity: 0%;

        }
    }
    .card-transition-appear-active {
        .card{
            transition: 0.5s;
            transform: translateX(0%);
            opacity: 100%;
        }
    }
    .card-transition-enter {
        .card{
        transform: translateX(100%);
        opacity: 0%;

        }
    }
    .card-transition-enter-active {
        .card{
            transition: 0.5s;
            transform: translateX(0%);
            opacity: 100%;
        }
    }

    .card-transition-exit {
        .card{
            transform: translateX(0%);
            opacity: 100%;
        }
    }
    .card-transition-exit-active {
        .card{
            transition: 0.5s;
            transform: translateX(-100%);
            /* transform: scale(0.1); */
            opacity: 0%;
        }
    }


    &:hover {
        scrollbar-color: initial;
        scrollbar-width: thin;
    }
`;