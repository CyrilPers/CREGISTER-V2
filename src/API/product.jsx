import axios from 'axios'

const API_URL = 'http://localhost:3001/cregister/api'

export async function getProductsFromApi(userId) {
    try {
        const { data } = await axios.get(`${API_URL}/product/user=${userId}`);
        return data;
    } catch (error) {
        console.log(error)
    }
}