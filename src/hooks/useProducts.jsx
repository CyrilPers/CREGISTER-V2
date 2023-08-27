import { useState } from "react"
import { fakeMenu } from "../fakeData/fakeMenu"
import { deepClone, removeItemFromArray } from "../utils/arrays"

export const useProducts = (second) => {

    const [products, setProducts] = useState(fakeMenu.LARGE)

    const resetProducts = () => {
        setProducts(fakeMenu.LARGE)
    }

    const addProduct = (newProduct) => {
        const productsCopy = deepClone(products)
        const productsUpdated = [newProduct, ...productsCopy]
        setProducts(productsUpdated)
    }

    const deleteProduct = (productId) => {
        const productsUpdated = removeItemFromArray(productId, products)
        setProducts(productsUpdated)
    }

    const editProduct = (productBeingEdited) => {
        const productsCopy = deepClone(products)
        const indexOfProducToEdit = products.findIndex(
            (product) => product.id === productBeingEdited.id
        )

        productsCopy[indexOfProducToEdit] = productBeingEdited
        setProducts(productsCopy)
    }
    return { products, setProducts, resetProducts, addProduct, deleteProduct, editProduct }
}
