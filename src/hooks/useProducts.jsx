import { useState } from "react"
import { addItemToArray, deepClone, getIndex, removeItemFromArray, removeItemsCategoryFromArray } from "../utils/arrays"
import { useProductsApi } from "../API/useProductsApi"

export const useProducts = () => {

    const [products, setProducts] = useState()
    const { createProductFromApi, deleteProductFromApi, updateProductFromApi, newProductApi } = useProductsApi()


    const addProduct = async (newProduct, userId, categoryId) => {
        await createProductFromApi(newProduct, userId, categoryId)
        console.log("newProductApi", newProductApi)
        const productsCopy = deepClone(products)
        const updatedProducts = addItemToArray(newProductApi, productsCopy);
        setProducts(updatedProducts);
    }

    const deleteProduct = async (productId) => {
        await deleteProductFromApi(productId)
        const productsCopy = deepClone(products)
        const updatedProducts = removeItemFromArray(productId, productsCopy)
        setProducts(updatedProducts)
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
        const updatedProducts = removeItemsCategoryFromArray(categoryId, productsCopy)
        setProducts(updatedProducts)
    }


    return { products, setProducts, addProduct, deleteProduct, editProduct, deleteProductsFromCategory }
}
