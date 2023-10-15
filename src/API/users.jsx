import axios from 'axios'

const API_URL = 'https://pos-rh30.onrender.com/cregister/api/user/'


export async function getUserIdFromApi(username) {
    try {
        const { data } = await axios.get(`${API_URL}name=${username}`, {
            headers: {
                'Access-Control-Allow-Origin': 'http://mypos.cyrilPersonne.website'
            }
        });
        return data.id;
    } catch (error) {
        console.log(error)
    }
}


export async function createUserFromApi(username) {
    try {
        await axios.post(`${API_URL}create`, { name: username }, {
            headers: {
                'Access-Control-Allow-Origin': 'http://mypos.cyrilPersonne.website'
            }
        });
    } catch (error) {
        console.log(error)
    }
}


