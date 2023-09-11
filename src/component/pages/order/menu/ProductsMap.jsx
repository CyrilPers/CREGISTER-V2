import React from 'react'
import Card from '../../../reusable-ui/Card'
import { CSSTransition } from 'react-transition-group'
import { convertStringToBoolean } from '../../../../utils/string'
import { checkIfProductIsClicked } from './helper/helpers'
import { formatPrice } from '../../../../utils/maths';
import { IMAGE_COMING_SOON, IMAGE_NO_STOCK } from '../../../../enum/product';

export default function ProductsMap({ selectedCategory, selectedProduct, isModeAdmin, products, handleCardDelete, handleClick, containerClassName }) {

    const filteredProducts = selectedCategory
        ? selectedCategory
            ? products.filter((product) => product.category.id === selectedCategory)
            : []
        : products.filter((product) => product.category.id === 1);

    console.log("selectedCategory", selectedCategory)
    return (
        <>{filteredProducts.slice().reverse().map(({ id, title, imageSource, price, isAvailable }) => {
            return (
                <CSSTransition
                    classNames={"animation-card"}
                    key={id}
                    timeout={300}
                >
                    <div className={containerClassName}>
                        <Card
                            key={id}
                            title={title}
                            imageSource={imageSource ? imageSource : IMAGE_COMING_SOON}
                            leftDescription={formatPrice(price)}
                            showDeleteButton={isModeAdmin}
                            onDelete={(event) => handleCardDelete(event, id)}
                            onClick={() => handleClick(id)}
                            isHoverable={isModeAdmin}
                            isSelected={checkIfProductIsClicked(id, selectedProduct.id)}
                            overlapImageSource={IMAGE_NO_STOCK}
                            isOverlapImageVisible={convertStringToBoolean(isAvailable) === false}
                            className="card"
                        />
                    </div>
                </CSSTransition>
            )
        })}
        </>
    )
}
