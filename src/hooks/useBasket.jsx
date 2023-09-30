import { useState } from 'react'
import { deepClone, removeItemFromArray } from '../utils/arrays'
import { createBasketProductFromApi, deleteBasketProductFromApi, getBasketFromApi, getBasketProductByProductIdFromApi, updateBasketProductFromApi } from '../API/basket'

export const useBasket = () => {
    const [basket, setBasket] = useState([])


    const addBasketProduct = async (productToAdd, invoiceId, userId) => {
        const isProductAlreadyInBasket = await getBasketProductByProductIdFromApi(productToAdd.id)
        if (!isProductAlreadyInBasket) {
            const newBasketProduct = {
                ...productToAdd,
                quantity: 1,
            }
            await createBasketProductFromApi(newBasketProduct, invoiceId)
            const updatedBasket = await getBasketFromApi(invoiceId)
            setBasket(updatedBasket)
            return
        }

        const updatedBasketProduct = {
            ...isProductAlreadyInBasket,
            quantity: isProductAlreadyInBasket.quantity += 1
        }
        await updateBasketProductFromApi(updatedBasketProduct)
        const updatedBasket = await getBasketFromApi(invoiceId)
        setBasket(updatedBasket)
    }


    const deleteBasketProduct = (basketProductId) => {
        deleteBasketProductFromApi(basketProductId)
        const basketCopy = deepClone(basket)
        const basketUpdated = removeItemFromArray(basketProductId, basketCopy)
        setBasket(basketUpdated)
    }


    return { basket, addBasketProduct, deleteBasketProduct, setBasket }
}