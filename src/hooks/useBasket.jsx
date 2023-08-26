import { useState } from 'react'
import { fakeBasket } from '../fakeData/fakeBasket'
import { deepClone, findInArray } from '../utils/arrays'

export const useBasket = () => {
    const [basket, setBasket] = useState(fakeBasket.EMPTY)


    const addToBasket = (productToAdd) => {

        const basketCopy = deepClone(basket)

        const isProductAlreadyInBasket = findInArray(productToAdd.id, basketCopy) !== undefined

        if (!isProductAlreadyInBasket) {
            const newBasketProduct = {
                ...productToAdd,
                quantity: 1,
            }
            const updatedBasket = [newBasketProduct, ...basketCopy]
            setBasket(updatedBasket)
        } else {
            const indexOfbasketProduct = basketCopy.findIndex(
                (product) => product.id === productToAdd.id)

            basketCopy[indexOfbasketProduct].quantity += 1
            setBasket(basketCopy)
        }
    }
    return { basket, addToBasket }
}

