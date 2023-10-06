import { useState } from 'react'
import { addItemToArray, deepClone, getIndex, isProductIdInBasket } from '../utils/arrays'
import { editInvoiceFromApi } from '../API/invoice'

export const useBasket = () => {
    const [basket, setBasket] = useState([])
    const [totalBasket, setTotalBasket] = useState(0)

    const addBasketProduct = async (productToAdd, invoice) => {
        let invoiceUpdated
        let updatedBasket
        let basketCopy = deepClone(basket)

        // !!!!!!!!!!!!!!!!!!  A REFACTORISER !!!!!!!!!!!!!!!!

        const isProductAlreadyInBasket = isProductIdInBasket(productToAdd.id, basket)
        if (!isProductAlreadyInBasket) {
            const newBasketProduct = {
                productName: productToAdd.title,
                productPrice: productToAdd.price,
                productId: productToAdd.id,
                imageSource: productToAdd.imageSource,
                quantity: 1,
            }

            updatedBasket = addItemToArray(newBasketProduct, basketCopy)
            await editInvoiceFromApi(invoice, invoice.customer, updatedBasket)
                .then(apiResponse => {
                    invoiceUpdated = apiResponse
                });

        } else {

            const updatedBasketProduct = {
                ...isProductAlreadyInBasket,
                quantity: isProductAlreadyInBasket.quantity += 1
            }

            const indexOfProducToEdit = getIndex(updatedBasketProduct.id, basketCopy)
            basketCopy[indexOfProducToEdit] = updatedBasketProduct
            updatedBasket = basketCopy

            await editInvoiceFromApi(invoice, invoice.customer, updatedBasket)
                .then(apiResponse => {
                    invoiceUpdated = apiResponse
                });
        }
        setBasket(invoiceUpdated.invoiceLines)
        setTotalBasket(invoiceUpdated.total)
    }


    const deleteBasketProduct = async (basketProductId, invoice,) => {
        let invoiceUpdated

        const basketproductToDelete =
        {
            id: basketProductId,
            quantity: 0,
            productPrice: 0
        }

        const basketCopy = deepClone(basket)
        const indexOfProducToEdit = getIndex(basketProductId, basketCopy)
        basketCopy[indexOfProducToEdit] = basketproductToDelete

        await editInvoiceFromApi(invoice, invoice.customer, basketCopy)
            .then(apiResponse => {
                invoiceUpdated = apiResponse
            });

        setBasket(invoiceUpdated.invoiceLines)
        setTotalBasket(invoiceUpdated.total)
    }


    return { basket, addBasketProduct, deleteBasketProduct, setBasket, totalBasket, setTotalBasket }
}