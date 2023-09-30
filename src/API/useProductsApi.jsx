import axios from 'axios'
import { useState } from 'react';


export const useProductsApi = () => {

    const [newProductApi, setNewProductApi] = useState()

    const API_URL = 'http://localhost:3001/cregister/api/product/'

    const getProductsFromApi = async (userId) => {
        try {
            const { data } = await axios.get(`${API_URL}user=${userId}`);
            return data;
        } catch (error) {
            console.log(error)
        }
    }

    const deleteProductFromApi = async (productId) => {
        try {
            await axios.delete(`${API_URL}delete/${productId}`);
        } catch (error) {
            console.log(error)
        }
    }

    const createProductFromApi = async (newProduct, userId) => {
        try {
            const { data } = await axios.post(`${API_URL}create`, { title: newProduct.title, price: newProduct.price, isAvailable: newProduct.isAvailable ?? "true", imageSource: newProduct.imageSource ?? "/image/coming-soon.png", user: { id: userId }, category: { id: newProduct.category.id } });
            console.log("data", data);
            setNewProductApi(data);
            return data;
        } catch (error) {
            console.log(error)
        }
    }


    const updateProductFromApi = async (product) => {
        try {
            await axios.put(`${API_URL}update/${product.id}`, { title: product.title, price: product.price, isAvailable: product.isAvailable, imageSource: product.imageSource ?? "/image/coming-soon.png" });
        } catch (error) {
            console.log(error)
        }
    }

    return { getProductsFromApi, deleteProductFromApi, createProductFromApi, updateProductFromApi, newProductApi, setNewProductApi }
}
