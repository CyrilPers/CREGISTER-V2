import { useState } from 'react'
import { removeItemFromArray } from '../utils/arrays'
import { createBasketProductFromApi, deleteBasketProductFromApi, updateBasketProductFromApi } from '../API/basket'

export const useBasket = () => {
    const [basket, setBasket] = useState([])


    const addBasketProduct = async (productToAdd, invoiceId) => {

        const isProductAlreadyInBasket = getBasketProductByProductIdFromApi(productToAdd.id)

        if (!isProductAlreadyInBasket) {
            const newBasketProduct = {
                ...productToAdd,
                quantity: 1,
            }
            await createBasketProductFromApi(newBasketProduct, invoiceId)
            updatedBasket = await getBasketFromApi(userId)
            setBasket(updatedBasket)
            return
        }

        const updatedBasketProduct = {
            ...isProductAlreadyInBasket,
            quantity: isProductAlreadyInBasket.quantity += 1
        }
        updateBasketProductFromApi(updatedBasketProduct)
        updatedBasket = await getBasketFromApi(userId)
        setBasket(updatedBasket)
    }


    const deleteBasketProduct = (basketProductId) => {
        const basketUpdated = removeItemFromArray(basketProductId, basket)
        setBasket(basketUpdated)
        deleteBasketProductFromApi(basketProductId)
    }


    return { basket, addBasketProduct, deleteBasketProduct, setBasket }
}