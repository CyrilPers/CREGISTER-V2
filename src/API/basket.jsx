import axios from 'axios'

const API_URL = 'http://localhost:3001/cregister/api/invoiceline/'

export async function getBasketFromApi(invoiceId) {
    try {
        const { data } = await axios.get(`${API_URL}list/${invoiceId}`);
        return data;
    } catch (error) {
        console.log(error)
    }
}

export async function getBasketProductByProductIdFromApi(productId) {
    try {
        const { data } = await axios.get(`${API_URL}productid=${productId}`);
        return data;
    } catch (error) {
        console.log(error)
    }
}

export async function deleteBasketProductFromApi(productId) {
    try {
        await axios.delete(`${API_URL}delete/${productId}`);
    } catch (error) {
        console.log(error)
    }
}

export async function createBasketProductFromApi(newProduct, invoiceId) {
    try {
        await axios.post(`${API_URL}create`, { productName: newProduct.title, productPrice: newProduct.price, imageSource: newProduct.imageSource, quantity: newProduct.quantity, invoice: { id: invoiceId } });
    } catch (error) {
        console.log(error)
    }
}


export async function updateBasketProductFromApi(basketProduct) {
    try {
        await axios.put(`${API_URL}update/${basketProduct.id}`, { quantity: basketProduct.quantity });
    } catch (error) {
        console.log(error)
    }
}