import { useState } from "react"
import { fakeMenu } from "../fakeData/fakeMenu"
import { deepClone, getIndex, removeItemFromArray } from "../utils/arrays"
import { syncBothProducts } from "../API/products"


export const useProducts = () => {

    const [products, setProducts] = useState()



    const addProduct = (newProduct, username) => {
        const productsCopy = deepClone(products)
        const productsUpdated = [newProduct, ...productsCopy]
        setProducts(productsUpdated)
        syncBothProducts(username, productsUpdated)
    }

    const deleteProduct = (productId, username) => {
        const productsCopy = deepClone(products)
        const productsUpdated = removeItemFromArray(productId, productsCopy)
        setProducts(productsUpdated)
        syncBothProducts(username, productsUpdated)
    }

    const editProduct = (productBeingEdited, username) => {
        const productsCopy = deepClone(products)
        const indexOfProducToEdit = getIndex(productBeingEdited.id, products)
        productsCopy[indexOfProducToEdit] = productBeingEdited
        setProducts(productsCopy)
        syncBothProducts(username, productsCopy)
    }

    const resetProducts = (username) => {
        setProducts(fakeMenu.LARGE)
        syncBothProducts(username, fakeMenu.LARGE)
    }

    return { products, setProducts, resetProducts, addProduct, deleteProduct, editProduct }
}
