import { useState } from "react"
import { addItemToArray, deepClone, getIndex, removeItemFromArray, removeItemsCategoryFromArray } from "../utils/arrays"
import { createProductFromApi, deleteProductFromApi, updateProductFromApi } from "../API/product"

export const useProducts = () => {

    const [products, setProducts] = useState()

    const addProduct = async (newProduct, userId, categoryId) => {
        let newProductApi;
        await createProductFromApi(newProduct, userId, categoryId)
            .then(apiResponse => {
                newProductApi = apiResponse;
            });
        const productsCopy = deepClone(products);
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
