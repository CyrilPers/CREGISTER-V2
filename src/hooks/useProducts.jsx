import { useState } from "react"
import { deepClone, getIndex, removeItemFromArray, removeItemsCategoryFromArray } from "../utils/arrays"
import { createProductFromApi, deleteProductFromApi, getProductsFromApi, updateProductFromApi } from "../API/products"

export const useProducts = () => {

    const [products, setProducts] = useState()


    const addProduct = async (newProduct, userId, categoryId) => {
        await createProductFromApi(newProduct, userId, categoryId)
        // update avec API pour avoir l'ID de la BDD afin de pouvoir delete
        const updatedProducts = await getProductsFromApi(userId);
        setProducts(updatedProducts);
    }

    const deleteProduct = async (productId) => {
        await deleteProductFromApi(productId)
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

    const deleteProductsFromCategory = (categoryId) => {
        const productsCopy = deepClone(products)
        const productsUpdated = removeItemsCategoryFromArray(categoryId, productsCopy)
        setProducts(productsUpdated)
    }


    return { products, setProducts, addProduct, deleteProduct, editProduct, deleteProductsFromCategory }
}
