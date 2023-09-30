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
        await axios.delete(`${API_URL}delete/${productId}`);
    } catch (error) {
        console.log(error)
    }
}


export async function createProductFromApi(newProduct, userId) {
    try {
        const { data } = await axios.post(`${API_URL}create`, { title: newProduct.title, price: newProduct.price, isAvailable: newProduct.isAvailable ?? "true", imageSource: newProduct.imageSource ?? "/image/coming-soon.png", user: { id: userId }, category: { id: newProduct.category.id } });
        console.log("data", data);
        return data;
    } catch (error) {
        console.log(error)
    }
}


export async function updateProductFromApi(product) {
    try {
        await axios.put(`${API_URL}update/${product.id}`, { title: product.title, price: product.price, isAvailable: product.isAvailable, imageSource: product.imageSource ?? "/image/coming-soon.png" });
    } catch (error) {
        console.log(error)
    }
}


