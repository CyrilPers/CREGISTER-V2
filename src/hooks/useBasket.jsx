import { useState } from 'react'
import { fakeBasket } from '../fakeData/fakeBasket'
import { deepClone, findInArray, getIndex, removeItemFromArray } from '../utils/arrays'

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
            return
        }

        const indexOfbasketProduct = getIndex(productToAdd.id, basketCopy)
        basketCopy[indexOfbasketProduct].quantity += 1
        setBasket(basketCopy)
    }


    const deleteBasketProduct = (basketProductId) => {
        const basketUpdated = removeItemFromArray(basketProductId, basket)
        setBasket(basketUpdated)
    }

    const editBasketProduct = (basketProduct) => {
        const basketCopy = deepClone(basket)
        const indexOfProducToEdit = getIndex(basketProduct, basket)
        basketCopy[indexOfProducToEdit] = basketProduct
        setBasket(basketCopy)
    }


    return { basket, addToBasket, deleteBasketProduct, editBasketProduct }
}

