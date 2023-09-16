import axios from 'axios'

const API_URL = 'http://localhost:3001/cregister/api/customer/'

export async function initialiseCustomersFromApi(userId) {
    try {
        await axios.post(`${API_URL}initialise/${userId}`);
    } catch (error) {
        console.log(error)
    }
}

export async function getCustomersFromApi(userId) {
    try {
        const { data } = await axios.get(`${API_URL}user=${userId}`);
        return data;
    } catch (error) {
        console.log(error)
    }
}

