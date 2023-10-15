import axios from 'axios'

const API_URL = 'http://pos-rh30.onrender.com/cregister/api/user/'


export async function getUserIdFromApi(username) {
    try {
        const { data } = await axios.get(`${API_URL}name=${username}`);
        return data.id;
    } catch (error) {
        console.log(error)
    }
}


export async function createUserFromApi(username) {
    try {
        await axios.post(`${API_URL}create`, { name: username });
    } catch (error) {
        console.log(error)
    }
}


