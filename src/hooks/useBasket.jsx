import { useState } from 'react'
import { fakeBasket } from '../fakeData/fakeBasket'
import { deepClone, findInArray, getIndex, removeItemFromArray } from '../utils/arrays'
import { setLocalStorage } from '../utils/window.jsx'

export const useBasket = () => {
    const [basket, setBasket] = useState([])


    const addBasketProduct = (productToAdd, username) => {

        const basketCopy = deepClone(basket)

        const isProductAlreadyInBasket = findInArray(productToAdd.id, basketCopy) !== undefined

        if (!isProductAlreadyInBasket) {
            const newBasketProduct = {
                ...productToAdd,
                quantity: 1,
            }
            const updatedBasket = [newBasketProduct, ...basketCopy]
            setBasket(updatedBasket)
            setLocalStorage(username, basketCopy)
            return
        }

        const indexOfbasketProduct = getIndex(productToAdd.id, basketCopy)
        basketCopy[indexOfbasketProduct].quantity += 1
        setBasket(basketCopy)
        setLocalStorage(username, basketCopy)
    }


    const deleteBasketProduct = (basketProductId, username) => {
        const basketUpdated = removeItemFromArray(basketProductId, basket)
        setBasket(basketUpdated)
        setLocalStorage(username, basketUpdated)
    }


    return { basket, addBasketProduct, deleteBasketProduct }
}