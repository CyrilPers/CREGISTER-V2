import axios from 'axios'

const API_URL = 'http://localhost:3001/cregister/api/product/'

export async function getProductsFromApi(userId) {
    try {
        const { data } = await axios.get(`${API_URL}user=${userId}`);
        return data;
    } catch (error) {
        console.log(error)
    }
}

export async function deleteProductFromApi(productId) {
    try {
        console.log(productId)
        await axios.delete(`${API_URL}delete/${productId}`);
    } catch (error) {
        console.log(error)
    }
}

export async function createProductFromApi(newProduct, userId) {
    try {
        await axios.post(`${API_URL}create`, { title: newProduct.title, price: newProduct.price, isAvailable: newProduct.isAvailable, ImageSource: newProduct.imageSource, user_id: userId });
    } catch (error) {
        console.log(error)
    }
}


export async function updateProductFromApi(product) {
    console.log("productid", product.id)
    console.log("product", product)
    try {
        await axios.post(`${API_URL}update/${product.id}`, { title: product.title, price: product.price, isAvailable: product.isAvailable, ImageSource: product.imageSource });
    } catch (error) {
        console.log(error)
    }
}