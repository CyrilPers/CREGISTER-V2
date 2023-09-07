import { useState } from "react"
import { fakeMenu } from "../fakeData/fakeMenu"
import { deepClone, getIndex, removeItemFromArray } from "../utils/arrays"
import { syncBothProducts } from "../API/products"
import { createProductFromApi, deleteProductFromApi, getProductsFromApi, updateProductFromApi } from "../API/product"


export const useProducts = () => {

    const [products, setProducts] = useState()



    const addProduct = async (newProduct, userId) => {
        await createProductFromApi(newProduct, userId)
        const updatedProducts = await getProductsFromApi(userId);
        setProducts(updatedProducts);
    }

    const deleteProduct = (productId) => {
        deleteProductFromApi(productId)
        const productsCopy = deepClone(products)
        const productsUpdated = removeItemFromArray(productId, productsCopy)
        setProducts(productsUpdated)
    }

    const editProduct = (productBeingEdited) => {
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
