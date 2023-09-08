import axios from 'axios'
import { initialiseProductsFromApi } from './product';

const API_URL = 'http://localhost:3001/cregister/api/user/'


export async function getUserIdFromApi(username) {
    try {
        const { data } = await axios.get(`${API_URL}name=${username}`);
        return data.id;
    } catch (error) {
        console.log(error)
    }
}

export async function initialiseUserFromApi(username) {
    await createUserFromApi(username)
    const userId = await getUserIdFromApi(username)
    initialiseProductsFromApi(userId)
}

export async function createUserFromApi(username) {
    try {
        await axios.post(`${API_URL}create`, { name: username });
    } catch (error) {
        console.log(error)
    }
}


export const authentificateUser = async (username) => {
    const existingUser = await getUserIdFromApi(username)
    if (!existingUser) {
        await initialiseUserFromApi(username)
    }
    return existingUser
}