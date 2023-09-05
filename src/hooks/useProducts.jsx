import { useState } from "react"
import { fakeMenu } from "../fakeData/fakeMenu"
import { deepClone, getIndex, removeItemFromArray } from "../utils/arrays"
import { syncBothProducts } from "../API/products"
import { createProductFromApi, deleteProductFromApi, updateProductFromApi } from "../API/product"


export const useProducts = () => {

    const [products, setProducts] = useState()



    const addProduct = (newProduct, userId) => {
        const productsCopy = deepClone(products)
        const productsUpdated = [newProduct, ...productsCopy]
        setProducts(productsUpdated)
        createProductFromApi(newProduct)
    }

    const deleteProduct = (productId) => {
        const productsCopy = deepClone(products)
        const productsUpdated = removeItemFromArray(productId, productsCopy)
        setProducts(productsUpdated)
        deleteProductFromApi(productId)
    }

    const editProduct = (productBeingEdited, username) => {
        const productsCopy = deepClone(products)
        const indexOfProducToEdit = getIndex(productBeingEdited.id, products)
        productsCopy[indexOfProducToEdit] = productBeingEdited
        setProducts(productsCopy)
        updateProductFromApi(productBeingEdited)
    }

    const resetProducts = (username) => {
        setProducts(fakeMenu.LARGE)
        syncBothProducts(username, fakeMenu.LARGE)
    }

    return { products, setProducts, resetProducts, addProduct, deleteProduct, editProduct }
}
