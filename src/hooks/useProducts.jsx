import { useState } from "react"
import { fakeMenu } from "../fakeData/fakeMenu"
import { deepClone, getIndex, removeItemFromArray } from "../utils/arrays"
import { syncBothProducts } from "../API/products"


export const useProducts = (second) => {

    const [products, setProducts] = useState(undefined)

    const resetProducts = (username) => {
        setProducts(fakeMenu.LARGE)
        syncBothProducts(username, fakeMenu.LARGE)
    }

    const addProduct = (newProduct, username) => {
        const productsCopy = deepClone(products)
        const productsUpdated = [newProduct, ...productsCopy]
        setProducts(productsUpdated)
        syncBothProducts(username, productsUpdated)
    }

    const deleteProduct = (productId, username) => {
        const productsUpdated = removeItemFromArray(productId, products)
        setProducts(productsUpdated)
        syncBothProducts(username, productsUpdated)
    }

    const editProduct = (product, username) => {
        const productsCopy = deepClone(products)
        const indexOfProducToEdit = getIndex(product.id, products)
        productsCopy[indexOfProducToEdit] = product
        setProducts(productsCopy)
    }
    return { products, setProducts, resetProducts, addProduct, deleteProduct, editProduct }
}
