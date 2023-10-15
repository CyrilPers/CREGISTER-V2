import axios from 'axios'

const API_URL = 'https://pos-rh30.onrender.com/cregister/api/invoiceline/'

export async function getBasketFromApi(invoiceId) {
    try {
        const { data } = await axios.get(`${API_URL}list/${invoiceId}`, {
            headers: {
                'Access-Control-Allow-Origin': 'http://mypos.cyrilPersonne.website'
            }
        });
        return data;
    } catch (error) {
        console.log(error)
    }
}


export async function deleteBasketProductFromApi(productId) {
    try {
        await axios.delete(`${API_URL}delete/${productId}`, {
            headers: {
                'Access-Control-Allow-Origin': 'http://mypos.cyrilPersonne.website'
            }
        });
    } catch (error) {
        console.log(error)
    }
}

export async function createBasketProductFromApi(newProduct, invoice, userId) {
    try {
        const { data } = await axios.post(`${API_URL}create`, { productName: newProduct.title, productPrice: newProduct.price, productId: newProduct.id, imageSource: newProduct.imageSource, quantity: newProduct.quantity, invoice: { id: invoice.id, user: userId } }, {
            headers: {
                'Access-Control-Allow-Origin': 'http://mypos.cyrilPersonne.website'
            }
        });
        return data;
    } catch (error) {
        console.log(error)
    }
}


export async function updateBasketProductFromApi(newProduct) {
    try {
        await axios.put(`${API_URL}update/${newProduct.id}`, { productId: newProduct.productId, productName: newProduct.productName, productPrice: newProduct.productPrice, imageSource: newProduct.imageSource, quantity: newProduct.quantity, invoice: { id: newProduct.invoice.id } }, {
            headers: {
                'Access-Control-Allow-Origin': 'http://mypos.cyrilPersonne.website'
            }
        });
    } catch (error) {
        console.log(error)
    }
}