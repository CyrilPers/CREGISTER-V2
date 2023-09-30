import { useState } from 'react'
import { deepClone, getIndex, removeItemFromArray } from '../utils/arrays'
import { createBasketProductFromApi, deleteBasketProductFromApi, getBasketProductByProductIdFromApi, updateBasketProductFromApi } from '../API/basket'

export const useBasket = () => {
    const [basket, setBasket] = useState([])


    const addBasketProduct = async (productToAdd, invoiceId, userId) => {
        let newBasketProductApi
        const isProductAlreadyInBasket = await getBasketProductByProductIdFromApi(productToAdd.id)
        if (!isProductAlreadyInBasket) {
            const newBasketProduct = {
                ...productToAdd,
                quantity: 1,
            }
            await createBasketProductFromApi(newBasketProduct, invoiceId)
                .then(apiResponse => {
                    newBasketProductApi = apiResponse;
                });
            const basketCopy = deepClone(basket);
            const updatedBasket = addItemToArray(newBasketProductApi, basketCopy);
            setBasket(updatedBasket)
            return
        }

        const updatedBasketProduct = {
            ...isProductAlreadyInBasket,
            quantity: isProductAlreadyInBasket.quantity += 1
        }
        await updateBasketProductFromApi(updatedBasketProduct)
            .then(apiResponse => {
                basketProductBeingEditedApi = apiResponse;
            });

        const basketCopy = deepClone(basket)
        const indexOfBasketProducToEdit = getIndex(updatedBasketProduct.id, basketCopy)
        basketCopy[indexOfBasketProducToEdit] = basketProductBeingEdited
        setBasket(basketCopy)
    }



    const deleteBasketProduct = (basketProductId) => {
        deleteBasketProductFromApi(basketProductId)
        const basketCopy = deepClone(basket)
        const basketUpdated = removeItemFromArray(basketProductId, basketCopy)
        setBasket(basketUpdated)
    }


    return { basket, addBasketProduct, deleteBasketProduct, setBasket }
}