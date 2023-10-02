import { useState } from 'react'
import { addItemToArray, deepClone, getIndex, isProductIdInBasket, removeItemFromArray } from '../utils/arrays'
import { deleteBasketProductFromApi, updateBasketProductFromApi } from '../API/basket'
import { editInvoiceFromApi } from '../API/invoice'

export const useBasket = () => {
    const [basket, setBasket] = useState([])


    const addBasketProduct = async (productToAdd, invoice, userId) => {
        let newBasketProductApi

        console.log("invoice", invoice)

        const isProductAlreadyInBasket = isProductIdInBasket(productToAdd.id, basket)
        if (!isProductAlreadyInBasket) {
            const newBasketProduct = {
                ...productToAdd,
                quantity: 1,
            }
            await editInvoiceFromApi(invoice, invoice.customer, newBasketProduct)
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

        const basketCopy = deepClone(basket)
        const indexOfBasketProducToEdit = getIndex(updatedBasketProduct.id, basketCopy)
        basketCopy[indexOfBasketProducToEdit] = updatedBasketProduct
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